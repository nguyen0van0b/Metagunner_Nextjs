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
            content="The Leading Run & Gun Game on BSC."
          />
          <meta property="og:title" content="MetaGunner" />
          <meta property="og:site_name" content="MetaGunner" />
          <meta property="og:url" content="https://metagunner.io/" />
          <meta
            property="og:description"
            content="The Leading Run & Gun Game on BSC."
          />
          <meta property="og:image" content="/assets/Thumbnail_Metagunner.png" />
          <meta property="og:image:type" content="image/png" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:type" content="website" />

          <meta name="twitter:card" value="summary"/>
          <meta name="twitter:url" content="https://metagunner.io/" />
          <meta name="twitter:title" content="MetaGunner" />
          <meta
            name="twitter:description"
            content="The Leading Run & Gun Game on BSC."
          />
          <meta name="twitter:image" content="/assets/Thumbnail_Metagunner.png" />
          <meta name="twitter:site" content="@MetaGunner_io" />
          <meta name="twitter:creator" content="@MetaGunner_io"></meta>

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
