import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

import { A, Header, Nav } from "../components";

type IndexProps = {};

export const Index: FC<IndexProps> = ({}) => <>
  <Header>
    <Nav h={80} mx="auto" maxW={1200} d="flex" px={5} justify="space-between">
      <Image src="/logo.svg" width={105} height={56} />
      <Nav d="flex">
        {
          [
            { title: `Dashboard`, href: `/#` },
            { title: `Vision`, href: `/#` },
            { title: `Goals`, href: `/#` },
            { title: `Tactics`, href: `/#` },
            { title: `Habits`, href: `/#` }
          ].map(({ title, href }) => (
            <Link key={title} href={href} passHref>
              <A textTransform="uppercase"
                 fz={14}
                 weight={500}
                 mx={4}
                 d="flex"
                 align="center"
                 borderBottom="4px solid transparent"
                 mt={1}
                 _hfa={{ borderBottomColor: `dodgerblue`, color: `dodgerblue` }}
              >{title}</A>
            </Link>
          ))
        }
      </Nav>
    </Nav>
  </Header>
</>;

export default Index; 