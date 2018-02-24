import * as client from '../../api/client'

export const types = Object.freeze({
  FETCH_POST: 'FETCH_POST',
  FOO_BAR: 'FOO_BAR',
})

// SIMPLE/OBJECT ////////////////////////////////////////////////////
export const fooBar = () => ({
  type: types.FOO_BAR,
  number: Math.random(),
})

// CLIENT/ASYNC ////////////////////////////////////////////////////
export const fetchPost = id => ({
  type: types.FETCH_POST,
  payload: client.getPost(id),
})
