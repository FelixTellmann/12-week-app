import { Provider } from "next-auth/client";
import { Element } from "next-styled-system";
import { AppProps } from "next/app";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { FC, useEffect } from "react";
import { Header, Nav } from "../components";

const NavData = [
  { title: `Goals`, href: `/` },
  { title: `Login`, href: `/login` }
];

const NavLinkElement = Element("a", {
  textTransform: "uppercase",
  fz: 14,
  weight: 500,
  mx: 4,
  d: "flex",
  align: "center",
  borderBottom: "4px solid transparent",
  transition: `0.1s all`,
  mt: 1,
  letterSpacing: `0.05em`,
  width: `50%`,
  _hfa: { borderBottomColor: `dodgerblue`, color: `dodgerblue` }
}, true);

export const Root: FC<AppProps> = ({ pageProps, Component }) => {
  
  useEffect(() => {
    process.env.NODE_ENV === `production` && console.log("%c" +
      "HEY YOU! I see you sneaking in our code. Our Page is custom made, something we've worked hard on so please do not copy. " +
      "LEARN FROM IT AND MAKE IT YOUR OWN. Questions? Just drop us an email at code@tellmann.co.za !",
      "background: rgb(0,0,0);color: #fafafa;font-size: 24px;font-weight: bold;padding: 25px 10px;text-align: center;text-shadow: 2px 2px 0 rgba(45, 45, 45);");
    console.log(pageProps)
  });
  
  return (
    <>
      <Provider session={pageProps.session}>
        <>
          <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
          </Head>
        </>
        <Header backdropFilter="saturate(180%) blur(5px)">
          <Nav h={80} mx="auto" maxW={1200} d="flex" px={5} justify="space-between">
            <Image src="/logo.svg" width={105} height={56} />
            <Nav d="flex">
              {
                NavData.map(({ title, href }) => (
                  <Link key={title} href={href} passHref>
                    <NavLinkElement useClass="nav-link" p={2}>{title}</NavLinkElement>
                  </Link>
                ))
              }
            </Nav>
          </Nav>
        </Header>
        <Component {...pageProps} />
        <style jsx global>{`
          html {
            font-family: Inter, -apple-system, sans-serif;
          }
        `}</style>
      </Provider>
    </>
  );
};

export default Root;
