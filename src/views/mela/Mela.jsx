import React from 'react'
import './Mela.css'
import { Navbar } from '../../components/navbar/Navbar'
import { Footer } from '../../components/footer/Footer'
import { Banner } from '../../components/banner/Banner'
import { useEffect , useRef , useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Mela2 from '../../assets/melaBanner.png'
import melaMobile from '../../assets/melaMobile.png'

export const Mela = () => {

  const refWhatsapp = useRef(null)
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/Mela') {
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
      <Banner title={"MELA"} subtitle={"Mini Extracción Lipídica Ambulatoria"} img={useWindowWidth() <= 600 ? melaMobile : Mela2}></Banner>
      <div className="container-mela">
      <div className="mela-info">
            <h2>MELA</h2>
            <p>Mini Extracción Lipídica Ambulatoria</p>
        </div>
        {/* <div className="pink-line"></div> */}
        <p className='about-info'>La mini liposucción o MELA es un procedimiento mínimamente invasivo, ideal para aquellos pacientes que quieren disminuir adiposidades localizadas que no logran reducirse con ejercicio, y que quieren ver resultados inmediatos. <br /><br />(Se puede hacer con Láser Lumiia y con Renuvion J Plasma).
        </p>
        <div className="pictures-container">
          <div className="picture-card"></div>
          <div className="picture-card"></div>
          <div className="picture-card"></div>
        </div>
        <div className="accordion-container">
          <h2 className='title'>Preguntas Frecuentes</h2>
          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                  ¿En qué zonas puede realizarse?
                </button>
              </h2>
              <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  En todas las zonas donde haya adiposidad localizada (papada, abdomen, flancos, cara externa o interna de las piernas, monte de venus, rodillas, periaxilar, espalda).
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  ¿Quedo internado luego del procedimiento?
                </button>
              </h2>
              <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  El procedimiento se realiza de forma ambulatoria. Es decir que ni bien se termina de realizar te retiras normalmente.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  ¿Cómo es el post operatorio?
                </button>
              </h2>
              <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  Al terminar el procedimiento podrás volver a tu casa y el periodo de recuperación es corto. Se debe usar una faja y se realizan masajes para la inflamación (drenaje linfático).
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                  ¿Qué tipo de anestesia se utiliza?
                </button>
              </h2>
              <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  Anestesia local.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                  ¿Quiénes son los pacientes para realizarse este tratamiento?
                </button>
              </h2>
              <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  Está indicado tanto en hombres como en  mujeres, que tengan adiposidad localizada con flacidez leve o moderada.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                  Diferencia entre MELA LASER y MELA TRADICIONAL
                </button>
              </h2>
              <div id="collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <strong>Proceso similar</strong> en ambos, con la misma cantidad de grasa extraída. <br /><br />
                  <ul><li style={{color: "black"}}><strong>MELA Láser:</strong><br />Se utiliza una cánula láser que licúa la grasa. <br />Menos hematomas y recuperación más rápida. <br />Liposucción más homogénea.</li>
                  <li style={{color: "black"}}><strong>MELA Tradicional:</strong><br />La grasa se extrae solo por succión.</li></ul>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                  ¿Qué es MELA Renuvion?
                </button>
              </h2>
              <div id="collapseSeven" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                Renuvion J-Plasma es actualmente el tratamiento más efectivo para combatir la flacidez de la piel. Su combinación única de <strong>plasma de Helio frío y energía de radiofrecuencia</strong> permite obtener resultados excepcionales.
                <br /><br />
                <ul><li style={{color: "black"}}><strong>Reafirma y retensa la piel</strong> de manera segura y permanente</li>
                <li style={{color: "black"}}><strong>Mejora la flacidez</strong>hasta en un <strong>70%</strong> en una sola sesión.</li>
                <li style={{color: "black"}}><strong>Reafirma y retensa la piel</strong> de manera segura y permanente</li></ul>
                Este tratamiento es el más avanzado para eliminar la flacidez de forma eficaz en poco tiempo. 
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mela-next">
          <Link to={"/Corporales"}>Corporales</Link>
          <Link to={"/Faciales"}>Faciales</Link>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
