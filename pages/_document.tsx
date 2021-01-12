import Document, { Head, Html, Main, NextScript } from "next/document";
import { flushToReact } from 'next-styled-system'

class MyDocument extends Document {
  
  render(): JSX.Element {
    const styles = [...flushToReact()]
    return (
      <Html lang="en">
        <Head>
          {styles}
          <link
            rel="preload"
            href="/fonts/inter-var-latin.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
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