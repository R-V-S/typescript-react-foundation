import { combineReducers } from 'redux'
import { StateType } from 'typesafe-actions'

export const rootReducer = combineReducers({
})

export type RootState = StateType<typeof rootReducer>
