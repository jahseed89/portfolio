import React from 'react'
import './linksBtn.scss'

const LinksBtn = ({linkBtnText, handleLinkBtn}) => {
  return (
    <button onClick={handleLinkBtn}>{linkBtnText}</button>
  )
}

export default LinksBtn