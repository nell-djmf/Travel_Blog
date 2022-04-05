const {GET_POST} = require('../types')

const iState = {
  postsState: [],
}

const PostReducer = (state=iState, action) => {
  switch (action.type) {
    case GET_POST:
      console.log('action',action.payload)
      return {...state, posts: action.payload}
    default: 
      return {...state}
    }
}
console.log(PostReducer)
export default PostReducer