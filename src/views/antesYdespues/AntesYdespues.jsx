import React from 'react'
import './AntesYdespues.css'
import { Navbar } from '../../components/navbar/Navbar'
import { Banner } from '../../components/banner/Banner'
import { AntesYdespuesCard } from './antesYdespuesCard/AntesYdespuesCard'
import { Footer } from '../../components/footer/Footer'

export const AntesYdespues = () => {
  return (
    <div className="antesydespues">
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
