import { combineReducers } from "redux"

const INITIAL_STATE = []

const gotReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    default:
      return state
  }

}
const rootReducer = combineReducers({gotReducer})
export default rootReducer;