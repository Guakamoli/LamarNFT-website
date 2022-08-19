import "../styles/global.css";
import Head from "next/head";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ethers } from "ethers";

import Web3Modal from "web3modal";
import CoinbaseWalletSDK from "@coinbase/wallet-sdk";
import WalletConnect from "@walletconnect/web3-provider";
import React, { useState, useEffect } from "react";
import { callbacks } from "../libs/callbacks.ts";
import { useRouter } from "next/router";

const providerOptions = {
  coinbasewallet: {
    package: CoinbaseWalletSDK,
    options: {
      appName: "Lamar Odom's Metaverse",
      infuraId: process.env.NEXT_PUBLIC_INFURA_KEY,
    },
  },
  // walletconnect: {
  //   package: WalletConnect,
  //   options: {
  //     infuraId: "ff163f31c0514eaab8b38564c3124fdd",
  //   },
  // },
};

const MetaHead = ({
  url,
  title,
  description,
  image,
  viewport,
  webType = "website",
  addon = null,
  children = null,
}) => {
  return (
    <Head>
      <title>Lamar Odom's Metaverse</title>
      <meta property="og:title" />
      <meta property="og:description" />
      <meta name="description" />
      <meta content="width=1300" name="viewport" />
      <meta name="viewport" content="width=1300" />
      <meta property="og:locale" content="zh-cn" />
    </Head>
  );
};

let web3Modal = null;

function MyApp({ Component, pageProps }) {
  const [provider, setProvider] = useState();
  const [library, setLibrary] = useState();
  const router = useRouter();

  useEffect(() => {
    web3Modal = new Web3Modal({
      cacheProvider: true, // optional
      providerOptions, // required
    });
    if (router.pathname === "/mint" && !web3Modal.cachedProvider) {
      router.replace("/");
      return;
    }
    if (web3Modal.cachedProvider) {
      connectWallet("init");
    }
  }, []);

  const connectWallet = async (timing = "") => {
    try {
      const provider = await web3Modal.connect();
      const library = new ethers.providers.Web3Provider(provider);
      const accounts = await library.listAccounts();
      setProvider(provider);
      setLibrary(library);
      if (timing === "init" && accounts) {
        callbacks.run("initWallet", accounts[0]);
      }
      return true;
    } catch (error) {
      toast.error(error.message, {
        position: "top-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    return false;
  };

  const disconnect = async () => {
    await web3Modal.clearCachedProvider();
    callbacks.run("initWallet", accounts[0]);
  };

  useEffect(() => {
    if (provider?.on) {
      const handleAccountsChanged = async (accounts) => {
        if (Array.isArray(accounts) && accounts.length === 0) {
          await callbacks.run("initWallet");
          if (web3Modal) {
            await web3Modal.clearCachedProvider();
            setProvider(undefined);
            setLibrary(undefined);
          }
        }
      };

      const handleChainChanged = (_hexChainId) => {
        console.info(_hexChainId, "-------_hexChainId----");
        window.location.reload();
      };

      const handleDisconnect = async () => {
        console.log("disconnect", error);
        disconnect();
        await web3Modal.clearCachedProvider();
      };

      provider.on("accountsChanged", handleAccountsChanged);
      provider.on("chainChanged", handleChainChanged);
      provider.on("disconnect", handleDisconnect);

      return () => {
        if (provider.removeListener) {
          provider.removeListener("accountsChanged", handleAccountsChanged);
          provider.removeListener("chainChanged", handleChainChanged);
          provider.removeListener("disconnect", handleDisconnect);
        }
      };
    }
  }, [provider]);

  return (
    <>
      <MetaHead />
      <ToastContainer
        position="top-left"
        autoClose={5000}
        closeOnClick={true}
        pauseOnHover={true}
        theme="light"
      />
      <Component
        {...pageProps}
        connectWallet={connectWallet}
        provider={provider}
        library={library}
        router={router}
      />
    </>
  );
}

export default MyApp;
