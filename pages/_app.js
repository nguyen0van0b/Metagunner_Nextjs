import "../styles/globals.css";
import "./AOS.css";
import "./App.css";
import "./GlobalStyles.scss";
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>MetaGunner - The Evolution of Gaming</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
