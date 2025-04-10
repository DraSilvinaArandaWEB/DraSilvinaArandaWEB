import React from 'react'
import './Faciales.css'
import  { Navbar } from '../../components/navbar/Navbar'
import { Footer } from '../../components/footer/Footer'
import { Banner } from '../../components/banner/Banner'
import { useEffect , useRef , useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
import facialesImg from '../../assets/FACIALES.jpg'
import contactMobile from '../../assets/contactMobile.webp'

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
      <Banner title={"TRATAMIENTOS"} subtitle={"FACIALES"} img={useWindowWidth() <= 600 ? contactMobile : facialesImg}></Banner>
      <div className="container-faciales">
      <div className="faciales-info">
            <h2>TRATAMIENTOS</h2>
            <p>Faciales</p>
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
                  La bichectomía es una cirugía para eliminar la grasa de las bolsas de Bichat en las mejillas, logrando una apariencia facial más armoniosa.
                  <br /><br /><ul><li style={{color: "black"}}>Realizada en <strong>consultorio</strong> con <strong>anestesia local</strong>.</li><li style={{color: "black"}}><strong>Sin cicatrices</strong>, ya que se realiza por dentro de la mucosa oral.</li></ul>
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
                La blefaroplastia corrige los párpados caídos, elimina las bolsas de grasa y el exceso de piel en la zona ocular.
                <br /><br /><ul><li style={{color: "black"}}>Realizada con <strong>anestesia local</strong> y <strong>sedación ligera</strong>.</li><li style={{color: "black"}}>Recuperación <strong>rápida</strong> y <strong>prácticamente indolora</strong></li></ul>
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
                La rinoplastia es una cirugía estética que corrige deformidades de la nariz, mejorando su forma y función. Modifica las estructuras óseas y cartilaginosas para conseguir una apariencia más armónica y equilibrada con el resto del rostro.
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
                La armonización facial es un conjunto de tratamientos estéticos personalizados que realzan tus rasgos naturales mediante pequeñas modificaciones, suavizando imperfecciones y destacando lo mejor de tu fisionomía.
                <br /><br /><ul><li style={{color: "black"}}><strong>Métodos no quirúrgicos</strong>: ácido hialurónico, toxina botulínica, PRP, hidroxiapatita de calcio, ácido poliláctico.</li><li style={{color: "black"}}><strong>Combinación con procedimientos mínimamente invasivos</strong>: bichectomía, MELA facial o de papada, endolifting láser, para resultados más duraderos.</li></ul>
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
                Los hilos tensores son hilos finos utilizados en Medicina Estética para rejuvenecer el rostro, eliminando arrugas y flacidez. 
                También sirven para levantar las cejas y redefinir el óvalo facial y el contorno de la mandíbula.
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
                La toxina botulínica previene la formación de arrugas y líneas de expresión, y suaviza o elimina las ya existentes. 
                <br /><br /> Se aplica con microagujas en el consultorio, en aproximadamente 15 minutos.
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
                  El ácido hialurónico es una proteína natural que hidrata la piel y mejora el aspecto de arrugas y ojeras, logrando una apariencia más fresca y renovada.
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
      <Footer/>
    </div>
  )
}
