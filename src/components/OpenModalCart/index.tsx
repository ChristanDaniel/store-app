import Modal from "react-modal";

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


  return (
    <Modal
      isOpen={isOpen}
      ariaHideApp={false}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >

    </Modal>
  );
}
