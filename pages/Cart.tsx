import type { NextPage } from "next";
import dynamic from "next/dynamic";
import Head from 'next/head'

const CartContainer = dynamic(() => import("../src/features/CartContainer"), {
  ssr: false,
});

const CartPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Ig.Store | Cart</title>
      </Head>
      <div>
        <CartContainer />
      </div>
    </>
  );
};

export default CartPage;
