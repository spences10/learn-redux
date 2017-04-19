// root reducer!
// this is the reducer that handles all teh other reducers
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import posts from './posts'
import comments from './comments'

const rootReducer = combineReducers({posts, comments, router: routerReducer})

export default rootReducer
