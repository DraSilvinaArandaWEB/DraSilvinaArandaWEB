import React from 'react'
import './Banner.css'
import instagramIcon from '../../assets/instagramIcon.png'
import whatsappIcon from '../../assets/whatsappIcon.png'

export const Banner = ({title , subtitle , img}) => {
  return (
    <div className="banner" style={{backgroundImage: `url(${img})`}}>
      <div className="banner-socials">
      <a href="https://www.instagram.com/drasilvinaaranda/" target='blank'><img src={instagramIcon} alt="instagram icon" /></a>
      <a href="https://wa.me/5491137696614?text=Hola%20Dra%20Silvina%20!%20Quiero%20realizar%20una%20consulta%20,%20Gracias!"><img src={whatsappIcon} alt="whastapp icon" /></a>
      </div>
        {/* <div className="banner-info">
            <h2>{title}</h2>
            <p>{subtitle}</p>
        </div> */}
    </div>
  )
}
