export const addToCartAction =
  (pizza, varient, quantity) => async (dispatch) => {
    let cartItem = {
      name: pizza.name,
      _id: pizza.id,
      varient: varient,
      quantity: quantity,
      prices: pizza.prices,
      price: pizza.prices[0][varient] * quantity,
    }

    dispatch({ type: 'ADD_TO_CART', payload: cartItem })
  }
