import {
  createStore,
  combineReducers,
  compose
} from 'redux'

import router from '@ducks/reducers/router'
import content from '@ducks/reducers/content'

const reducers = combineReducers({
  router,
  content,
})

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose

const store = createStore(
  reducers, composeEnhancers()
)

export default store