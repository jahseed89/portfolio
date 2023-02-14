import React from 'react'
import './approachCard.scss'

const ApproachCard = ({icon, title, desc}) => {
  return (
    <div className='card-holder'>
        <div><img src={icon} alt="reading" /></div>
        <h3>{title}</h3>
        <p>{desc}</p>
    </div>
  )
}

export default ApproachCard