import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Switch from '@material-ui/core/Switch'
import RadioGroup from '@material-ui/core/RadioGroup'
import Radio from '@material-ui/core/Radio'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import { withStyles } from '@material-ui/core/styles'
import MenuItem from '@material-ui/core/es/MenuItem/MenuItem'

class AddStudentForm extends Component {
  constructor () {
    super()
    this.allowedGrades = [ 'K', '1', '2', '3', '4', '5', '6', '7', '8' ]
    this.state = {}
  }

  static getDerivedStateFromProps(nextProps){
    if (nextProps.student) {
      return {...nextProps.student, id: undefined}
    }
    return  {
      peanut: 'peanut',
      lunchCode: '',
      grade: '5',
      firstName: '',
      lastName: '',
      boyOrGirl: false,
      id: undefined
    }
  }

  updateState = (key) => {
    return (e) => {
      this.setState({[key]: e.target.value})
    }
  }


  updateSwitch = e => this.setState({boyOrGirl: e.target.checked})

  isFilled = (state) => {
    return state.peanut && state.lunchCode && state.firstName && state.lastName
  }

  handleSubmit = (e) => {
    if (this.isFilled(this.state)) {
      this.props.createStudent(this.state)
    } else {
      e.preventDefault()
    }
  }

  render () {
    const {classes} = this.props
    const {lunchCode, peanut, firstName, lastName, boyOrGirl} = this.state
    return <form onSubmit={this.handleSubmit}>
      <div className={classes.newStudentForm}>
        <div className={classes.formControl}>
          <TextField
            onChange={this.updateState('firstName')}
            value={firstName}
            label="First Name"
            margin="normal"
          />
        </div>
        <div className={classes.formControl}>
          <TextField
            onChange={this.updateState('lastName')}
            value={lastName}
            label="Last Name"
            margin="normal"
          />
        </div>

        <div className={classes.formControl}>
          <div className={classes.switchWrapper}>
            <label htmlFor="boyOrGirl">Boy</label>
            <Switch name="boyOrGirl"
                    classes={{
                      icon: classes.boySwitch,
                      bar: boyOrGirl ? classes.girlSwitch : classes.boySwitch,
                      iconChecked: classes.girlSwitch
                    }}
                    checked={boyOrGirl}
                    onChange={this.updateSwitch}
                    color="secondary"/>
            <label htmlFor="boyOrGirl">Girl</label>
          </div>
        </div>
        <div className={classes.formControl}>
          <TextField
            onChange={this.updateState('lunchCode')}
            value={lunchCode}
            label="Lunch Code"
            margin="normal"
          />
        </div>
        <div className={ classes.formControl}>
          <TextField
            select
            label="Grade"
            margin="normal"
            value={this.state.grade}
            onChange={this.updateState('grade')}
          >
            {this.allowedGrades.map(g => (
              <MenuItem key={g} value={g}> {g} </MenuItem>
            ))}
          </TextField>
        </div>
        <div className={classes.formControl}>
          <RadioGroup onChange={this.updateState('peanut')} value={peanut}>
            <FormControlLabel value="peanut" control={<Radio/>} label="Peanut"/>
            <FormControlLabel value="noPeanutOk" control={<Radio/>} label="No Peanut - okay"/>
            <FormControlLabel value="noPeanut" control={<Radio/>} label="No Peanut"/>
          </RadioGroup>
        </div>
      </div>
      <Button variant="contained" color="primary" type="submit">
          Create
      </Button>
    </form>
  }
}


const styles = (theme) => {
  return {
    newStudentForm: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap'
    },
    formControl: {
      flex: '1 1 160px',
      padding: 20,
      borderWidth: 2,
      borderColor: 'black',
      borderRadius: 5
    },
    switchWrapper: {
      marginTop: 25
    },
    boySwitch: {
      backgroundColor: theme.palette.primary.main
    },
    girlSwitch: {
      backgroundColor: theme.palette.secondary.main
    }
  }
}

export default withStyles(styles)(AddStudentForm)
