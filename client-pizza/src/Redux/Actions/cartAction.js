export const addToCartAction =
  (pizza, varient, quantity) => async (dispatch, getState) => {
    let cartItem = {
      name: pizza.name,
      _id: pizza._id,
      varient: varient,
      quantity: quantity,
      prices: pizza.prices,
      image: pizza.image,
      price: pizza.prices[0][varient] * quantity,
    }

    if (cartItem.quantity > 10) {
      alert('You cant add more than 10 quantities')
    } else {
      dispatch({ type: 'ADD_TO_CART', payload: cartItem })
    }

    const cartItems = getState().addToCartReducer.cartItems
    localStorage.setItem('cartItems', JSON.stringify(cartItems))

    // const cI = localStorage.getItem('cartItems')
    //   ? JSON.parse(localStorage.getItem('cartItems'))
    //   : []

    // console.log(cI)
  }

export const deleteFromCart = (pizza) => (dispatch, getState) => {
  dispatch({ type: 'DELETE_FROM_CART', payload: pizza })
  const cartItems = getState().addToCartReducer.cartItems
  localStorage.setItem('cartItems', JSON.stringify(cartItems))
}
