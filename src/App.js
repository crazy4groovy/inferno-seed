import { Provider } from 'inferno-redux'
import { createStore } from 'redux'

import Posts from './components/Posts'
import Post from './components/Post'

import { Router, Route, IndexRoute } from 'inferno-router'
import createBrowserHistory from 'history/createBrowserHistory'

const history = createBrowserHistory()

function reducer(state = { count: 0 }, action) {
  const newState = { ...state, count: state.count + 1 }
  console.log(newState, action)
  return newState
}
const store = createStore(reducer)

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
