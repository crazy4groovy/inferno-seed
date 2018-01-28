import * as client from '../../api/client'
import { FooBar, types } from './actions'

// Note: This is an example that mimicks the FETCH_POST action (via redux-promise-middleware)
// See also!: https://github.com/pburtchaell/redux-promise-middleware/blob/master/docs/guides/async-await.md
// This capability relies solely on redux-thunk
// The point is to demonstrate using async/await
// More sophisticated steps than this could obviously happen in sagas
export const FetchPost = id => async (dispatch, getState) => {
    dispatch({ type: `${types.FETCH_POST}_PENDING`, payload: { id } })
    
    // const { post } = getState()
    
    try {
        const post = await client.getPost(id)
        dispatch({ type: `${types.FETCH_POST}_FULFILLED`, payload: post })
    } catch (e) {
        dispatch({ type: `${types.FETCH_POST}_REJECTED`, payload: e })
    }

    dispatch(FooBar())
}
