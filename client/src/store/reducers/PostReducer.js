const {GET_POST} = require('../types')

const iState = {
  postsState: [],
}

const PostReducer = (state=iState, action) => {
  switch (action.type) {
    case GET_POST:
      return {...state, posts: action.payload}
    default: 
      return {...state}
    }
}

export default PostReducer