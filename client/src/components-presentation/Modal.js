import withStyles from '@material-ui/core/es/styles/withStyles'
import React, {Component} from 'react'
import ReactDOM from 'react-dom'

class Modal extends React.Component {
  constructor(props) {
    super(props);
    // Create a div that we'll render the modal into. Because each
    // Modal component has its own element, we can render multiple
    // modal components into the modal container.
    this.el = document.createElement('div');
    this.getModalRoot = () => document.getElementById('modal-root')
  }

  componentDidMount() {
    this.getModalRoot().appendChild(this.el);
  }

  componentWillUnmount() {
    this.getModalRoot().removeChild(this.el);
  }

  render() {
    const {dismiss, show, classes} = this.props
    const modalBasic = (
      <div
        onClick={dismiss}
        className={classes.modalBackground}
      >
        <section onClick={(e) => e.stopPropagation()} className={classes.modalWindow}>
          <div className="Modal-content">
            <a className="" role="button" onClick={dismiss}>&#x2297;</a>
            {this.props.children}
          </div>
        </section>
      </div>)
    return show ? ReactDOM.createPortal(modalBasic, this.el) : null
  }
}

const styles = {
  modalBackground: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    position: 'fixed',
    height: '100%',
    width: '100%',
    top: 0,
    left: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  modalWindow: {
    backgroundColor: '#fff',
    borderRadius: 3,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    maxHeight: '80%',
    overflow: 'hidden',
    position: 'relative',
    width: '60%',
  }
}

export default withStyles(styles)(Modal)
