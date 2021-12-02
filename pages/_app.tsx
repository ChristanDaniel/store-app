import { GlobalStyle } from "../styles/globals";
import "../styles/Global";

import type { AppProps } from "next/app";

import { useState } from "react";
import dynamic from "next/dynamic";

import { ProductContainerProvider } from "../src/features/ProductContainerContext";

const Header = dynamic(() => import("../src/components/Header"), {
  ssr: false,
});

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <>
      <GlobalStyle />
        <ProductContainerProvider>
          <Component {...pageProps} />
        </ProductContainerProvider>
    </>
  );
}

export default MyApp;
