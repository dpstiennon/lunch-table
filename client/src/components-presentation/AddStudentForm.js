import React, {Component} from 'react'

const AddStudentForm = (props) => {
  return <form>
    <div>
      <label htmlFor="firstName"></label>
      <input type="text" name="firstName" placeholder="Last Name"/>
    </div>
    <div>
      <label htmlFor="lastName"></label>
      <input type="text" name="firstName" placeholder="First Name"/>
    </div>
  </form>
}
