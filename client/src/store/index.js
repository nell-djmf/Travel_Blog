import { createStore, combineReducers, applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import PostReducer from './reducers/PostReducer'

const store = createStore(
  combineReducers({
    postsState: PostReducer,
   }),
  composeWithDevTools(applyMiddleware(thunk))
)

export default store