import GoogleFonts from "next-google-fonts";
import { AppProps } from "next/app";
import Head from "next/head";
import React, { FC, useEffect } from "react";

export const Root: FC<AppProps> = ({ pageProps, Component }) => {
  
  useEffect(() => {
    process.env.NODE_ENV === `production` && console.log("%c" +
      "HEY YOU! I see you sneaking in our code. Our Page is custom made, something we've worked hard on so please do not copy. " +
      "LEARN FROM IT AND MAKE IT YOUR OWN. Questions? Just drop us an email at code@tellmann.co.za !",
      "background: rgb(0,0,0);color: #fafafa;font-size: 24px;font-weight: bold;padding: 25px 10px;text-align: center;text-shadow: 2px 2px 0 rgba(45, 45, 45);");
  });
  return (
    <>
      <>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        </Head>
        <GoogleFonts href="https://fonts.googleapis.com/css2?family=Fira+Code&family=Inter:wght@400;500;600;700&display=swap" />
      </>
      <Component {...pageProps} />
      <style jsx global>{`
        html {
          font-family: Inter, -apple-system, sans-serif;
        }
      `}</style>
    </>
  );
};

export default Root;
