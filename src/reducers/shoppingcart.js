const INITIAL_STATE = {
  totalValue: 0,
  shipping: {},
  items: [
    {
      name: '',
      price: 0,
      stoq: 0,
      quant: 1
    }
  ]
};

const shoppingcart = (state = INITIAL_STATE, action) => {
  return state;
}

export default shoppingcart;