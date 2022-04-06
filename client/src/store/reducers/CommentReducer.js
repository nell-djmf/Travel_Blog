const {POST_COMMENT} = require('../types')

const iState = {
  commentState: []
}

const CommentReducer = (state=iState, action) => {
  switch (action.type) {
    case POST_COMMENT:
      return { ...state, comment: [...state.comment, action.payload], iState: ''}
    default: 
      return {...state}
    }
}

export default CommentReducer