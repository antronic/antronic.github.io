import { CHANGE_TEST } from '@ducks/actions/content'

const initialState = {
  test_content: 'TEST_CONTENT'
}

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_TEST:
      return {
        ...state,
        test_content: action.content,
      }
    default:
      return state
  }
}