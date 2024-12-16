import React from 'react'
import './AntesYdespues.css'
import { useRef } from 'react'
import { Navbar } from '../../components/navbar/Navbar'
import { Banner } from '../../components/banner/Banner'
import { AntesYdespuesCard } from './antesYdespuesCard/AntesYdespuesCard'
import { Footer } from '../../components/footer/Footer'

export const AntesYdespues = () => {

  const refWhatsapp = useRef(null)

  const animateWhatsapp = () => {
    if(refWhatsapp.current){
     refWhatsapp.current.style.opacity = "1"
      refWhatsapp.current.style.right = "70px"
    }
  }

  const outWhatsapp = () => {
    if(refWhatsapp.current){
      refWhatsapp.current.style.opacity = "0"
       refWhatsapp.current.style.right = "-300px"
     }
  }

  return (
    <div className="antesydespues">
      <div className="whatsapp-fixed">
        <div className='whatsapp-message' ref={refWhatsapp}>
          <p>¡Hola! Agendá una cita hoy</p>
          <div className="right"></div>
        </div>
        <a href="https://wa.me/5491137696614?text=Hola%20Dra%20Silvina%20!%20Quiero%20realizar%20una%20consulta%20,%20Gracias!"><img src="https://cdn3.iconfinder.com/data/icons/2018-social-media-logotypes/1000/2018_social_media_popular_app_logo-whatsapp-256.png" alt="whatsapp icon" onMouseOver={() => animateWhatsapp()} onMouseLeave={() => outWhatsapp()}/></a>
      </div>
        <Navbar></Navbar>
        <Banner title={"ANTES & DESPUES"} subtitle={"! Encontrá el cambio que buscas con nosotros !"}></Banner>
        <div className="img-container">
            <div className="pink-line"></div>
            <div className="img-card-container">
                <AntesYdespuesCard></AntesYdespuesCard>
                <AntesYdespuesCard></AntesYdespuesCard>
                <AntesYdespuesCard></AntesYdespuesCard>
                <AntesYdespuesCard></AntesYdespuesCard>
                <AntesYdespuesCard></AntesYdespuesCard>
                <AntesYdespuesCard></AntesYdespuesCard>
                <AntesYdespuesCard></AntesYdespuesCard>
                <AntesYdespuesCard></AntesYdespuesCard>
                <AntesYdespuesCard></AntesYdespuesCard>
                <AntesYdespuesCard></AntesYdespuesCard>
                <AntesYdespuesCard></AntesYdespuesCard>
                <AntesYdespuesCard></AntesYdespuesCard>
            </div>
        </div>
        <Footer></Footer>
    </div>
  )
}
