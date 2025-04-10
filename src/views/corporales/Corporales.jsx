import React from 'react'
import './Corporales.css'
import { Navbar } from '../../components/navbar/Navbar'
import { Banner } from '../../components/banner/Banner'
import { Footer } from '../../components/footer/Footer'
import { useEffect , useRef , useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
import bannerImg from '../../assets/CORPORALES.jpg'
import contactMobile from '../../assets/contactMobile.webp'

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

  const useWindowWidth = () => {
        const [width, setWidth] = useState(window.innerWidth);
      
        useEffect(() => {
          const handleResize = () => setWidth(window.innerWidth);
      
          window.addEventListener('resize', handleResize);
      
          return () => window.removeEventListener('resize', handleResize);
        }, []);
      
        return width;
  };

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
      <Navbar/>
      </div>
      <Banner img={useWindowWidth() <= 600 ? contactMobile : bannerImg}/>
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
                  Mamoplastia de aumento
                </button>
              </h2>
              <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                La mamoplastia de aumento permite aumentar el tamaño de los senos, mejorar su forma o corregir defectos congénitos. <br /><br />
                <strong>Existen diferentes enfoques para llevar a cabo esta cirugía:</strong>
                <ul>
                  <li style={{color: "black"}}><strong>Vías de acceso</strong>: submamaria, periareolar o axilar.</li>
                  <li style={{color: "black"}}><strong>Ubicación del implante</strong>: retroglandular, retropectoral o dualplane.</li>
                  <li style={{color: "black"}}><strong>Prótesis</strong>: variedad de tamaños y tipos.</li>
                </ul>
                En la consulta, elegiremos juntas el mejor abordaje, plano y prótesis para lograr los resultados que deseas.
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
                <br /><br />
                <strong>Opciones de cirugía:</strong>
                <ul>
                  <li style={{color: "black"}}><strong>Tipos de incisión</strong>: periareolar, vertical o en T invertida.</li>
                </ul>
                Según la caída y el volumen de las mamas, elegiremos la incisión más adecuada para cada paciente.
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
                Es un procedimiento menor para eliminar el exceso de piel en los labios menores de la vulva. Además, se puede agregar grasa para aumentar el volumen de los labios mayores, mejorando su estética.
                <br /><br />
                <ul>
                  <li style={{color: "black"}}><strong>Anestesia local y sin puntos.</strong></li>
                  <li style={{color: "black"}}>Recuperación <strong>rápida</strong>.</li>
                </ul>
               </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                  Lipoescultura
                </button>
              </h2>
              <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                La lipoescultura elimina adiposidades localizadas y redefine el cuerpo, eliminando grasa de áreas como papada, abdomen, flancos y muslos, mientras da forma a la cintura y glúteos.
                <br /><br />
                <ul>
                  <li style={{color: "black"}}>Realizada en quirófano de forma semi ambulatoria.</li>
                  <li style={{color: "black"}}>Uso de <strong>Renuvion y Lumiia</strong> para un resultado más integral.</li>
                  <li style={{color: "black"}}>Permite tratar varias zonas en un solo procedimiento (abdomen, espalda, piernas, brazos, etc.).</li>
                </ul>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                  Abdominoplastia
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
      <Footer/>
    </div>
  )
}
