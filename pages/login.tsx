import type { NextPage } from "next";
import dynamic from "next/dynamic";
import Head from 'next/head'

const LoginContainer = dynamic(() => import("../src/features/LoginContainer"), {
  ssr: false,
});

const LoginPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Ig.Store | Login</title>
      </Head>
      <LoginContainer />

    </>
  );
};

export default LoginPage;
