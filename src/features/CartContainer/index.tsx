import React, { FormEvent, useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/dist/client/router'

import { AiFillCreditCard } from 'react-icons/ai'
import { FaBarcode } from 'react-icons/fa'
import { CgTrashEmpty } from 'react-icons/cg'

import { TextField } from '@mui/material'

import {
  MainCartProducts,
  MainContentCartProducts,
  SectionPaymentCartContainer,
  DeliveryCepContainer,
  ProductContentCart,
  ButtonReduce,
  ButtonAdd,
  ProductPrice,
  PaymenteContainer,
  ProductCartContainer,
  AsidePaymentCartContainer
} from './styles'
import axios from 'axios'
import Button from '../../components/Button'

interface ProductProps {
  category: string
  description: string
  id: string
  image: string
  price: number
  rating: [
    {
      rate: string
      count: string
    }
  ]
  title: string
  // inventory: number;
  // promotion_amount: string;
}

const HomeProductContainer = (): JSX.Element => {
  const { contextValue, loginAuthentication, teste, setTeste } = useContext(ProductContainerContext)
  const { state } = contextValue

  const handleDeleteProductFavoriteCart = (index: number) => {
    const { state } = contextValue

    if (index > -1) {
      state.splice(index, 1)
    }

    localStorage.setItem('state', JSON.stringify(state))
    setRenderiza(!renderiza)
  }

  const handleIncrement = (count: number, id: number, price: number) => {
    teste.map((pp) => {
      if (pp.id === id) {
        pp.count = count + 1
        pp.price = price + pp.price

        localStorage.setItem('state', JSON.stringify(state))
        setRenderiza(!renderiza)
      }
    })
  }

  const handleDecrement = (count: number, id: number, price: number) => {
    if (count > 1) {
      teste.map((pp) => {
        if (pp.id === id) {
          pp.count = count - 1
          pp.price = price * 0.5

          localStorage.setItem('state', JSON.stringify(state))
          setRenderiza(!renderiza)
        }
      })
    } else {
      return
    }
  }

  const FormatedFavoriteCartValues = (ind: string, products: ProductProps[]) => {
    if (ind === 'soma') {
      return products.reduce((a, b) => a + b.price, 0)
    }
    if (ind === 'total') {
      if (verificarCep) {
        return products.reduce((a, b) => a + b.price, 0) + 50
      }
      return products.reduce((a, b) => a + b.price, 0)
    }
    if (ind === 'dividido') {
      if (verificarCep) {
        return products.reduce((a, b) => a + b.price, 50) / 3
      }
      return products.reduce((a, b) => a + b.price, 0) / 3
    }
    if (ind === 'desconto') {
      if (verificarCep) {
        return products.reduce((a, b) => a + b.price, 50) * 0.9
      }
      return products.reduce((a, b) => a + b.price, 0) * 0.9
    }
    if (ind === 'frete') {
      if (verificarCep) {
        return 50
      } else {
        return 0
      }
    }
  }

  // useEffect(() => {
  // }, []);

  return (
    <>
      <MainCartProducts>
        <h1>
          01036-970 CARRINHO <BsCart3 />
        </h1>
        <PaymenteContainer>
          <SectionPaymentCartContainer>
            <ProductCartContainer>
              {state.map((prod, index) => {
                return (
                  <>
                    <ProductContentCart key={prod.id + index}>
                      <img src={prod.image} alt={prod.title} />
                      <h4>{prod.title}</h4>
                      <div>
                        <p>Quantidade</p>
                        <div>
                          <ButtonReduce onClick={() => handleDecrement(prod.count, prod.id, prod.price)}>-</ButtonReduce>
                          <p>{prod.count}</p>
                          <ButtonAdd onClick={() => handleIncrement(prod.count, prod.id, prod.price)}>+</ButtonAdd>
                        </div>
                      </div>
                      <ProductPrice>R${prod.price.toFixed(2)}</ProductPrice>
                      <button onClick={() => handleDeleteProductFavoriteCart(index)}>
                        <CgTrashEmpty />
                      </button>
                    </ProductContentCart>
                  </>
                )
              })}
            </ProductCartContainer>
            <DeliveryCepContainer>
              <TextField
                placeholder="Qual CEP de entrega?"
                value={inputCEP}
                label="CEP"
                variant="outlined"
                onChange={(event) => setInputCEP(event.target.value)}
              />
              <Button onClick={handleDeliveryCEP}>CALCULAR</Button>
            </DeliveryCepContainer>
          </SectionPaymentCartContainer>

          <AsidePaymentCartContainer>
            <div>
              <h1>Resumo do Pedido</h1>
              <p>
                Subtotal:
                <span>R$ {FormatedFavoriteCartValues('soma', state)?.toFixed(2)}</span>
              </p>
              <p>
                Frete:
                <span>R$ {FormatedFavoriteCartValues('frete', state)?.toFixed(2)}</span>
              </p>
              <h4>
                TOTAL:
                <span>R$ {FormatedFavoriteCartValues('total', state)?.toFixed(2)}</span>
              </h4>
            </div>
          </AsidePaymentCartContainer>
        </PaymenteContainer>
      </MainCartProducts>
    </>
  )
}

export default HomeProductContainer
