import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'inferno-redux'
import { Router, Route, IndexRoute } from 'inferno-router'
import createBrowserHistory from 'history/createBrowserHistory'

import Posts from './components/Posts'
import Post from './components/Post'
import reduce from './reducers'

const history = createBrowserHistory({ basename: '/inferno-seed' })

// https://redux.js.org/docs/advanced/Middleware.html#seven-examples
const middleware = applyMiddleware()
const store = createStore(reduce, middleware)

export default () => (
  <Provider store={store}>
    <Router history={history}>
      <Route>
        <IndexRoute component={Posts} />
        <Route path="/:id" component={Post} />
      </Route>
    </Router>
  </Provider>
)
