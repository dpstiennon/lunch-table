import React, { Component } from 'react'
import { PeanutIcon } from './PeanutIcon'
import Button from '@material-ui/core/Button/Button'
import { tableStyles } from '../jss/formStyles'
import withStyles from '@material-ui/core/es/styles/withStyles'

class EditStudentsModalContent extends Component {
  fullName(student) {
    return `${student.lastName}, ${student.firstName}`
  }

  render () {
    const {students, layoutStudentIds, classes} = this.props
    return (
      <div>
        {students.map(student => (
          <div key={student.id} className={classes.studentRow}>
            <span className={classes.studentData}>{student.fullName()}</span>
            <span className={classes.studentData}>{student.sex()}</span>
            <span className={classes.studentData}>{student.currentGrade()}</span>
            <PeanutIcon peanut={student.peanut}/>
          </div>
        ))}
      </div>
    )
  }
}

export default withStyles(tableStyles)(EditStudentsModalContent)

