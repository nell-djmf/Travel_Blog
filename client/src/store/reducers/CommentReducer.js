const {POST_COMMENT} = require('../types')

const iState = {
  comment: []
}

const CommentReducer = (state=iState, action) => {
  switch (action.type) {
    case POST_COMMENT:
      return { ...state, comment: [...state.comment, action.payload]}
    default: 
      return {...state}
    }
}

export default CommentReducer