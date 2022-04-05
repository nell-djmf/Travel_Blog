import { GET_POST, POST_COMMENT } from "../types"
import { GetPost, PostComment } from "../../services/PostService"

export const LoadPosts = () => {
  return async (dispatch) => {
    try {
      const posts = await GetPost()
      console.log(posts)
      dispatch({
        type: GET_POST,
        payload: posts
      })
    }  catch (error) {
      throw error
  }
}
}

export const PostComments = (comments) => {
  return async (dispatch) => {
    try {
      const comments = await PostComments()

      dispatch({
        type: POST_COMMENT,
        payload: comments
      })
    } catch (error) {
      throw error
  }
}
}