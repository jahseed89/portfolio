import React from 'react'
import './linksBtn.scss'

const LinksBtn = ({linkBtnText,  hRef}) => {
  return (
    <a href={hRef} target="blank" className='link-btn' >{linkBtnText}</a>
  )
}

export default LinksBtn