import React, { Component } from 'react'
import Button from '@material-ui/core/Button/Button'
import MenuItem from '@material-ui/core/MenuItem/MenuItem'
import withStyles from '@material-ui/core/es/styles/withStyles'
import Select from '@material-ui/core/Select/Select'

class StudentFriendsForm extends Component {
  state = {
    friends: ['', '', '', '', '']
  }

  setFriend = index => e => {
    const {friends} = this.state
    friends[index] = e.target.value
    this.setState({friends})
  }

  clearFriend = index => e => {
    const {friends} = this.state
    friends[index] = ''
    this.setState({friends})
  }

  saveFriends = (e) => {
    e.preventDefault()
    this.props.saveFriends(this.state.friends)
  }

  getStudentOptions = (selected) => {
    return this.props.allStudents.filter(s => {
      //Include if this is the student already selected
      return s.id === selected || (
        // exclude if the student is already selected in a different control
        // exclude if this is the student who's inputting
        !this.state.friends.find(f => f === s.id) &&
        s.id !== this.props.thisStudent.id
      )
    })
  }

  render () {
    const {friends} = this.state
    const {thisStudent, classes} = this.props
    return <form className={classes.container} onSubmit={this.saveFriends}>
      <h2>Thanks, {thisStudent.firstName}</h2>
      <p> Enter the names of friends you would like to sit next to! </p>
      {friends.map((friend, index) => <div key={index} className={classes.formControl}>
        <Button onClick={this.clearFriend(index)}>
          X
        </Button>
        <Select
          label="Grade"
          value={friend}
          fullWidth
          onChange={this.setFriend(index)}
        >
          {this.getStudentOptions(friend).map(student => (
            <MenuItem key={student.id} value={student.id}>
              {student.firstName + ' ' + student.lastName}
            </MenuItem>
          ))}
        </Select>
      </div>)}
      <Button variant="contained" color="primary" type="submit">Submit</Button>
    </form>
  }
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  friendField: {
    minWidth: 200
  },
  formControl: {
    flex: '1 1 40px',
    padding: 20,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 5,
    minWidth: 300

  },
}

export default withStyles(styles)(StudentFriendsForm)
