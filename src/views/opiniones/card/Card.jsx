import React from 'react'
import './Card.css'
import textIcon from '../../../assets/textIcon.webp'

export const Card = ({img , text , name}) => {
  return (
    <div className="card-opiniones">
      <div className="card-opiniones-img">
        <img src={img} alt="client icon" />
        <p>{name}</p>
      </div>
      <div className="card-opiniones-info">
        <img src={textIcon} alt="text icon" className="icon-absolute" />
        <p>{text}</p>
      </div>  
    </div>
  )
}
