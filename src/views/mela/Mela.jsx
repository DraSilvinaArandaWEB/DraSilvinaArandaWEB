import React from 'react'
import './Mela.css'
import { Navbar } from '../../components/navbar/Navbar'
import { Footer } from '../../components/footer/Footer'
import { Banner } from '../../components/banner/Banner'
import { useEffect , useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Mela2 from '../../assets/MELA.jpg'

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
      <Banner title={"MELA"} subtitle={"Mini Extracción Lipídica Ambulatoria"} img={Mela2}></Banner>
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
                  En todas las zonas donde haya adiposidad localizada (papada, abdomen, flancos, cara externa o interna de las piernas, monte de venus, rodillas, periaxilar, espalda.
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
                  ¿Diferencia entre MELA LASER y MELA TRADICIONAL?
                </button>
              </h2>
              <div id="collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  Los pasos son muy similares en ambos, y en los 2 casos la grasa es extraída en iguales cantidades.
                  Durante la MELA láser agregamos un paso que es introducir la Cánula láser por el tejido adiposo y por la dermis. En lugar de extraer la grasa solamente por succión (MELA TRADICIONAL), con el láser producimos licuefacción de la misma. Eso hace que haya menos hematomas y una recuperación un más rápida. Además la liposucción o MELA se realiza de forma más homogénea.
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
                  Renuvion J- Plasma es el tratamiento más efectivo del momento para combatir de forma radical la flacidez de la piel.
                  Debido a la combinación de las propiedades únicas del Plasma de Helio frío y la energía de la radiofrecuencia, con Renuvion conseguimos reafirmar, retensar la piel de manera segura y permanente consiguiendo mejorar la flacidez hasta en un 70%, lo que lo convierte en el sistema más efectivo que existe actualmente para eliminar la flacidez en unas única sesión.
                  Renuvion actúa debajo de la piel en diferentes capas, para lograr el mejor resultado contra la flacidez.
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
      <Footer></Footer>
    </div>
  )
}
