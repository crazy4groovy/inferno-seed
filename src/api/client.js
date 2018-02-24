const API = 'https://jsonplaceholder.typicode.com'

// GET list of all dinosaurs from API
export const getPosts = () =>
  _req('/posts').then(_delayResponse(Math.random() * 1000))

// GET a dinosaur's detail info from API by ID
export const getPost = id =>
  _req(`/posts/${id}`).then(_delayResponse(Math.random() * 1000))

// <--------------------------------------------------->
// <--------------------------------------------------->

const delay = ms => new Promise(r => setTimeout(r, ms))

// Verify that the fetched response is JSON
const _processResponse = res =>
  res.json().catch(() => _handleError(new Error('Invalid JSON payload')))

// Handle fetch errors
const _handleError = error => {
  console.error('An error occurred:', error)
  throw error
}

const _delayResponse = (ms = 1000) => async data => {
  await delay((ms | 0) + 100)
  return data
}

const cache = {} // Note: very aggressive, no TTL!

const _req = uri =>
  cache[uri] ||
  fetch(`${API}${uri}`)
    .catch(_handleError)
    .then(_processResponse)
    .then(data => {
      cache[uri] = Promise.resolve(data)
      return cache[uri]
    })
