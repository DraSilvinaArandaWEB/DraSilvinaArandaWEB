import React from 'react'
import './Banner.css'
import instagramIconPink from '../../assets/instagramIconPink.webp'
import whatsappIconPink from '../../assets/whatsappIconPink.webp'

export const Banner = ({title , subtitle}) => {
  return (
    <div className="banner">
      <div className="banner-socials">
      <a href="https://www.instagram.com/drasilvinaaranda/" target='blank'><img src={instagramIconPink} alt="instagram icon" /></a>
      <a href="https://wa.me/5491137696614?text=Hola%20Dra%20Silvina%20!%20Quiero%20realizar%20una%20consulta%20,%20Gracias!"><img src={whatsappIconPink} alt="whastapp icon" /></a>
      </div>
        <div className="banner-info">
            <h2>{title}</h2>
            <p>{subtitle}</p>
        </div>
    </div>
  )
}
