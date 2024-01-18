import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { FaShoppingCart } from "react-icons/fa";
import Modal from "./Modal";
import { useState } from "react";
export default function NavBar(props) {
  const [openModal, setOpenModal] = useState(false);

  function handleClick() {
    setOpenModal(true);
  }

  function handleCloseF() {
    setOpenModal(!openModal);
  }
  function handleCancelShopF() {
    setOpenModal(!openModal);
    window.alert("Compra cancelada!");
  }
  function handleFinishShopF() {
    setOpenModal(!openModal);
    window.alert("Compra realizada com sucesso!");
  }

  return (
    <Navbar className="">
      <Container className="Header">
        <Navbar.Brand href="#home">
          <h2></h2>
          <div>
            <h1 className="navbar-text">SneakerBrand</h1>
          </div>
          <div>
            <a onClick={handleClick}>
              <FaShoppingCart className="navbar-icon" />
            </a>
            <Modal
              isOpen={openModal}
              handleClose={handleCloseF}
              modalshops="Lista de compras"
              handleFinishShop={handleFinishShopF}
              handleCancelShop={handleCancelShopF}
            >
              <p>{props.children}</p>
            </Modal>
            <p className="shoppingcartq">{props.itemcount}</p>
          </div>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}
