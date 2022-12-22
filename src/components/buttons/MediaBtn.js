import React from 'react'
import './mediaBtn.scss'

 const MediaBtn = ({mediaBtnText, handleClickMediaBtn}) => {
  return (
    <button className='media-btn' onClick={handleClickMediaBtn}>{mediaBtnText}</button>
  )
}
export default MediaBtn
