import React from 'react'

const LayoutSelector = ({teacherName, layouts}) => {
  const navigateAway = (id) => {
    alert(id)
  }

  return <div className="layouts">
    <h1>{teacherName}</h1>
    {layouts.map((layout) =>
    <div className="layout" onClick={() => navigateAway(layout.id)}>
      <h3>{layout.name}</h3>
    </div>)}

  </div>

}

export default LayoutSelector