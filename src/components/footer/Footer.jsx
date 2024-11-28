import React from 'react'
import './Footer.css'
import logo from '../../assets/Iso-3.webp'
import whatsappIcon from '../../assets/whastappIcon.webp'
import instagramIcon from '../../assets//instagramIcon.webp'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

export const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer-container">
            {/* FOOTER CONTAINER 1 */}
            <div className="footer-container-1">
                <div className="links-container">
                  <h3>MENU</h3>
                    <ul>
                        <li><Link to={"/"}>INICIO</Link></li>
                        <li><HashLink to={"/#work"}>PROCEDIMIENTOS</HashLink></li>
                        <li><Link to={"/Testimonios"}>TESTIMONIOS</Link></li>
                        <li><Link to={"/Contacto"}>CONTACTO</Link></li>
                    </ul>
                </div>
            </div>
            {/* FOOTER CONTAINER 2 */}
            <div className="footer-container-2">
                <img src={logo} alt="logo" />

            </div>
            {/* FOOTER CONTAINER 3 */}
            <div className="footer-container-3">
                <h3>SEGUINOS EN LAS REDES</h3>
                <div className="socials">
                    <a href="https://www.instagram.com/drasilvinaaranda/" target='blank'><img src={instagramIcon} alt="instagram logo" /></a>
                    <a href="https://wa.me/5491137696614?text=Hola%20Dra%20Silvina%20!%20Quiero%20realizar%20una%20consulta%20,%20Gracias!"><img src={whatsappIcon} alt="whastapp logo" /></a>
                </div>
                <h3>ENCONTRANOS EN</h3>
                <ul>
                    <li>AV Federico Lacroze 2252 CABA</li>
                    <li>silvinaaranda@gmail.com</li>
                    <li>+54 9 11 37696614</li>
                </ul>

            </div>

        </div>
        <p className='copyright'>Copyright © 2024. Todos los derechos reservados</p>

    </footer>
  )
}
