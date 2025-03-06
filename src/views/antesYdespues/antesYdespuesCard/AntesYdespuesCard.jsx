import React from 'react'
import './AntesYdespuesCard.css'
import videoTest from '../../../assets/videoTest.mp4'

export const AntesYdespuesCard = ({serviceName , src , isVideo = false}) => {
  return (
    <div className="antesydespuescard">
      {isVideo ? 
      <video width={"100%"} controls style={{height: "calc(100% - 40px)" , objectFit: "cover" , borderTopLeftRadius: 5 , borderTopRightRadius: 5}}>
        <source src={videoTest} type='video/mp4'/>
      </video>
      : <img src={src} alt={serviceName} style={{width: "100%" , height: "calc(100% - 40px)" , borderTopLeftRadius: 5 , borderTopRightRadius: 5 , objectFit: "cover"}}/>}
        <div className="info" style={isVideo ? {marginTop: "-6px"} : {}}>{serviceName}</div> 
    </div>
  )
}
