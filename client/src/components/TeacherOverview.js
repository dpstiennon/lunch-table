import React, { Component } from 'react'
import LayoutSelector from '../components-presentation/LayoutSelector'

export default class TeacherOverview extends Component {
  constructor () {
    super()
    this.teacherName = 'Amy Stiennon'
    this.state = {
      layouts: []
    }
  }

  componentDidMount(){
    fetch('/api/teacher/3')
      .then(resp => resp.json())
      .then(json => {
        console.warn(json)
        this.setState({layouts: json.layouts})
      })
  }

  render () {
    return <LayoutSelector teacherName={this.teacherName} layouts={this.state.layouts} />
  }
}