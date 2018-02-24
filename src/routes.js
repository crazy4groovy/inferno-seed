const routes = Object.freeze({
  home: '/',
  root: '/',
  posts: '/',
})
export default routes

export const postWithId = (id = ':id') => `${routes.posts}${id}`
