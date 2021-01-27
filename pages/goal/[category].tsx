import Link from "next/link";
import { FC } from "react";
import { Div } from "../../components";
import { query } from "../../lib/db";
import { categoryType } from "../index";

type HealthProps = {
  category: categoryType
};

export const Category: FC<HealthProps> = ({ category }) => <>
  <Div maxW={1200} m="auto" p={8} minH="100vh">
    <h1>{category.name}</h1>
    
    <Div d="flex" justify="space-between">
      <Link href="/goal/health/sleep"><a><Div useClass="card" d="flex" p={8} border="1px solid black">Better
        Sleep</Div></a></Link>
      <Link href="/goal/health/fitness"><a><Div className="card">Better Fitness</Div></a></Link>
      <Link href="/goal/health/eating"><a><Div className="card">Better Eating</Div></a></Link>
    </Div>
  
  </Div>
</>;

export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res: { url: string }[] = await query(`select url from goal_categories ORDER BY id ASC`);
  
  const paths = res.map(({ url }) => `/goal/${url}`);
  
  // Get the paths we want to pre-render based on posts
  /* const paths = posts.map((post) => `/posts/${post.id}`) */
  
  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const res: categoryType[] = await query(`select * from goal_categories WHERE url = "${params.category}"`);
  const category = res[0];
  const subCategory = await query(`SELECT * FROM goal_sub_categories WHERE goal_category_id = ${category.id}`)
  // Pass post data to the page via props
  return { props: { category, subCategory } };
}

export default Category;