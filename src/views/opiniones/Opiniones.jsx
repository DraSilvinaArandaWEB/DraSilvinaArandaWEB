import React from 'react'
import './Opiniones.css'
import  { Navbar } from '../../components/navbar/Navbar'
import { Footer } from '../../components/footer/Footer'
import { Banner } from '../../components/banner/Banner'
import { Card } from './card/Card'

export const Opiniones = () => {

  document.body.style.overflowX= "hidden"
  
  return (
    <div className='opiniones'>
      <div className="navbar-container">
      <Navbar></Navbar>
      </div>
      <Banner title={"OPINIONES"} subtitle={"Nuestros pacientes nos definen"}></Banner>
      <div className="cards-container">
        <div className="pink-line"></div>
        <div className="cards-container-inner">
          <Card img={"https://cdn-icons-png.flaticon.com/512/6858/6858504.png"} text={"La doctora Silvina es una excelente profesional. Cuenta con un equipo que la acompaña de primera línea. Una doctora atenta, que acompaña y sostiene al paciente en todo momento. A parte, un consultorio increíble que te dan ganas de quedarte a vivir en uno ..."} name={"Ever"}></Card>
          <Card img={"https://png.pngtree.com/png-vector/20220817/ourmid/pngtree-women-cartoon-avatar-in-flat-style-png-image_6110776.png"} text={"Excelente profesional pero mejor aún ser humano. Atiéndanse con la Dra ni lo duden, van a quedar encantados."} name={"Alin"}></Card>
          <Card img={"https://cdn-icons-png.flaticon.com/512/6858/6858504.png"} text={"Hace dos años me realicé una mela de papada y ha sido la mejor decisión que pude hacer en manos de la doctora Silvina! Atención especializada y trato cordial. Recomendaba mil veces!"} name={"The Beauty"}></Card>
          <Card img={"https://png.pngtree.com/png-vector/20220817/ourmid/pngtree-women-cartoon-avatar-in-flat-style-png-image_6110776.png"} text={"Excelente profesional ! 100 x ciento recomendable,en mes de octubre me hice mela de abdomen completo  estoy muy feliz con los resultados ,mil gracias Dra silvina Aranda"} name={"Maria"}></Card>
          <Card img={"https://png.pngtree.com/png-vector/20220817/ourmid/pngtree-women-cartoon-avatar-in-flat-style-png-image_6110776.png"} text={"Yo me opere con la doc en agosto y la verdad que estoy super satisfecha fue como un rejunecimiento me.siento más jovial y fresca.me hice un mela de papada .están rápida la recuperación que ya quiero hacerme algo más.."} name={"Maria Julia"}></Card>
          <Card img={"https://png.pngtree.com/png-vector/20220817/ourmid/pngtree-women-cartoon-avatar-in-flat-style-png-image_6110776.png"} text={"Excelente profesional y equipo!!! Me hice MELA láser de abdómen completo hace algunos días y estoy muy contenta con el resultado. La doc 10 puntos en todo momento, gracias totales!!!! "} name={"Adriana"}></Card>
          <Card img={"https://png.pngtree.com/png-vector/20220817/ourmid/pngtree-women-cartoon-avatar-in-flat-style-png-image_6110776.png"} text={"La recomiendo mucho, una excelente profesional y además de competente fue súper amable y atenta desde el principio."} name={"Amanda"}></Card>
          <Card img={"https://cdn-icons-png.flaticon.com/512/6858/6858504.png"} text={"Mi experiencia con ella, me brindo seguridad, después, con el tratamiento de mela de papada no dolió nada. Super recomiendo a la Dra a quien le mando un gran abrazo."} name={"Ignacio"}></Card>
        </div>
        <div className='reseña-container'>
        <a href="https://www.google.com/maps/place/Dra.+Silvina+Aranda/@-34.5685261,-58.4457494,17z/data=!4m8!3m7!1s0x95bcb5e759714709:0x323e094ba81c917e!8m2!3d-34.5685305!4d-58.4431745!9m1!1b1!16s%2Fg%2F11t3v5z0lv?entry=ttu&g_ep=EgoyMDI0MTAxNi4wIKXMDSoASAFQAw%3D%3D" target='blank' className='reseña'>DEJANOS TU RESEÑA</a>
        </div>
        

      </div>
      <Footer></Footer>
    </div>
  )
}
