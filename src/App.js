import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'inferno-redux'
import { Router, Route, IndexRoute } from 'inferno-router'
import createBrowserHistory from 'history/createBrowserHistory'
import logger from 'redux-logger'
import reduxPromise from 'redux-promise-middleware'
import thunk from 'redux-thunk'

import Posts from './components/Posts'
import Post from './components/Post'
import reduce from './reducers'
import routes, { postWithId } from './routes'

const history = createBrowserHistory({ basename: '/inferno-seed' })

// https://redux.js.org/docs/advanced/Middleware.html#seven-examples
const middleware = applyMiddleware(reduxPromise(), thunk, logger)
const store = createStore(reduce, middleware)

export default () => (
  <Provider store={store}>
    <Router history={history}>
      <Route>
        <IndexRoute component={Posts} />
        <Route path={postWithId()} component={Post} />
      </Route>
    </Router>
  </Provider>
)
