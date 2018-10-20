import React, { Component } from 'react'
import LayoutSelector from '../components-presentation/LayoutSelector'
import {connect} from 'react-redux'
import { setLayouts } from '../state/actions'

class TeacherOverview extends Component {

  componentDidMount(){
    this.fetchLayouts()
  }

  fetchLayouts() {
    return fetch(`/api/layouts?teacher_id=${this.props.teacher.id}`)
      .then(resp => resp.json())
      .then(data => {
        this.props.dispatch(setLayouts(data))
      })
  }

  createNewLayout(layoutName){
    return fetch('/api/layouts', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({teacherId: this.props.teacher.id, name: layoutName})
    })
      .then(() => {
        this.fetchLayouts()
      })
  }

  render () {
    const {teacher, layouts} = this.props
    return <LayoutSelector
      teacherName={teacher.name}
      layouts={layouts}
      createNewLayout = { this.createNewLayout.bind(this) }
      />
  }
}

const mapStateToProps = (state) => ({
  teacher: state.teacher,
  layouts: state.layouts
})

export default connect(mapStateToProps)(TeacherOverview)
