import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charset="utf-8" />
          <link rel="icon" href="/assets/Logo.png" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />
          <meta name="MetaGunner" />
          <link rel="apple-touch-icon" href="/assets/Logo.png" />
          <meta
            name="description"
            content="A world where you can immerse yourself in battles located in a barren wilderness inhabited by monsters. Grab your friends and get ready to earn valuable rewards and enjoy the moment after stressful hours of work."
          />
          <meta property="og:title" content="MetaGunner" />
          <meta property="og:site_name" content="MetaGunner" />
          <meta property="og:url" content="https://metagunner.io/" />
          <meta
            property="og:description"
            content="A world where you can immerse yourself in battles located in a barren wilderness inhabited by monsters. Grab your friends and get ready to earn valuable rewards and enjoy the moment after stressful hours of work."
          />
          <meta property="og:image" content="/assets/Thumbnail.png" />
          <meta property="og:image:type" content="image/png" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:type" content="website" />
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-QKN1HXMBLY"
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-QKN1HXMBLY', {
                  page_path: window.location.pathname,
                });
              `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
