import React from 'react';
import { ContainerFull, Row } from '../../styles/gridstyle';
import { SideArea, MainArea } from './style';
import { Title2 } from '../../styles/fontstyle';
import CartComponent from './CartComponent';
import ChooseShippingMethodComponent from './ChooseShippingMethodComponent';
import TotalPayableComponent from './TotalPayableComponent';


const Page = () => {
  return <>
    <ContainerFull>
      <Row>
        <MainArea>
          <CartComponent></CartComponent>
        </MainArea>
        <SideArea>
          <Title2></Title2>
          <ChooseShippingMethodComponent />
          <TotalPayableComponent />
        </SideArea>
      </Row>
    </ContainerFull>
  </>;
}
const CartScene = () => {
  return <>
    <Page />
  </>;
}

export default CartScene;