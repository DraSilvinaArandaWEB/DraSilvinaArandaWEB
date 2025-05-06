import React, { useState } from 'react'
import { HashLink } from 'react-router-hash-link';
import './Navbar.css'
import { Link } from 'react-router-dom'
import navIconGreen from '../../assets/navbarIcon.png'
import logo from '../../assets/logo.png'

export const Navbar = () => {

  const [nav , setNav] = useState("nav")

  const changeNav = () => {
    if (nav === "nav") {
      setNav("navMobile")
      document.body.style.overflow= "hidden"
    } else {
      setNav("nav")
      document.body.style.overflowY= "auto"
    }
  }

  const links = document.querySelectorAll(".link")

  links.forEach((link) => {
    link.addEventListener("click" , () => {
      document.body.style.overflowY= "auto"
      setNav("nav")    
    })
  })

  const clickIcon = () => {
    document.body.style.overflowY= "auto"
    setNav("nav")    

  }

  const currentUrl = window.location.href;

  return (
    <nav className={nav}>
      <div className='tel-info'>
        <p>+54 9 11 37696614 | <a href="https://wa.me/5491137696614?text=Hola%20Dra%20Silvina%20!%20Quiero%20realizar%20una%20consulta%20,%20Gracias!">Agenda tu consulta virtual</a></p>
      </div>
      <div className="nav-container">
        <div className="nav-container-1">
            <Link to={"/"}><img src={logo} alt="logo" onClick={() => clickIcon()}/></Link>  
        </div>

        <div className="nav-container-2">
          <ul>
            {/* <li className='link'><Link to={"/"}>INICIO</Link></li> */}
            <li className='link' style={{color: !currentUrl.includes('https://www.drasilvinaaranda.com/') ? "red" : "blue"}}><HashLink to={"/#work"}>PROCEDIMIENTOS</HashLink></li>
            <li className='link'><HashLink to={"/#testimonios"}>TESTIMONIOS</HashLink></li>
            <li className='link'><Link to={"/Antes&Despues"}>ANTES & DESPUÉS</Link></li>
            <li className='link'><Link to={"/Contacto"}>CONTACTO</Link></li>
          </ul>
          <img className='navIcon' src={navIconGreen} alt="navIcon" onClick={() => {changeNav()}}/>
        </div>

      </div>    
    </nav>
  )
}
