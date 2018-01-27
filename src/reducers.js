// register component reducers here
const reducers = {
  post: require('./components/Post/reducer').default,
}

export default (state, action) =>
  Object.keys(reducers).reduce((acc, name) => {
    acc[name] = reducers[name](state ? state[name] : undefined, action)
    return acc
  }, {})
