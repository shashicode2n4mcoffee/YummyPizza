import axios from 'axios'

export const registerUserAction = () => async (dispatch) => {
  dispatch({ type: 'USER_REGISTER_REQUEST' })

  try {
    const response = await axios.post('/api/user/register', { user })
    dispatch({ type: 'USER_REQUEST_SUCCESS' })
  } catch (error) {
    dispatch({ type: 'USER_REQUEST_FAIL', payload: error })
  }
}
