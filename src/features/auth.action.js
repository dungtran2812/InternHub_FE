import { resetCV } from "./cv"
import { clearUserInfo } from "./user"

export const signout = () => async dispatch => {
  dispatch(resetCV())
  dispatch(clearUserInfo())
}