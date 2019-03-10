export const CHANGE_ROUTE = 'ROUTER/CHANGE_ROUTE'

export const changeRoute = (route) => ({
  type: CHANGE_ROUTE,
  path: route,
})