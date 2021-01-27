import { FC } from "react";
import Link from 'next/link';
import { Div } from "../components";
import { query } from "../lib/db";

export type categoryType = { id: string, name: string, url: string }
export type subCategoryType = { id: string, name: string, url: string }

type IndexProps = {
  categories: categoryType[]
};

export const Index: FC<IndexProps> = ({ categories }) => <>
  <Div maxW={1200} m="auto" p={8} minH="100vh">
    <h1>Let's get Started with your goal</h1>
    
    <Div d="flex" justify="space-between">
      {
        categories.map(({ id, name, url }) => (
          <Link key={id} href={`/goal/${url}`}><a><Div useClass="card" d="flex" p={8} border="1px solid black">{name}</Div></a></Link>
        ))
      }
    </Div>
    
  </Div>
</>;

export async function getStaticProps() {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const res: categoryType[] = await query(`select * from goal_categories ORDER BY id`);
  console.log(res)
  const categories = res.map(goal=>goal);
  
  // Pass post data to the page via props
  return { props: { categories } };
}

export default Index;