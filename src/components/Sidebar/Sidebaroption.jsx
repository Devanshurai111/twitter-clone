import React from 'react'
import './sidebaroption.css'
const Sidebaroptions = ({active,text,Icon}) => {
  return (
    <div className={`sidebarOption ${active && "sidebarOption--active"}`}>
      <Icon/>
      <h2>{text}</h2>
    </div>
  )
}

export default Sidebaroptions