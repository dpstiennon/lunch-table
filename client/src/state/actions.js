import { SET_TEACHER_LOGIN } from './constants'

export const setTeacherLogin = (teacherCred) => ( {type: SET_TEACHER_LOGIN, teacher: teacherCred} )