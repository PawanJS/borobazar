import Head from "next/head";
import { type NextPage } from "next";

import Layout from "@/layout";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>BoroBazar</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        <Layout>Banner</Layout>
      </main>
    </>
  );
};

export default Home;
