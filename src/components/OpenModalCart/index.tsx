import Modal from "react-modal";

import {
  ModalContainer,
  HeadModalContent,
  BodyModalContent,
  AmountProductContent,
} from "./styles";

import Image from "next/image";
import closeImg from "../../../public/close.svg";

import { IoMdTrash } from "react-icons/io";
import { useContext, useState } from "react";
import { ProductContainerContext } from "../../features/ProductContainerContext";


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
  const { contextValue, teste, setTeste } = useContext(ProductContainerContext);
  const [renderiza, setRenderiza] = useState(true);


  const handleCleanAll = () => {
    localStorage.removeItem("state");
    teste.splice(0, 1000);
    setTeste(teste);
    setRenderiza(!renderiza);
  };


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
