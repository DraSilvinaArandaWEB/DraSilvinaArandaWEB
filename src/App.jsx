import { useRef , useEffect , useState} from 'react';
import './App.css'
import { Footer } from './components/footer/Footer'
import { Navbar } from './components/navbar/Navbar'
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import arrowIcon from './assets/arrowIcon.webp'
import Testimonios from './components/commentsInfo/comments.json'
import { Card } from './components/card/Card';
import iconoFaciales from './assets/iconoFacial.png'
import iconoMela from './assets/iconoMela.png'
import iconoCorporales from './assets/iconoCorporales.png'
import mobileBackground from './assets/mobileBackground.webp'
import desktopBackground from './assets/testBackground.webp'

function App() {

  const refWhatsapp = useRef(null)

  useEffect(() => {
    AOS.init()
  }, [])

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
    <div className="app">
      <div className="whatsapp-fixed">
        <div className='whatsapp-message' ref={refWhatsapp}>
          <p>¡Hola! Agendá una cita hoy</p>
          <div className="right"></div>
        </div>
        <a href="https://wa.me/5491137696614?text=Hola%20Dra%20Silvina%20!%20Quiero%20realizar%20una%20consulta%20,%20Gracias!"><img src="https://cdn3.iconfinder.com/data/icons/2018-social-media-logotypes/1000/2018_social_media_popular_app_logo-whatsapp-256.png" alt="whatsapp icon" onMouseOver={() => animateWhatsapp()} onMouseLeave={() => outWhatsapp()}/></a>
      </div>
      {/* MAIN SECTION */}
      <div className="banner">
        <img src={useWindowWidth() <= 600 ? mobileBackground : desktopBackground} className='bg-img' alt="background" />
        <Navbar/>
      </div>
      {/* CONSULTORIO SECTION */}
      <section className='consultorio'>
        <div className='consultorio-container'>
          <div className="consultorio-img"></div>
          <div className="consultorio-info">
            <p>Bienvenidos! Soy la Dra. Silvina Aranda, Cirujana Estética. <br /><br />Si estás buscando mejorar tu apariencia y sentirte más seguro y confiado, ¡te invito a visitar mi consultorio!<br /><br />En un ambiente cálido y profesional, te ofreceremos una consulta personalizada para abordar tus inquietudes y objetivos estéticos. <br /><br /> Trabajaremos juntos para crear un plan de tratamiento personalizado que se adapte a tus necesidades. <br /><br />¡Te espero en mi consultorio!</p>
          </div>
        </div>
      </section>
      {/* WORKS SECTION */}
      <article className="works" id='work'>
        <div className="works-container">
          <h2>PROCEDIMIENTOS</h2>
          <p>Descubrí el tratamiento ideal para vos</p>
          <div className="cards-container">
            <Link to={"./Mela"}>
              <div className="works-card" data-aos="fade-up">
                <div className="img-mela">
                  <img src={iconoMela} alt="" />
                </div>
                <div className="card-info">
                  <p><b>MELA</b></p>
                  <img src={arrowIcon} alt="arrow icon" />
                </div>
              </div>
            </Link>
            <Link to={"./Corporales"}>
              <div className="works-card" data-aos="fade-up">
                <div className="img-corporales">
                  <img src={iconoCorporales} alt="" />
                </div>
                <div className="card-info">
                  <p>TRATAMIENTOS <b>CORPORALES</b></p>
                  <img src={arrowIcon} alt="arrow icon" />
                </div>
              </div>
            </Link>
            <Link to={"./Faciales"}>
              <div className="works-card" data-aos="fade-up">
              <div className="img-faciales">
                <img src={iconoFaciales} alt="" />
              </div>
                <div className="card-info">
                  <p>TRATAMIENTOS <b>FACIALES</b></p>
                  <img src={arrowIcon} alt="arrow icon" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </article>
      {/* TESTIMONIOS SECTION */}
      <section className='testimonios' id='testimonios'>
        <div className='testimonios-container'>
          <h2>NUESTROS PACIENTES NOS RECOMIENDAN</h2>
          <div className="cards-container">
            {Testimonios?.map((info) => {
              return <Card text={info.message} img={info.icon} date={info.date} name={info.name}/>
            })}  
          </div>
          <div className='button-container'>
          <a href="https://www.google.com.ar/maps/place/Dra.+Silvina+Aranda/@-34.5685261,-58.4457494,17z/data=!4m8!3m7!1s0x95bcb5e759714709:0x323e094ba81c917e!8m2!3d-34.5685305!4d-58.4431745!9m1!1b1!16s%2Fg%2F11t3v5z0lv?hl=es&entry=ttu&g_ep=EgoyMDI1MDMyMy4wIKXMDSoASAFQAw%3D%3D" target='blank'>DEJANOS TU RESEÑA</a>
          </div>
        </div>
      </section>
      {/* WHY SECTION */}
      <section className="why">
        <div className="why-container">
          <h2>¿POR QUÉ ELEGIRNOS?</h2>
          <div className="why-cards-container">
            <div className="why-card" data-aos="zoom-in-up" data-aos-duration="1000">
              <h3 className="number">01</h3>
              <div className="info">
                <h3>Excelencia profesional certificada</h3>
                <p>Contamos con formación médica especializada <br />y experiencia garantizando tratamientos de alta calidad <br />y resultados seguros.</p>
              </div>
            </div>
            <div className="why-card" data-aos="zoom-in-up" data-aos-duration="1000">
              <h3 className="number">02</h3>
              <div className="info">
                <h3>Espacios diseñados para tu confort</h3>
                <p>Nuestro consultorio combina un ambiente cálido y profesional, asegurando que te sientas cómodo en cada etapa de tu transformación.</p>
              </div>
            </div>
            <div className="why-card" data-aos="zoom-in-up" data-aos-duration="1000">
              <h3 className="number">03</h3>
              <div className="info">
                <h3>Reputación y confianza de nuestros pacientes</h3>
                <p>Testimonios positivos <br />y resultados exitosos avalan nuestro compromiso con la satisfacción y felicidad de quienes nos eligen.</p>
              </div>
            </div>
            </div>
        </div>
      </section>
      {/* RESERVATION SECTION */}
      <div className="reservation">
        <div className="reservation-info">
          <h2>AGENDÁ TU CITA</h2>
          <p>¡Encontrá el cambio que buscás con nosotros!</p>
          <a href="https://wa.me/5491137696614?text=Hola%20Dra%20Silvina%20!%20Quiero%20realizar%20una%20consulta%20,%20Gracias!">AGENDÁ TU CITA</a>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default App
