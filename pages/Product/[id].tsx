import type { NextPage } from 'next'
import dynamic from "next/dynamic";


const Header = dynamic(() => import('../../src/components/Header'), {
  ssr: false
})

const ProductContainer = dynamic(() => import('../../src/features/ProductContainer'), {
  ssr: false
})

// const HomeContainer = dynamic(() => import('../src/features/HomeContainer'), {
//   ssr: false
// })


const Product: NextPage = () => {
  return (
    <>
    <div>
      <ProductContainer />
    </div>
    </>
  )
}

export default Product
