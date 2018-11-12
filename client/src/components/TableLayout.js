import React, {Component} from 'react'
import * as actions from '../state/actions'
import Modal from '../components-presentation/Modal'
import {connect} from 'react-redux'
import EditStudentsModalContent from '../components-presentation/EditStudentsModalContent'

export class TableLayout extends Component {
  constructor (props) {
    super(props)
    this.state = {
      editStudents: true,
      switchClass: false,
      switchLayout: false
    }
  }
  componentDidMount() {
    this.props.dispatch(actions.getStudents)
  }

  dismissModal = (modal) => () => {
    this.setState({[modal] : false})
  }

  render(){
    return <div>
      <Modal
        show={this.state.editStudents}
        dismiss={this.dismissModal('editStudents')}
        title="Select Students" >
        <EditStudentsModalContent students={this.props.students || []}/>
      </Modal>
      <Modal
        show={this.state.switchClass}
        dismiss={this.dismissModal('editStudents')}
        title="Select Students" >
        <EditStudentsModalContent students={this.props.students || []}/>
      </Modal>
      <Modal
        show={this.state.switchLayout}
        dismiss={this.dismissModal('editStudents')}
        title="Select Students" >
        <EditStudentsModalContent students={this.props.students || []}/>
      </Modal>
      <StudentsInClass/>
      <TableManager/>
    </div>
  }
}

const mapStateToProps = (state) => {
  return {
    students: state.students
  }
}

export default connect(mapStateToProps)(TableLayout)
