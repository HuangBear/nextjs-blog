import Layout from "../../components/layout";
import { getAllPostIds } from "../../lib/posts";

export default function Post() {
  return <Layout>...</Layout>;
}

/**
 * Next.js will use this function to get ALL possible values for 'id' (because file name is [id].js)
 * @returns
 */
export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}
