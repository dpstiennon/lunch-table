import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField/TextField'
import Button from '@material-ui/core/Button/Button'
import MenuItem from '@material-ui/core/MenuItem/MenuItem'
import withStyles from '@material-ui/core/es/styles/withStyles'

class StudentFriendsForm extends Component {
  state = {
    friends: ['', '', '', '', '']
  }

  setFriend = index => e => {
    const { friends } = this.state
    friends[index] = e.target.value
    this.setState({friends})
  }

  saveFriends = (e) => {
    e.preventDefault()
    this.props.saveFriends(this.state.friends)
  }

  render () {
    const {friends} = this.state
    const {allStudents, classes} = this.props
    return <form className={classes.container} onSubmit={this.saveFriends}>
      <h2>
        Enter the names of friends you would like to sit next to!
      </h2>
      {friends.map((friend, index) => <div className={classes.friendRow}>
        <TextField
          className={classes.friendField}
          select
          value={friend}
          onChange={this.setFriend(index)}
        >
          {allStudents.map(option => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
      </div>)}
      <Button type="submit">Submit</Button>
    </form>
  }
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  friendRow: {
    padding: '10px'
  },
  friendField: {
    minWidth: 300
  }
}


export default withStyles(styles)(StudentFriendsForm)