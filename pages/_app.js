import "../styles/global.css";
import Head from "next/head";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const MetaHead = ({ url, title, description, image, viewport, webType = "website", addon = null, children = null }) => {
  
    return (
      <Head>
        <title>Lamar Odom's Metaverse</title>
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
            <ToastContainer
              position='top-left'
              autoClose={5000}
              closeOnClick={true}
              pauseOnHover={true}
              theme='light' />
            <Component {...pageProps} />
        </>
    )
    
  }
  
  export default MyApp;
  