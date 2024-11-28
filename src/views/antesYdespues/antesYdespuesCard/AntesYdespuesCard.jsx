import React from 'react'
import './AntesYdespuesCard.css'

export const AntesYdespuesCard = ({serviceName}) => {
  return (
    <div className="antesydespuescard">
        <div className="info">Nombre Tratamiento {serviceName}</div>
    </div>
  )
}
