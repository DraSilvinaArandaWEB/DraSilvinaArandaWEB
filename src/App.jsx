import { useRef , useEffect} from 'react';
import './App.css'
import { Footer } from './components/footer/Footer'
import { Navbar } from './components/navbar/Navbar'
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import commentIcon from './assets/commentIcon.png'
import arrowIcon from './assets/arrowIcon.webp'
import instagramIcon from './assets/instagramIcon.png'
import whatsappIcon from './assets/whatsappIcon.png'
import Testimonios from './components/commentsInfo/comments.json'
import { Card } from './components/card/Card';

function App() {

  const refWhatsapp = useRef(null)

  useEffect(() => {
    AOS.init()
  }, [])

  document.body.style.overflowX = "hidden"

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
    <div className="app">
       <div className="socials-fixed">
          <a href="https://www.instagram.com/drasilvinaaranda/" target='blank'><img src={instagramIcon} alt="instagram icon"/></a>
          <a href="https://wa.me/5491137696614?text=Hola%20Dra%20Silvina%20!%20Quiero%20realizar%20una%20consulta%20,%20Gracias!"><img src={whatsappIcon} alt="whastapp icon" /></a>
          </div>
      <div className="whatsapp-fixed">
        <div className='whatsapp-message' ref={refWhatsapp}>
          <p>¡Hola! Agendá una cita hoy</p>
          <div className="right"></div>
        </div>
        <a href="https://wa.me/5491137696614?text=Hola%20Dra%20Silvina%20!%20Quiero%20realizar%20una%20consulta%20,%20Gracias!"><img src="https://cdn3.iconfinder.com/data/icons/2018-social-media-logotypes/1000/2018_social_media_popular_app_logo-whatsapp-256.png" alt="whatsapp icon" onMouseOver={() => animateWhatsapp()} onMouseLeave={() => outWhatsapp()}/></a>
      </div>
      {/* MAIN SECTION */}
      <div className="banner">
        <Navbar></Navbar>
        <div className="banner-main">
          <h1>Dra Silvina Aranda</h1>
          <div className="banner-main-2">
          <a href="https://wa.me/5491137696614?text=Hola%20Dra%20Silvina%20!%20Quiero%20realizar%20una%20consulta%20,%20Gracias!" className='agenda'>AGENDÁ TU CITA</a>
          <a href="#procedimientos" className='procedimientos'>PROCEDIMIENTOS</a>
          </div>
        </div>
      </div>
      {/* CONSULTORIO SECTION */}
      <section className='consultorio'>
        <div className='consultorio-container'>
          <div className="consultorio-img"></div>
          <div className="consultorio-info">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum illum qui laboriosam ipsam quaerat alias quia dolore aliquam neque facere laudantium nemo nihil officiis, possimus, quas, amet et quae mollitia? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit fugiat fuga porro delectus. Officiis vitae iusto libero, adipisci recusandae fugit enim magni soluta nesciunt nostrum, tempore culpa hic voluptate molestiae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam obcaecati inventore dolor commodi deleniti sapiente nam eum, quidem, sunt similique et consequuntur facilis. Explicabo et ipsa reprehenderit odio eligendi facere. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora corporis natus obcaecati suscipit optio accusamus accusantium iusto. Et, molestiae! Molestiae exercitationem.</p>
          </div>
        </div>
      </section>
      {/* ABOUT SECTION */}
      {/* WORKS SECTION */}
      <article className="works" id='work'>
        <div className="works-container">
          <h2>PROCEDIMIENTOS</h2>
          <p>MELA , Tratamientos CORPORALES y FACIALES</p>
          <div className="cards-container">
            <Link to={"./Mela"}>
              <div className="works-card" data-aos="fade-up">
                <div className="img-mela"></div>
                <div className="card-info">
                  <p>MELA</p>
                  <img src={arrowIcon} alt="arrow icon" />
                </div>
              </div>
            </Link>
            <Link to={"./Corporales"}>
              <div className="works-card" data-aos="fade-up">
              <div className="img-corporales"></div>
                <div className="card-info">
                  <p>CORPORALES</p>
                  <img src={arrowIcon} alt="arrow icon" />
                </div>
              </div>
            </Link>
            <Link to={"./Faciales"}>
              <div className="works-card" data-aos="fade-up">
              <div className="img-faciales"></div>
                <div className="card-info">
                  <p>FACIALES</p>
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
                <p>Contamos con formación médica especializada y experiencia garantizando tratamientos de alta calidad y resultados seguros</p>
              </div>
            </div>
            <div className="why-card" data-aos="zoom-in-up" data-aos-duration="1000">
              <h3 className="number">02</h3>
              <div className="info">
                <h3>Espacios diseñados para tu confort</h3>
                <p>Nuestro consultorio combina un ambiente cálido y profesional, asegurando que te sientas cómodo en cada etapa de tu transformación</p>

              </div>

            </div>
            <div className="why-card" data-aos="zoom-in-up" data-aos-duration="1000">
              <h3 className="number">03</h3>
              <div className="info">
                <h3>Reputación y confianza de nuestros pacientes</h3>
                <p>Testimonios positivos y resultados exitosos avalan nuestro compromiso con la satisfacción y felicidad de quienes nos eligen</p>
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
