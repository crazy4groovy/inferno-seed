import { createStore } from 'redux'
import { Provider } from 'inferno-redux'
import { Router, Route, IndexRoute } from 'inferno-router'
import createBrowserHistory from 'history/createBrowserHistory'

import Posts from './components/Posts'
import Post from './components/Post'
import reduce from './reducers'

const history = createBrowserHistory({ basename: '/inferno-seed' })

const store = createStore(reduce)

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
