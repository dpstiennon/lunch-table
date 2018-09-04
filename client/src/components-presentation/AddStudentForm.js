import React, {Component} from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Switch from '@material-ui/core/Switch'
import RadioGroup from '@material-ui/core/RadioGroup'
import Radio from '@material-ui/core/Radio'
import FormControlLabel from '@material-ui/core/FormControlLabel'

class AddStudentForm extends Component {
  constructor () {
    super()
    this.state = {
      peanut: ''
    }
  }

  componentDidMount() {

  }

  setPeanut (event) {
    this.setState({peanut: event.target.value})
  }

  render () {
    const {createStudent} = this.props
    return <div className="">
      <form onSubmit={createStudent}>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input className="form-control form-control-sm" type="text" name="firstName" placeholder="Last Name"/>
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input className="form-control form-control-sm" type="text" name="firstName" placeholder="First Name"/>
        </div>
        <div className="form-group">
          <label htmlFor="Birth date">Birth Date</label>
          <TextField
            id="date"
            name="Birth date"
            className="form-control"
            type="date"
            defaultValue="2017-05-24"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="boyGirl">Boy</label>
          <Switch name="boyGirl"
                  color="secondary"/>
          <label htmlFor="boyGirl">Girl</label>
        </div>
        <div className="form-group">
          <RadioGroup onChange={(e) => {this.setPeanut(e)}} value={this.state.peanut}>
            <FormControlLabel value="peanut" control={<Radio/>} label="Peanut"/>
            <FormControlLabel value="noPeanutOk" control={<Radio/>} label="No Peanut - okay"/>
            <FormControlLabel value="noPeanut" control={<Radio/>} label="No Peanut"/>
          </RadioGroup>
        </div>
        <Button variant="contained" color="primary">
          Create
        </Button>
      </form>
    </div>
  }
}

export default AddStudentForm
