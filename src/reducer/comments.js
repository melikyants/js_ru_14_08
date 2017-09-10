import {  ADD_COMMENT, UPDATING_COMMENT } from '../constants'
import {normalizedComments} from '../fixtures'

const defaultComments = normalizedComments.reduce((acc, comment) => ({
    ...acc,
    [comment.id]: comment
}), {})

export default (state = defaultComments, action) => {
    console.log('actionss: ', action);
    const { type, payload, randomId } = action

    switch (type) {
        case ADD_COMMENT:
            return {
                ...state,
                [randomId]: {
                    ...payload.comment,
                    id: randomId
                }
            }
        
    }

    return state
}