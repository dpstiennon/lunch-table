import React, { Component } from 'react'
import { PeanutIcon } from './PeanutIcon'
import Button from '@material-ui/core/Button/Button'
import { tableStyles } from '../jss/formStyles'
import withStyles from '@material-ui/core/es/styles/withStyles'

class EditStudentsModalContent extends Component {
  render () {
    const {students, layoutStudentIds, classes} = this.props
    return (
      <div>
        {students.map(student => (
          <div key={student.id} className={classes.studentRow}>
            <span className={classes.studentData}>{this.fullName(student)}</span>
            <span className={classes.studentData}>{this.formatSex(student)}</span>
            <span className={classes.studentData}>{this.calculateGrade(student)}</span>
            <PeanutIcon peanut={student.peanut}/>
            <Button variant="outlined" onClick={this.editStudent(student)}>Edit</Button>
          </div>
        ))}
      </div>
    )
  }
}

export default withStyles(tableStyles)(EditStudentsModalContent)

