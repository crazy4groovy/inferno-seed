const initialState = Object.freeze({
    count: 0
})

export default (state = initialState, action) => {
    const newState = { ...state, count: state.count + 1 }
    console.log(newState.count)
    return newState
}
