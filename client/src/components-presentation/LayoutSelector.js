import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import Modal from './Modal'

const styles = {
  layout: {
    margin: '10px 10px 10px 10px',
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
  }
}

class LayoutSelector extends Component {
  constructor (props) {
    super(props)
    this.state = {modalOpen: false}
  }

  navigateAway (id) {
    alert(id)
  }

  handleSubmit () {
    const newLayoutName = this.newLayoutName.value
    this.props.createNewLayout(newLayoutName).then(() => {
      this.handleClose()
    })
  }

  handleClose = () => {
    this.setState({modalOpen: false})
  }

  render () {
    const {teacherName, layouts, classes} = this.props
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
      <Modal show={this.state.modalOpen}
             dismiss={this.handleClose}
      >
        <div className="modal-content">
          <label htmlFor="name">Layout Name</label>
          <input name="name" type="text" ref={t => this.newLayoutName = t}/>
          <button onClick={this.handleSubmit.bind(this)}>
            Create new Layout
          </button>
        </div>
      </Modal>
    </div>
  }

}

export default withStyles(styles)(LayoutSelector)
