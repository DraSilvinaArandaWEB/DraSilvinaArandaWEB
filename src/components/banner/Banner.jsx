import React from 'react'
import './Banner.css'

export const Banner = ({title , subtitle}) => {
  return (
    <div className="banner">
        <div className="banner-info">
            <h2>{title}</h2>
            <p>{subtitle}</p>
        </div>
    </div>
  )
}
