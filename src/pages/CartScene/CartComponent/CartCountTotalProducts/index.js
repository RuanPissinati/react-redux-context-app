import React from 'react';
import { CartCountTotalProductsBox, Icon, Text} from './style';

const CartCountTotalProducts = ({quant}) => {
  return <CartCountTotalProductsBox>
    <Icon src={"../../../../assets/img/icon-cartitem.png"} />
    <Text>
      {`${quant} itens`}
    </Text>
    
  </CartCountTotalProductsBox>;
}

export default CartCountTotalProducts;