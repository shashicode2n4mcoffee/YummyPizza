import axios from 'axios'

export const getAllPizza = () => async (dispatch) => {
  dispatch({ type: 'GET_PIZZAS_REQUEST' })
  try {
    let response = await axios.get('/api/pizzas/getAllPizzas')
    // console.log(response)
    dispatch({ type: 'GET_PIZZAS_SUCCESS', payload: response.data })
  } catch (error) {
    dispatch({ type: 'GET_PIZZAS_FAILED', payload: error })
  }
}
