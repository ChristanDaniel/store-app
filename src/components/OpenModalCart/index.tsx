import Modal from "react-modal";
import {
  ModalContainer,
  HeadModalContent,
  BodyModalContent,
  NoValueCart,
  ProductDivContent,
  AmountProductContent,
  FooterModalContent,
} from "./styles";

import { IoMdTrash } from "react-icons/io";
import { CgTrashEmpty } from "react-icons/cg";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";

import Image from "next/image";
import closeImg from "../../../public/close.svg";

import { useRouter } from "next/dist/client/router";
import { useContext, useEffect, useState } from "react";
import { ProductContainerContext } from "../../features/ProductContainerContext";
import Button from "../Button";

interface OpenModalFavoriteCartProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export type ProductProps = {
  id: number;
  title: string;
  image: string;
  price: number;
  count: number;
};

export function OpenModalFavoriteCart({
  isOpen,
  onRequestClose,
}: OpenModalFavoriteCartProps) {
  const router = useRouter();
  const { contextValue, productItens, setProductItens, loginAuthentication} = useContext(ProductContainerContext);
  const [Prod, setProd] = useState<number>(0);
  const [renderiza, setRenderiza] = useState(true);

  const getValue = () => {};

  const { state, dispatch } = contextValue;

  const handleCleanAll = () => {
    localStorage.removeItem("state");
    productItens.splice(0, 1000);
    setProductItens(productItens);
    setRenderiza(!renderiza);
  };

  const DeleteProductFavoriteCart = (index: number) => {
    const { state } = contextValue;

    if (index > -1) {
      state.splice(index, 1);
    }

    localStorage.setItem("state", JSON.stringify(state));
    setRenderiza(!renderiza);
  };

  const FormatedFavoriteCartValues = (products: ProductProps[]) => {
    return products.reduce((a, b) => a + b.price, 0);
  };

  const handleCompleteOrder = (onRequestClose: () => void) => {
    if ( loginAuthentication.loging) {
      router.push("/Cart");
      onRequestClose();
    } else {
      router.push('/login')
      onRequestClose();
    }
  };

  useEffect(() => {
    const { state } = contextValue;
    console.log("DENTRO DO EFFECT", state);
    setProductItens(state);
  }, [contextValue, setProductItens]);

  return (
    <Modal
      isOpen={isOpen}
      ariaHideApp={false}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <Image src={closeImg} alt="Fechar Modal" />
      </button>
      <ModalContainer>
        <HeadModalContent>
          <div>
            <h3>Meu Carrinho</h3>
            <span>Produtos - {productItens.length}</span>
          </div>
          <button onClick={() => handleCleanAll()}>
            <IoMdTrash /> Remover Tudo
          </button>
        </HeadModalContent>
        {productItens.length === 0 ? (
          <NoValueCart>
            <h3>CARRINHO VAZIO</h3>
            <MdOutlineRemoveShoppingCart />
            <p>Não há produtos selecionados até o momento!</p>
          </NoValueCart>
        ) : (
          <BodyModalContent>
            {productItens &&
              productItens?.map((Prod, index) => {
                return (
                  <>
                    <ProductDivContent key={Prod.id + index}>
                      <img src={`${Prod.image}`} alt={`${Prod.title}`} />
                      <h4>{Prod.title}</h4>
                      <AmountProductContent>
                        <p>R$ {Prod.price.toFixed(2)}</p>
                        <button
                          onClick={() => DeleteProductFavoriteCart(index)}
                        >
                          <CgTrashEmpty />
                        </button>
                      </AmountProductContent>
                    </ProductDivContent>
                  </>
                );
              })}
          </BodyModalContent>
        )}

        <FooterModalContent>
          <div>
            <h5>Valor Total</h5>
            <h2>R$ {FormatedFavoriteCartValues(productItens).toFixed(2)}</h2>
          </div>
          <Button onClick={() => handleCompleteOrder(onRequestClose)}>
            Finalizar Pedido
          </Button>
        </FooterModalContent>
      </ModalContainer>
    </Modal>
  );
}
