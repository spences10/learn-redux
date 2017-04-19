import { createStore, compose } from 'redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { browserHistory } from 'react-router'

// import root reducer
import rootReducer from './reducers/index'

// import default data
import comments from './data/comments'
import posts from './data/posts'

// create object for the default data
const defaultState = {
  posts,
  comments
}

const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
)

const store = createStore(
  rootReducer,
  defaultState,
  enhancers
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )

export const history = syncHistoryWithStore(browserHistory, store)

// hot reloading of reducers
if(module.hot)  {
  module.hot.accept('./reducers/',() => {
    const nextRootReducer = require('./reducers/index').default // cant use import inside functions
    store.replaceReducer(nextRootReducer)
  })
}

export default store
