import React, {Component} from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Switch from '@material-ui/core/Switch'
import RadioGroup from '@material-ui/core/RadioGroup'
import Radio from '@material-ui/core/Radio'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import { withStyles } from '@material-ui/core/styles';

const styles = {
  newStudentForm: {
    display: 'flex',
    justifyContent: 'space-around'
  },
  formControl: {
    flex: '1 1 400px',
    padding: '10px'
  }
}

class AddStudentForm extends Component {
  constructor () {
    super()
    this.state = {
      peanut: '',
      birthDate: '',
      firstName: ''
    }
  }



  componentDidMount() {

  }

  setFirstName = (e) => {
    this.setState({firstName: e.target.value})
  }

  setPeanut = (e) => {
    this.setState({peanut: e.target.value})
  }

  setDate = (e) => {
    this.setState({birthDate: e.target.value})
  }

  setFirstName = (e) => {
    this.setState({birthDate: e.target.value})
  }

  render () {
    const {createStudent, classes} = this.props
    const {birthDate, peanut, firstName} = this.state
    return <form onSubmit={createStudent} >
      <div className={classes.newStudentForm}>
        <div className={classes.formControl}>
          <TextField
            onChange={this.setFirstName}
            value={firstName}
            label="First Name"
            margin="normal"
            placeholder="First Name"
          />
        </div>
        <div className={classes.formControl} >
          <label htmlFor="lastName">Last Name</label>
          <input className="form-control form-control-sm" type="text" name="firstName" placeholder="First Name"/>
        </div>
        <div className={classes.formControl} >
          <label htmlFor="Birth date">Birth Date</label>
          <TextField
            onChange={this.setDate}
            value={birthDate}
            id="date"
            name="Birth date"
            className="form-control"
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>
        <div className={classes.formControl} >
          <label htmlFor="boyGirl">Boy</label>
          <Switch name="boyGirl"
                  color="secondary"/>
          <label htmlFor="boyGirl">Girl</label>
        </div>
        <div className={classes.formControl} >
          <RadioGroup onChange={this.setPeanut} value={peanut}>
            <FormControlLabel value="peanut" control={<Radio/>} label="Peanut"/>
            <FormControlLabel value="noPeanutOk" control={<Radio/>} label="No Peanut - okay"/>
            <FormControlLabel value="noPeanut" control={<Radio/>} label="No Peanut"/>
          </RadioGroup>
        </div>
      </div>
      <Button variant="contained" color="primary">
        Create
      </Button>
    </form>
  }
}

export default withStyles(styles)(AddStudentForm)
