import React from 'react'
import './Card.css'
import googleIcon from '../../assets/Google-256.webp'
import starIcon from '../../assets/starIcon.webp'

export const Card = ({img , text , name , date}) => {

  const truncateWords = (text, maxWords = 35) => {
    const words = text.split(/\s+/);
    return words.length > maxWords ? words.slice(0, maxWords).join(' ') + '...' : text;
  }

  return (
    <div className="card-opiniones">
      <img src={googleIcon} alt="Google Icon" className='googleIcon'/>
      <div className="info">
        <div className="icon" style={{backgroundImage: `url(${img})`}}></div>
        <div className="name">
          <h3>{name}</h3>
          <p>{date}</p>
        </div>
      </div>
      <div className='stars'>
        <img src={starIcon} alt="star icon" />
        <img src={starIcon} alt="star icon" />
        <img src={starIcon} alt="star icon" />
        <img src={starIcon} alt="star icon" />
        <img src={starIcon} alt="star icon" />
      </div>
      <div className="text">
        <p>{truncateWords(text)}</p>
      </div>
      <a href="https://www.google.com/maps/place/Dra.+Silvina+Aranda/@-34.5685261,-58.4457494,17z/data=!4m8!3m7!1s0x95bcb5e759714709:0x323e094ba81c917e!8m2!3d-34.5685305!4d-58.4431745!9m1!1b1!16s%2Fg%2F11t3v5z0lv?entry=ttu&g_ep=EgoyMDI0MTAxNi4wIKXMDSoASAFQAw%3D%3D" target='_blank'>
      <p className='leerMas'>Leer mas...</p>
      </a>
    </div>
  )
}
