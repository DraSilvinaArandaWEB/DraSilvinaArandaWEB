import React from 'react'
import './AntesYdespues.css'
import { useRef } from 'react'
import { Navbar } from '../../components/navbar/Navbar'
import { Banner } from '../../components/banner/Banner'
import { AntesYdespuesCard } from './antesYdespuesCard/AntesYdespuesCard'
import { Footer } from '../../components/footer/Footer'
import Rinoplastia from '../../assets/Rinoplastia.webp'
import HilosTensores from '../../assets/HilosTensores.webp'
import Blefaroplastia from '../../assets/Blefaroplastia.webp'
import Bichectomia from '../../assets/Bichectomia.webp'
import ArmonizacionFacial from '../../assets/ArmonizacionFacial.webp'
import RellenoLabios from '../../assets/RellenoLabios.webp'
import RellenoMenton from '../../assets/RellenoMenton.webp'
import RellenoOjeras from '../../assets/RellenoOjeras.webp'
import RellenoPomulos from '../../assets/RellenoPomulos.webp'
import Rinomodelacion from '../../assets/Rinomodelacion.webp'
import Mamoplastia from '../../assets/Mamoplastia.webp'
import VideoTest from '../../assets/videoTest.mp4'

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
        {/* <Banner title={"ANTES & DESPUES"} subtitle={"! Encontrá el cambio que buscas con nosotros !"}></Banner> */}
        <div className="img-container">
            {/* <div className="pink-line"></div> */}
            <div className="img-card-container">
                <AntesYdespuesCard serviceName={"Toxina Botulinica"} src={VideoTest} isVideo={true}/>
                <AntesYdespuesCard serviceName={"Hilos Tensores"} src={HilosTensores}/>
                <AntesYdespuesCard serviceName={"Rinoplastia"} src={Rinoplastia}/>
                <AntesYdespuesCard serviceName={"Beflaroplastia"} src={Blefaroplastia}/>
                <AntesYdespuesCard serviceName={"Bichectomia"} src={Bichectomia}/>
                <AntesYdespuesCard serviceName={"Armonización Facial"} src={ArmonizacionFacial}/>
                <AntesYdespuesCard serviceName={"Relleno de Labios"} src={RellenoLabios}/>
                <AntesYdespuesCard serviceName={"Relleno de Menton y Mandibula"} src={RellenoMenton}/>
                <AntesYdespuesCard serviceName={"Relleno de Ojeras"} src={RellenoOjeras}/>
                <AntesYdespuesCard serviceName={"Relleno de Pomulos"} src={RellenoPomulos}/>
                <AntesYdespuesCard serviceName={"Rinomodelacion"} src={Rinomodelacion}/>
                <AntesYdespuesCard serviceName={"Mamoplastia"} src={Mamoplastia}/>
            </div>
        </div>
        <Footer></Footer>
    </div>
  )
}
