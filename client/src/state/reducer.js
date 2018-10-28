import { SET_LAYOUTS, SET_STUDENTS, SET_TEACHER_LOGIN } from './constants'
import Student from '../models/student'

const defaultState = {
  teacher: {},
  layouts: [],
  students: []
}

const reducer = (state = defaultState, action) => {
  switch(action.type){
    case SET_TEACHER_LOGIN:
      return {...state, teacher: action.teacher}
    case SET_LAYOUTS:
      return {...state, layouts: action.layouts}
    case SET_STUDENTS:
      return {...state, students: action.students.map(s => new Student(s))}
    default:
      return state
  }
}

export default reducer
