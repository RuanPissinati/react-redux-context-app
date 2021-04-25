import React from 'react';
import { Title } from '../../../styles/fontstyle';
import { ContainerFull, Row } from '../../../styles/gridstyle';
import CartCountTotalProducts from './CartCountTotalProducts';
import { CartHeader } from './style';
import { useWelcomeSceneContext } from "../../../contexts/WelcomeSceneContext";

const CartComponent = () => {
  const { 
  username
  } = useWelcomeSceneContext()

  return <ContainerFull>
    <CartHeader>
      <Row>
        <Title>Meu Carrinho: </Title>
        <CartCountTotalProducts />
      </Row>
      

    </CartHeader>
   

   

  </ContainerFull>;
}

export default CartComponent;