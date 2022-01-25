import "../styles/global.css";
import Head from "next/head";
const MetaHead = ({ url, title, description, image, viewport, webType = "website", addon = null, children = null }) => {
  
    return (
      <Head>
        <title>Torimi NFT - Lamar Odom's Metaverse</title>
        <meta property="og:title"  />
        <meta property="og:description"  />
        <meta name="description" />
        <meta content="width=1300" name="viewport" />
        <meta name="viewport" content="width=1300" />
        <meta property="og:locale" content="zh-cn" />
      </Head>
    );
  };
  
function MyApp({ Component, pageProps }) {
    return (
        <>
            <MetaHead />
            <Component {...pageProps} />
        </>
    )
    
  }
  
  export default MyApp;
  