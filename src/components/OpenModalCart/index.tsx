import Modal from "react-modal";
import {
  ModalContainer,
  HeadModalContent,
  BodyModalContent,
  ProductDivContent,
  AmountProductContent,
  FooterModalContent
} from "./styles";

import { IoMdTrash } from "react-icons/io";
import { CgTrashEmpty } from "react-icons/cg";

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
  const { contextValue, teste, setTeste } = useContext(ProductContainerContext);
  const [Prod, setProd] = useState<number>(0);
  const [renderiza, setRenderiza] = useState(true);

  const getValue = () => {};

  const { state, dispatch } = contextValue;

  const handleCleanAll = () => {
    localStorage.removeItem("state");
    teste.splice(0, 1000);
    setTeste(teste);
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
    router.push("/Cart");
    onRequestClose();
  };

  useEffect(() => {
    const { state } = contextValue;
    console.log("DENTRO DO EFFECT", state);
    setTeste(state);
  }, [contextValue, setTeste]);

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
          <h3>Meu Carrinho</h3>
          <button onClick={() => handleCleanAll()}>
            <IoMdTrash /> Remover Tudo
          </button>
        </HeadModalContent>
        <BodyModalContent>
          {teste && teste?.map((test, index) => {
            return (
              <>
                <ProductDivContent key={test.id + index}>
                  <h4>{test.title}</h4>
                  <AmountProductContent>
                    {/* <p>Quantidade</p>
                    <p>{test.count}</p> */}
                    <button onClick={() => DeleteProductFavoriteCart(index)}>
                      <CgTrashEmpty />
                      Remover
                    </button>
                    <p>R$ {test.price.toFixed(2)}</p>
                  </AmountProductContent>
                </ProductDivContent>
              </>
            );
          })}
        </BodyModalContent>
        <FooterModalContent>
          <div>
            <h5>Valor Total</h5>
            <p>R$ {FormatedFavoriteCartValues(teste).toFixed(2)}</p>
          </div>
          <Button onClick={() => handleCompleteOrder(onRequestClose)}>
            Finalizar Pedido
          </Button>
        </FooterModalContent>
      </ModalContainer>
    </Modal>
  );
}
