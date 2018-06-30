import { SET_LAYOUTS, SET_TEACHER_LOGIN } from './constants'

const defaultState = {
  teacher: {},
  layouts: []
}

const reducer = (state = defaultState, action) => {
  switch(action.type){
    case SET_TEACHER_LOGIN:
      return {...state, teacher: action.teacher}
    case SET_LAYOUTS:
      return {...state, layouts: action.layouts}
    default:
      return state
  }
}

export default reducer
