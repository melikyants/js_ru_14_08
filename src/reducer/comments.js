import { ADD_COMMENT, LOAD_COMMENTS, START, SUCCESS, LOAD_ARTICLE_COMMENT } from '../constants'
import {arrToMap} from './utils'
import {OrderedMap, Map, Record} from 'immutable'

const CommentRecord = Record({
  id: null,
  text: null,
  user: null,
})

const ReducerRecord = Record({
  entities: new OrderedMap({}),
})

const defaultState = new ReducerRecord()
export default (state = defaultState, action) => {
    const { type, payload, randomId, response } = action

    switch (type) {
        case ADD_COMMENT:
            // return {...state, [randomId]: {
            //     ...payload.comment,
            //     id: randomId
            // }}
            return state.setIn(['entities', randomId], new CommentRecord({...payload.comment, id: randomId}))
        
        case LOAD_ARTICLE_COMMENT + SUCCESS:
            return state.mergeIn(['entities'], arrToMap(response, CommentRecord))
    }

    return state
}