import moment from 'moment'

export default class Student {
  constructor(studentData) {
    Object.assign(this, studentData)
  }

  sex(){
     return this.boyOrGirl ? 'F' : 'M'
  }

  fullName(){
    return `${this.lastName}, ${this.firstName}`
  }

  currentGrade(){
    const today = moment()
    const cutoff = moment(new Date(today.year(), 6, 31))
    const updateAt = moment(this.updatedAt)
    const diffInMs = cutoff.diff(updateAt)
    const diffYears = moment.duration(diffInMs).years()
    return diffYears > 0 ? this.grade + diffYears : this.grade
  }
}
