import { types } from './actions'

const initialState = Object.freeze({
  count: 0,
  post: {},
})

export default (state = initialState, action) => {
  // Ignoring the action for the counter, just because
  const newState = { ...state, count: state.count + 1 }

  switch (action.type) {
    case `${types.FETCH_POST}_PENDING`: {
      newState.post = {}
      break
    }
    case `${types.FETCH_POST}_FULFILLED`: {
      newState.post = action.payload
      break
    }
    default: {}
  }

  return newState
}
