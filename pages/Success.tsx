import type { NextPage } from "next";
import dynamic from "next/dynamic";
import Head from 'next/head'

const SuccessContainer = dynamic(() => import("../src/features/SucessContainer"), {
  ssr: false,
});

const SuccessPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Ig.Store | Success</title>
      </Head>
      <SuccessContainer />
    </>
  );
};

export default SuccessPage;
