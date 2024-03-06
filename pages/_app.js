// pages/_app.js
import { useEffect } from 'react';
import Script from 'next/script';
import { useRouter } from 'next/router';
import "../styles/globals.css";
import Layout from "../components/Layout";
import Transition from "../components/Transition";
import { motion } from "framer-motion";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    // Executar o código do Google Tag Manager manualmente, pois o Next.js faz SSR
    (function(w,d,s,l,i){
      w[l]=w[l]||[];
      w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
      var f=d.getElementsByTagName(s)[0], j=d.createElement(s), dl=l!='dataLayer'?'&l='+l:'';
      j.async=true; j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
      f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-5LFXZ33G');
  }, []);

  return (
    <Layout>
      <Head>
        {/* Adicione as informações do título e descrição aqui */}
        <title>  Mocatech</title>
        <meta name="description" content="Desenvolvedor de Sites" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.png" type="image/png" />
        {/* Outras meta tags... */}
      </Head>

      {/* Google Tag Manager (noscript) */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/gtag/js?id=G-8D5M4XV59S"
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        ></iframe>
      </noscript>
      {/* End Google Tag Manager (noscript) */}

      {/* Google Tag Manager */}
      <Script id="google-tag-manager" strategy="lazyOnload">
        {`
          (function(w,d,s,l,i){
            w[l]=w[l]||[];
            w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
            var f=d.getElementsByTagName(s)[0], j=d.createElement(s), dl=l!='dataLayer'?'&l='+l:'';
            j.async=true; j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
            f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','G-8D5M4XV59S');
        `}
      </Script>
      {/* End Google Tag Manager */}

      <motion.div key={router.route} className="h-full">
        <Transition />
        <Component {...pageProps} />
      </motion.div>
    </Layout>
  );
}

export default MyApp;
