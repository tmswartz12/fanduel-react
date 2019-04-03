import { createStore, combineReducers, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import gamecast from './gamecast'
import playByPlay from './playByPlay'
import footer from './footer'

const reducer = combineReducers({ gamecast, footer, playByPlay })
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
)
const store = createStore(reducer, middleware)

export default store
export * from './gamecast'
export * from './playByPlay'
export * from './footer'
