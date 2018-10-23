import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Modal from './Modal'

class LayoutSelector extends Component {
  constructor (props) {
    super(props)
    this.state = {
      modalOpen: false,
      newLayoutName: ''
    }
  }

  navigateAway (id) {
    this.props.history.push(`/teacher/layout/${id}`)
  }

  handleSubmit = () => {
    this.props.createNewLayout(this.state.newLayoutName).then(() => {
      this.handleClose()
    })
  }

  layoutNameChange = (e) => {
    this.setState({newLayoutName: e.target.value})
  }

  handleClose = () => {
    this.setState({modalOpen: false})
  }

  render () {
    const {teacherName, layouts, classes} = this.props
    const {modalOpen, newLayoutName} = this.state
    return <div className="layouts">
      <div className="teacherHeader">
        <h1>{teacherName}</h1>
      </div>
      <div className="layouts">
        {layouts.map((layout) =>
          <div className={classes.layout}
               onClick={() => this.navigateAway(layout.id)}>
            <h3 className={[classes.centeredText, 'dude'].join(' ')}>{layout.name}</h3>
          </div>)}
        <div className={classes.layout}
             onClick={() => this.setState({modalOpen: true})}>
          <h3 className={[classes.centeredText, 'dude'].join(' ')}>+</h3>
        </div>
      </div>
      <Modal show={modalOpen}
             dismiss={this.handleClose}
             title="New Layout"
      >
        <div className={classes.modalContent}>
          <TextField
            className={classes.modalElement}
            label="Layout Name"
            margin="normal"
            value={newLayoutName}
            onChange={this.layoutNameChange}
          />
          <Button
            className={classes.modalElement}
            variant="contained"
            color="primary"
            onClick={this.handleSubmit}
          >
            Create new Layout
          </Button>
        </div>
      </Modal>
    </div>
  }
}

const styles = {
  layout: {
    margin: 10,
    padding: '0px 10px',
    backgroundColor: '#4b9bd9',
    display: 'block',
    flex: '0 1 auto',
    minWidth: 150,
    height: 100,
    borderRadius: '5px',
    textAlign: 'center',
    cursor: 'pointer'
  },
  centeredText: {
    position: 'relative',
    top: '50%',
    transform: 'translateY(-50%)'
  },
  modalContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  modalElement: {
    marginBottom: 20
  }

}

export default withRouter(withStyles(styles)(LayoutSelector))
