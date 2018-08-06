import * as constants from './constants'

export const setTeacherLogin = (teacherCred) => ( {type: constants.SET_TEACHER_LOGIN, teacher: teacherCred} )
export const setLayouts = (layouts) => ( {type: constants.SET_LAYOUTS, layouts: layouts} )
export const setStudents = (students) => ( {type: constants.SET_STUDENTS, students})
