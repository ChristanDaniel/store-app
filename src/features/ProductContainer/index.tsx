/* eslint-disable @next/next/no-img-element */
import React, { useContext, useEffect, useState, useCallback } from 'react'
import { useRouter } from 'next/dist/client/router'
import {
  AllRate,
  GeneralInfo,
  MainProductContainer,
  ProdCategory,
  ProdDelivery,
  ProductCode,
  ProductCodeValue,
  ProductDescription,
  ProductImage,
  ProductInfo,
  ProductInstallments,
  ProductPriceValue,
  ProgressContainer
} from './styles'
import { ProductContainerContext } from '../ProductContainerContext'
import axios from 'axios'
import { Footers } from '../../components/Footers'
import CircularProgress from "@mui/material/CircularProgress";

import { BsFillLightningChargeFill, BsFillCreditCardFill } from 'react-icons/bs'
import { FaBarcode } from 'react-icons/fa'
import Button from '../../components/Button'

interface ProductProps {
  category: string
  description: string
  id: number
  image: string
  price: number
  rating: {
    rate: string
    count: string
  }
  title: string
}

const HomeProductContainer = (): JSX.Element => {
  const [Product, setProduct] = useState<ProductProps>()
  const router = useRouter()

  const { contextValue } = useContext(ProductContainerContext)

  const getProduct = useCallback(async () => {
    if (!router.query.id) {
      router.push('/')
    }

    const response = await axios.get(`https://fakestoreapi.com/products/${router.query.id}`)
    setProduct(response.data)
  }, [router])

  const handleCheckIfHasOnCart = (productId: number) => {
    const hasProduct = Boolean(contextValue.state.find((prod) => prod.id === productId))
    return hasProduct
  }

  const handleAddCart = (product: ProductProps) => {
    const hasProduct = handleCheckIfHasOnCart(product.id)

    !hasProduct &&
      contextValue.dispatch({
        type: 'add_product',

        id: product.id,
        title: product.title,
        image: product.image,
        price: product.price,
        count: 1
      })

    router.push('/Cart')
  }

  const FormatedValues = (ind: string, value: number) => {
    if (ind === 'discount') {
      const num = value * 0.9
      return num.toFixed(2)
    }

    if (ind === 'divided') {
      const num = value / 3
      return num.toFixed(2)
    }
  }

  useEffect(() => {
    getProduct()
  }, [getProduct])

  return (
    <>
      <MainProductContainer>
        <GeneralInfo>
          <hr />
          <h1> Caracter??sticas Gerais </h1>
          <hr />
        </GeneralInfo>

        {Product ? (
          <ProductInfo>
            <ProductDescription>
              <h3>{Product?.title}</h3>
              <ProdCategory>Categoria: {Product?.category}</ProdCategory>
              <ProdDelivery>
                <BsFillLightningChargeFill /> Pronta Entrega
              </ProdDelivery>
              <p>{Product?.description}</p>
              <AllRate>
                ??????????????? <span>{Product?.rating.count} avalia????es</span>
              </AllRate>
              <ProductPriceValue>R$ {Product?.price.toFixed(2)}</ProductPriceValue>
              <ProductInstallments>
                <BsFillCreditCardFill /> 3x de {FormatedValues('divided', Product?.price)} sem juros no cart??o.
              </ProductInstallments>
              <ProductCodeValue>R$ {FormatedValues('discount', Product?.price)}</ProductCodeValue>
              <ProductCode>
                <FaBarcode /> ?? vista com 10% de desconto no boleto ou pix
              </ProductCode>
              <Button $disabled={handleCheckIfHasOnCart(Product.id)} onClick={() => handleAddCart(Product)}>
                {handleCheckIfHasOnCart(Product.id) ? 'Produto adicionado ao carrinho' : 'Comprar Agora'}
              </Button>
            </ProductDescription>
            <ProductImage>
              <img src={`${Product?.image}`} alt={`${Product?.description}`} />
            </ProductImage>
          </ProductInfo>
        ) : (
          <>
            <ProgressContainer>
              <div>
                <CircularProgress />
              </div>
            </ProgressContainer>
          </>
        )}

        <Footers />
      </MainProductContainer>
    </>
  )
}
export default HomeProductContainer
