import { FC } from "react";
import { Div } from "../components";

type IndexProps = {};

export const Index: FC<IndexProps> = ({}) => <>
  <Div maxW={1200} m="auto" p={8} minH="100vh">
    home
  </Div>
</>;

export default Index;