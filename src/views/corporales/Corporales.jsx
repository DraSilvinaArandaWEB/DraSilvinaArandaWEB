import React from 'react'
import './Corporales.css'
import { Navbar } from '../../components/navbar/Navbar'
import { Banner } from '../../components/banner/Banner'
import { Footer } from '../../components/footer/Footer'
import { useEffect , useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
import bannerImg from '../../assets/CORPORALES.jpg'

export const Corporales = () => {

  const refWhatsapp = useRef(null)
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/Corporales') {
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

    // remover los eventos al desmontar el componente
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
      <Banner img={bannerImg}></Banner>
      <div className="container-corporales">
      <div className="corporales-info">
            <h2>TRATAMIENTOS</h2>
            <p>Corporales</p>
        </div>
        {/* <div className="pink-line"></div> */}
        <div className="accordion-container">
          <h2 className='title'>Nuestros tratamientos corporales</h2>
          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                  Aumento mamario
                </button>
              </h2>
              <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  La mamoplastia de aumento se hace para incrementar el tamaño de las mamas. También se puede hacer para cambiar la forma de los senos o para corregir defectos de nacimiento (deformidad congénita). <br /><br /> Existen distintos abordajes para esta cirugía (puede realizarse el abordaje por vía submamaria, periareolar o axilar), distintos planos en los que puede colocarse el implante (retroglandular, retropectoral o dualplane) como también distintos tamaños y tipos de prótesis. En la consulta decidiremos juntas cual es el abordaje, el plano y el tipo de prótesis más adecuado para cada paciente.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  Pexia mamaria
                </button>
              </h2>
              <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                La pexia mamaria, también conocida como mastopexia, es una cirugía para corregir la posición y mejorar la apariencia de los senos. Puede realizarse con o sin implantes, dependiendo de si se desea aumentar el volumen.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  Labioplastia
                </button>
              </h2>
              <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  Una cirugía menor en la cual se elimina el exceso de piel de los labios menores de la vulva. Ademas se pueden colocar rellenos de grasa en los labios mayores para mejorar el volumen de los mismos y la estética. Se puede realizar con anestesia local, sin puntos y con muy rapida recuperacion.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                  Lipoescultura (Renuvion y Lumiia)
                </button>
              </h2>
              <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  La lipoescultura es la cirugía para eliminar adiposidades y modelar el cuerpo.
                  Nos permite definir y adelgazar zonas de adiposidad localizada (papada, abdomen, flancos, muslos) además de dar forma a la cintura, al glúteo y al abdomen. Se realiza en quirófano, de forma semi ambulatoria, con Renuvion y con Lumiia. La diferencia respecto a MELA es que se puede trabajar integralmente en varias zonas del cuerpo a la vez, logrando en un unico procedimiento eliminar la grasa de varias zonas (abdomen y espalda completos, piernas, brazos, etc).

                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                  Abdominoplastia (Renuvion y Lumiia)
                </button>
              </h2>
              <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  La abdominoplastia es una cirugía para eliminar el exceso de piel y grasa, y tensar los músculos abdominales, con el fin de remodelar el abdomen y la cintura.
                  <ul><li style={{color: "black"}}>Realizada en quirófano bajo anestesia general.</li><li style={{color: "black"}}>Uso de tecnología Renuvion y Lumiia.</li><li style={{color: "black"}}>Internación de un día para mayor confort.</li></ul>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div className="corporales-next">
          <Link to={"/Mela"}>MELA</Link>
          <Link to={"/Faciales"}>Faciales</Link>
        </div>
      </div>
      <Footer></Footer>

    </div>
  )
}
