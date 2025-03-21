import React from 'react'
import './Faciales.css'
import  { Navbar } from '../../components/navbar/Navbar'
import { Footer } from '../../components/footer/Footer'
import { Banner } from '../../components/banner/Banner'
import { useEffect , useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
import facialesImg from '../../assets/FACIALES.jpg'

export const Faciales = () => {

  const refWhatsapp = useRef(null)
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/Faciales') {
      window.scrollTo({left: 0 , top: 0 , behavior: "instant"}); // Desplaza la página al inicio
    }
  }, [location.pathname]);

  useEffect(() => {
    const accordionButton = document.querySelectorAll(".accordion-button");

    accordionButton.forEach((acBtn) => {
      acBtn.addEventListener("click", () => {
        accordionButton.forEach((actBtn2) => {
          actBtn2.classList.remove("noCollapsed");
          actBtn2.classList.add("collapsed");
        });

        if (acBtn.getAttribute("aria-expanded") === "true") {
          acBtn.classList.remove("collapsed");
          acBtn.classList.add("noCollapsed");
        } else {
          acBtn.classList.remove("noCollapsed");
          acBtn.classList.add("collapsed");
        }
      });
    });

    // Cleanup: remover los eventos al desmontar el componente
    return () => {
      accordionButton.forEach((acBtn) => {
        acBtn.removeEventListener("click", () => {});
      });
    };
  }, []);

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
    <div>
      <div className="whatsapp-fixed">
        <div className='whatsapp-message' ref={refWhatsapp}>
          <p>¡Hola! Agendá una cita hoy</p>
          <div className="right"></div>
        </div>
        <a href="https://wa.me/5491137696614?text=Hola%20Dra%20Silvina%20!%20Quiero%20realizar%20una%20consulta%20,%20Gracias!"><img src="https://cdn3.iconfinder.com/data/icons/2018-social-media-logotypes/1000/2018_social_media_popular_app_logo-whatsapp-256.png" alt="whatsapp icon" onMouseOver={() => animateWhatsapp()} onMouseLeave={() => outWhatsapp()}/></a>
      </div>
      <div className="navbar-container">
      <Navbar></Navbar>
      </div>
      <Banner title={"TRATAMIENTOS"} subtitle={"FACIALES"} img={facialesImg}></Banner>
      <div className="container-faciales">
      <div className="faciales-info">
            <h2>TRATAMIENTOS</h2>
            <p>Corporales</p>
        </div>
        {/* <div className="pink-line"></div> */}
        <div className="accordion-container">
          <h2 className='title'>Nuestros tratamientos Faciales</h2>
          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                Bichectomia
                </button>
              </h2>
              <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                La bichectomía es un procedimiento quirúrgico en el que se elimina la grasa presente en las bolsas de bichat que se encuentran en las mejillas con el objetivo de una apariencia facial más balanceada. Se realiza en consultorio con anestesia local. 
                No deja cicatrices ya que se realiza por dentro de la mucosa oral.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Blefaroplastia
                </button>
              </h2>
              <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                Es una intervención que se lleva a cabo para reparar los párpados hundidos o caídos (ptosis), las bolsas de grasa palpebrales y ademas remover el exceso de piel de esta zona.
                Se realiza con anestesia local mas una leve sedacion para mayor confort. La recuperación es muy rapida y practicamente indolora.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Rinoplastia
                </button>
              </h2>
              <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                La rinoplastia es la intervención quirúrgica que se practica para corregir las deformidades de la nariz. Consiste, fundamentalmente, en modificar las estructuras óseas y cartilaginosas nasales para conseguir una nueva forma que mejore la armonía facial.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                Armonización facial
                </button>
              </h2>
              <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                La armonización facial consiste en un conjunto de procedimientos estéticos variables según cada paciente con el objetivo de destacar la belleza natural de cada persona a través de pequeñas modificaciones en su fisionomía facial, realzando los puntos fuertes y suavizando las imperfecciones. Se logra mediante el uso de métodos no quirúrgicos como ácido hialurónico, toxina botulinica, bioestimuladores como PRP, hidroxiapatita de calcio, Acido poliláctico. Se puede combinar ademas con procedimientos minimamente invasivos como bichectomia, MELA facial o de papada, endolifting láser, para resultados mas evidentes y duraderos. 
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                Hilos Tensores 
                </button>
              </h2>
              <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                Los hilos tensores son unos hilos finos utilizados en Medicina Estética para rejuvenecer el rostro. Se pueden aplicar tanto para eliminar las arrugas y la flacidez facial, como para levantar las cejas o, incluso, para redefinir el óvalo de la cara y el contorno de la mandíbula.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                Toxina botulínica
                </button>
              </h2>
              <div id="collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                Ayuda a prevenir que las arrugas y líneas de expresión se profundicen o se hagan más evidentes y a suavizar o desaparecer las que ya se ven. Se realiza con microagujas, en consultorio, en aproximadamente 15 minutos. 
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                Ácido Hialuronico 
                </button>
              </h2>
              <div id="collapseSeven" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                Es una proteína que se produce en nuestro cuerpo y es conocida por sus beneficios de hidratación y por mejorar el aspecto de las arrugas y ojeras para lograr una piel renovada.
                {/* <div className="img-container">
                  <img src={img1} alt="" />
                  <img src={img1} alt="" />
                </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="faciales-next">
          <Link to={"/Mela"}>MELA</Link>
          <Link to={"/Corporales"}>Corporales</Link>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}
