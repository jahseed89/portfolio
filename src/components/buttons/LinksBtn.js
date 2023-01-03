import React from 'react'
import './linksBtn.scss'

const LinksBtn = ({linkBtnText,  hRef}) => {
  return (
    <a href={hRef} target="blank" >{linkBtnText}</a>
  )
}

export default LinksBtn