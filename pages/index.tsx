import { NamedElement } from "next-styled-system";
import Image from "next/image";
import Link from "next/link";
import { FC, useEffect, useRef } from "react";
import { Header, Nav } from "../components";

const NavLinkElement = NamedElement("a", "nav-link", {
  textTransform: "uppercase",
  fz: 14,
  weight: 500,
  mx: 4,
  d: "flex",
  align: "center",
  borderBottom: "4px solid transparent",
  transition: `0.1s`,
  mt: 1,
  letterSpacing: `0.05em`,
  width: `50%`,
  _hfa: { borderBottomColor: `dodgerblue`, color: `dodgerblue` }
}, true);

const NavData = [
  { title: `Dashboard`, href: `/#` },
  { title: `Vision`, href: `/#` },
  { title: `Goals`, href: `/#` },
  { title: `Tactics`, href: `/#` },
  { title: `Habits`, href: `/#` }
];

type IndexProps = {};

export const Index: FC<IndexProps> = ({}) => 
  /* const tester = useRef();
  useEffect(() => {
    console.log(tester.current);
  }); */
   <>
    <Header backdropFilter="saturate(180%) blur(5px)">
      <Nav h={80} mx="auto" maxW={1200} d="flex" px={5} justify="space-between">
        <Image src="/logo.svg" width={105} height={56} />
        <Nav d="flex">
          {
            NavData.map(({ title, href }) => (
              <Link key={title} href={href} passHref>
                <NavLinkElement onClick={(e) => { e.preventDefault(); }}>{title}</NavLinkElement>
              </Link>
            ))
          }
        </Nav>
      </Nav>
    </Header>
  </>
;

export default Index; 