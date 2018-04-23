import React from 'react'

const LayoutSelector = ({teacherName, layouts}) => {
  const navigateAway = (id) => {
    alert(id)
  }

  const newLayoutModal = () => {
    alert('plus')
  }

  return <div className="layouts">
    <div className="teacherHeader">
      <h1>{teacherName}</h1>
    </div>
    <div className="layouts">
      {layouts.map((layout) =>
        <div className="layout" onClick={() => navigateAway(layout.id)}>
          <h3>{layout.name}</h3>
        </div>)}
      <div className="layout" onClick={newLayoutModal}></div>
    </div>
  </div>

}

export default LayoutSelector