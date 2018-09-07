import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Switch from '@material-ui/core/Switch'
import RadioGroup from '@material-ui/core/RadioGroup'
import Radio from '@material-ui/core/Radio'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import { withStyles } from '@material-ui/core/styles'

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
      marginTop: 16,
      borderWidth: 2,
      borderColor: 'black',
      borderRadius: 5
    },
    boySwitch: {
      backgroundColor: theme.palette.primary.main
    },
    girlSwitch: {
      backgroundColor: theme.palette.secondary.main
    }
  }
}

class AddStudentForm extends Component {
  constructor () {
    super()
    this.state = {
      peanut: '',
      birthDate: '',
      firstName: '',
      boyGirl: 0
    }
  }

  updateState = (key) => {
    return (e) => {
      this.setState({[key]: e.target.value})
    }
  }

  updateSwitch = e => this.setState({boyGirl: e.target.checked})

  render () {
    const {createStudent, classes} = this.props
    const {birthDate, peanut, firstName, lastName, boyGirl} = this.state
    return <form onSubmit={createStudent}>
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
          <label htmlFor="boyGirl">Boy</label>
          <Switch name="boyGirl"
                  classes={{
                    icon: classes.boySwitch,
                    bar: boyGirl ? classes.girlSwitch : classes.boySwitch,
                    iconChecked: classes.girlSwitch
                  }}
                  checked={boyGirl}
                  onChange={this.updateSwitch}
                  color="secondary"/>
          <label htmlFor="boyGirl">Girl</label>
        </div>
        <div className={classes.formControl}>
          <TextField
            onChange={this.updateState('birthDate')}
            value={birthDate}
            type="date"
            label="Birth Date"
            InputLabelProps={{
              shrink: true,
            }}
          />
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

export default withStyles(styles)(AddStudentForm)
