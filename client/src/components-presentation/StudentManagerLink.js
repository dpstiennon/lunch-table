import React from 'react'
import { Link } from 'react-router-dom'

const StudentManagerLink = (props) => {
  return <div>
    <button><Link to="/student-manager">Student Manager</Link></button>
  </div>
}

export default StudentManagerLink