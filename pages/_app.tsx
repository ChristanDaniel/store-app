import type { AppProps } from 'next/app'
import { GlobalStyle } from '../styles/globals'
import '../styles/globals'


import { useState } from 'react'
import dynamic from 'next/dynamic'

import { OpenModalFavoriteCart } from "../src/components/OpenModalCart";
import { ProductContainerProvider } from "../src/features/ProductContainerContext";


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Header = dynamic(() => import('../src/components/Header'), {
  ssr: false
})

function MyApp({ Component, pageProps }: AppProps) {
  const [isOpenModalFavoriteCart, setIsOpenModalFavoriteCart] = useState(false)

  function handleOpenCartModal() {
    setIsOpenModalFavoriteCart(true)
  }

  function handleCloseCartModal() {
    setIsOpenModalFavoriteCart(false)
  }
  return (
    <>
      <ProductContainerProvider>
        <Header onOpenModalCart={handleOpenCartModal} />
        <Component {...pageProps} />
        <GlobalStyle />
        <OpenModalFavoriteCart isOpen={isOpenModalFavoriteCart} onRequestClose={handleCloseCartModal} />
      </ProductContainerProvider>
    </>
  )
}

export default MyApp
