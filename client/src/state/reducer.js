import { SET_TEACHER_LOGIN } from './constants'

const reducer = (state = {}, action) => {
  switch(action.type){
    case SET_TEACHER_LOGIN:
      return {...state, teacher: action.teacher}
    default:
      return state
  }
}