import { GET_POST } from "../types"
import { GetPost } from "../../services/PostService"

export const LoadPosts = () => {
  return async (dispatch) => {
    try {
      const posts = await GetPost()
      dispatch({
        type: GET_POST,
        payload: posts
      })
    }  catch (error) {
      throw error
  }
}
}
