import Document, { Head, Html, Main, NextScript } from "next/document";
import { flushToReact } from 'next-styled-system'

class MyDocument extends Document {
  
  render(): JSX.Element {
    const styles = [...flushToReact()]
    return (
      <Html lang="en">
        <Head>{styles}</Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;