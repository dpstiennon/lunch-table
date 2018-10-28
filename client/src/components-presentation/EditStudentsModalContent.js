import React, { Component } from 'react'
import { PeanutIcon } from './PeanutIcon'
import Button from '@material-ui/core/Button/Button'
import { tableStyles } from '../jss/formStyles'
import withStyles from '@material-ui/core/es/styles/withStyles'
import Checkbox from '@material-ui/core/Checkbox/Checkbox'
import SortFilter from './SortFilter'

class EditStudentsModalContent extends Component {
  fullName(student) {
    return `${student.lastName}, ${student.firstName}`
  }

  render () {
    const {students, layoutStudentIds, classes} = this.props
    return (
      <div>
        <div className={classes.studentRow}>
          <span className={classes.studentData}><SortFilter/></span>
          <span className={classes.studentData}><SortFilter/></span>
          <span className={classes.studentData}><SortFilter/></span>
          <span className={classes.studentData}><SortFilter/></span>
        </div>
        {students.map(student => (
          <div key={student.id} className={classes.studentRow}>
            <span className={classes.studentData}><Checkbox color="primary"/></span>
            <span className={classes.studentData}>{student.fullName()}</span>
            <span className={classes.studentData}>{student.sex()}</span>
            <span className={classes.studentData}>{student.currentGrade()}</span>
            <span className={classes.studentData}><PeanutIcon peanut={student.peanut}/></span>
          </div>
        ))}
        <div className={ classes.studentRow }>
          <Button variant="contained" color="primary">Add</Button>
        </div>
      </div>
    )
  }
}

export default withStyles(tableStyles)(EditStudentsModalContent)

