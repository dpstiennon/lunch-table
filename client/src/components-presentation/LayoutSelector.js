import React, { Component } from 'react'
import ReactModal from 'react-modal'

class LayoutSelector extends Component {
  constructor(props) {
    super(props)
    this.state = { modalOpen: false }
  }

  navigateAway(id){
    alert(id)
  }

  render () {
    const {teacherName, layouts} = this.props
    return <div className="layouts">
      <div className="teacherHeader">
        <h1>{teacherName}</h1>
      </div>
      <div className="layouts">
        {layouts.map((layout) =>
          <div className="layout"
               onClick={() => this.navigateAway(layout.id)}>
            <h3>{layout.name}</h3>
          </div>)}
        <div className="layout"
             onClick={() => this.setState({modalOpen: true})}>
          +
        </div>
      </div>
      <ReactModal isOpen={this.state.modalOpen}
                  contentLabel="Add a new class layout"
                  shouldCloseOnOverlayClick={true}
                  shouldCloseOnEsc={true}
      >
        Arble Bargle
      </ReactModal>
    </div>
  }

}

export default LayoutSelector