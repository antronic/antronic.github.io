import { CHANGE_ROUTE } from '@ducks/actions/router'

const initialState = {
  path: '/welcome',
}

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_ROUTE:
      return {
        ...state,
        path: action.path,
      }
    default:
      return state
  }
}