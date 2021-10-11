import { combineReducers } from 'redux'
import { eventReducer } from '../../../src/features/events/eventReducer'

export const rootReducer = combineReducers({
    event: eventReducer
})