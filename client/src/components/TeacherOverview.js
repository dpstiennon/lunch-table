import React, { Component } from 'react'
import LayoutSelector from '../components-presentation/LayoutSelector'

export default class TeacherOverview extends Component {
  constructor () {
    super()
    this.teacherName = 'Amy Stiennon'
    this.layouts = [
      {
        name: '5th grade class',
        id: '123'
      },
      {
        name: '6th grade class',
        id: '456'
      },
      {
        name: 'The ones who always misbehave',
        id: '789'
      },
    ]
  }

  render () {
    return <LayoutSelector teacherName={this.teacherName} layouts={this.layouts} />
  }
}