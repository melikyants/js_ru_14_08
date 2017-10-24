import {  ADD_COMMENT } from '../constants'
import {normalizedComments} from '../fixtures'

const defaultComments = normalizedComments.reduce((acc, comment) => ({
    ...acc,
    [comment.id]: comment
}), {})

export default (state = defaultComments, action) => {
  
  
    const { type, payload, response, error, randomId } = action
    console.log('actionCommentsReducer: ', action);
    console.log('defaultComments: ', state);

    switch (type) {
      case ADD_COMMENT:
        return {
          ...state,
          [randomId]: {
            id: randomId,
            user: payload.comment.user,
            text: payload.comment.text
        }
    }
  }

    return state
}