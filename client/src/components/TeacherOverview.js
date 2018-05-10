import React, { Component } from 'react'
import LayoutSelector from '../components-presentation/LayoutSelector'
import {connect} from 'react-redux'

class TeacherOverview extends Component {
  constructor (props) {
    super(props)
    this.state = {
      layouts: []
    }
  }

  componentDidMount(){
    fetch(`/api/layouts?teacher_id=${this.props.teacher.id}`)
      .then(resp => resp.json())
      .then(data => {
        console.warn(data)
        this.setState({layouts: data})
      })
  }

  createNewLayout(layoutName){
    fetch('/api/layouts', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({teacherId: this.props.teacher.id, name: layoutName})
    })
      .then(resp => resp.json())
      .then(data => {
        console.log(data)
      })
  }

  render () {
    return <LayoutSelector
      teacherName={this.teacherName}
      layouts={this.state.layouts}
      createNewLayout = { this.createNewLayout.bind(this) }
      />
  }
}

const mapStateToProps = (state) => ({
  teacher: state.teacher,
  layouts: state.layouts
})

export default connect(mapStateToProps)(TeacherOverview)
