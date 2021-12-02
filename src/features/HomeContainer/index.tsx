/* eslint-disable @next/next/no-img-element */
import axios from 'axios'
import { useRouter } from 'next/dist/client/router'
import React, { useContext, useEffect, useState } from 'react'
import { Footers } from '../../components/Footers'
import { ProductContainerContext } from '../ProductContainerContext'

import { MainContainer, Banner, MainContent, MainContentDiv } from './styles'

interface ProductProps {
  category?: string
  description?: string
  id: number
  image: string
  price: number
  rating?: [
    {
      rate: string
      count: string
    }
  ]
  title: string
  count: number
}

const HomeContainer = (): JSX.Element => {
  const [teste, setTeste] = useState('')

  const { products } = useContext(ProductContainerContext)
  const router = useRouter()

  useEffect(() => {}, [])

  return (
    <>
      <MainContainer>
        <Banner src="https://img.terabyteshop.com.br/banner/1200.jpg" alt="teste" />
        <MainContent>
          {products.map((product, index) => {
            return (
              <MainContentDiv key={product.id + index}>
                <img src={`${product.image}`} alt="Mouse" />

                {/* <button onClick={() => handleAddCart(product)}>Adicionar no Carrinho</button> */}
                <h3>{product.title}</h3>
                <span>${product.price}</span>
                <p>{product.price}</p>
                <p>ou até 6x de R$ 50,00</p>
                <button onClick={() => router.push(`/Product/${product.id}`)}>Comprar Agora</button>
              </MainContentDiv>
            )
          })}
        </MainContent>
        <Footers />
      </MainContainer>
    </>
  )
}
export default HomeContainer
