import React, {Component} from 'react'

export default class TableLayout extends Component {
  componentDidMount() {
  }
  render(){
    return <div>
      This is where you layout your classroom (component)
      Layout: {this.props.params.id}
    </div>
  }
}
