import { ADD_COMMENT, LOAD_COMMENTS, START, SUCCESS, LOAD_ARTICLE_COMMENT } from '../constants'
import {normalizedComments} from '../fixtures'
import {arrToMap} from './utils'
import {Record} from 'immutable'

const CommentRecord = Record({
  id: null,
  text: null,
  user: null,
})

const ReducerRecord = Record({
  entities: arrToMap([],CommentRecord),
})

const defaultState = new ReducerRecord()
export default (state = defaultState, action) => {
    const { type, payload, randomId, response } = action

    switch (type) {
        case ADD_COMMENT:
            return {...state, [randomId]: {
                ...payload.comment,
                id: randomId
            }}
        
        case LOAD_ARTICLE_COMMENT + SUCCESS:
            return state.mergeIn(['entities'], arrToMap(response, CommentRecord))
    }

    return state
}