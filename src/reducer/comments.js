import {  ADD_COMMENT, LOAD_COMMENT, START, SUCCESS } from '../constants'
import {normalizedComments} from '../fixtures'
import {Map, fromJS, Record} from 'immutable'
import {arrToMap} from './utils'


// const defaultComments = normalizedComments.reduce((acc, comment) => ({
//     ...acc,
//     [comment.id]: comment
// }), {})

const CommentRecord = Record({
    id: null,
    title: null,
    text: null
})

const ReducerRecord = Record({
    entities: arrToMap([], CommentRecord),
    loading: false,
    loaded: false
})

const defaultState = new ReducerRecord()

export default (state = defaultState, action) => {
    
    const { type, payload, randomId } = action
    console.log('action: ', action);

    switch (type) {
        case ADD_COMMENT:
            return state.updateIn(['entities', payload.randomId, 'comments'])
            // return {
            //     ...state,
            //     [randomId]: {
            //         ...payload.comment,
            //         id: randomId
            //     }
            // }
         case LOAD_COMMENT + START:
            return state.setIn(['entities', payload.id, 'loading'], true)

        case LOAD_COMMENT + SUCCESS:
            return state.setIn(['entities', payload.id], new CommentRecord(response))
        
    }

    return state
}