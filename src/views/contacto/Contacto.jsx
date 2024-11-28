import React, { useRef , useState} from 'react'
import './Contacto.css'
import { Navbar } from '../../components/navbar/Navbar'
import { Footer } from '../../components/footer/Footer'
import { Banner } from '../../components/banner/Banner'
import ReCAPTCHA from "react-google-recaptcha";

export const Contacto = () => {

  const captcha = useRef(null)
  const [buttonText, setButtonText] = useState('ENVIAR');

  const onChange = () => {
    if (captcha.current.getValue()) {
      console.log("el usuario no es un robot")
    }
  }

  // const submit = (e) => {
  //   e.preventDefault(); // Prevenir el envío por defecto
  //   if (captcha.current.getValue()) {
  //     console.log("CAPTCHA resuelto. Enviando formulario...");
  //     e.target.submit(); // Enviar el formulario manualmente
  //   } else {
  //     console.log("CAPTCHA no resuelto. No se enviará el formulario.");
  //     alert("Por favor, resuelve el CAPTCHA antes de enviar el formulario.");
  //   }
  // }

  // const submit = async (e) => {
  //   e.preventDefault(); // Prevenir el comportamiento predeterminado

  //   if (captcha.current.getValue()) {
  //     console.log('CAPTCHA resuelto. Enviando formulario...');
  //     setButtonText('ENVIANDO...'); // Cambiar el texto del botón

  //     // Crear un objeto con los datos del formulario
  //     const formData = new FormData(e.target);

  //     try {
  //       const response = await fetch('https://formsubmit.co/frx.ros@gmail.com', {
  //         method: 'POST',
  //         body: formData,
  //       });

  //       if (response.ok) {
  //         alert('Formulario enviado exitosamente');
  //         e.target.reset(); // Limpiar el formulario
  //         captcha.current.reset(); // Reiniciar CAPTCHA
  //       } else {
  //         alert('Hubo un problema al enviar el formulario. Inténtalo nuevamente.');
  //       }
  //     } catch (error) {
  //       console.error('Error al enviar el formulario:', error);
  //       alert('Ocurrió un error. Por favor, inténtalo más tarde.');
  //     } finally {
  //       setButtonText('ENVIAR'); // Restablecer el texto del botón
  //     }
  //   } else {
  //     console.log('CAPTCHA no resuelto. No se enviará el formulario.');
  //     alert('Por favor, resuelve el CAPTCHA antes de enviar el formulario.');
  //   }
  // };

  return (
    <div>
      <div className="navbar-container">
      <Navbar></Navbar>
      </div>
      <Banner title={"CONTACTO"} subtitle={"Esperamos tu mensaje"}></Banner>
      <div className="contact-container">
        <div className="pink-line"></div>
        <form action="https://formsubmit.co/frx.ros@gmail.com" onSubmit={submit} method='POST'>
          <input type="hidden" name="_captcha" value="false"></input>
          <div className="container-1">
            <input type="text" name='nombre' placeholder='Nombre' required/>
            <input type="text" name='email' placeholder='Email' required/>
          </div>
          <div className="container-2">
            <input type="text" placeholder='Telefono' required/>
            <select name="asunto" id="asunto">
            <option value="consulta">CONSULTA</option>
            <option value="reserva">RESERVA</option>
            </select>
          </div>
          <textarea name="mensaje" id="mensaje" placeholder='Mensaje...' required></textarea>
          <div className="container-3">
            <div className="recaptcha">
              {window.innerWidth < 600 ? <ReCAPTCHA
                ref={captcha}
                sitekey="6Lc5RIwqAAAAAL4sppB4eTAELQaVlSxe6TF7z3b5"
                onChange={onChange}
                size='compact'
              /> : <ReCAPTCHA
              ref={captcha}
              sitekey="6Lc5RIwqAAAAAL4sppB4eTAELQaVlSxe6TF7z3b5"
              onChange={onChange}
              size='normal'
            />}
            </div>
            <button>{buttonText}</button>
          </div>
        </form>
        <div className="pink-line"></div>
        <div className="whatsapp">
          <p>Tambien podes contactarnos via Whatsapp</p>
          <a href="https://wa.me/5491137696614?text=Hola%20Dra%20Silvina%20!%20Quiero%20realizar%20una%20consulta%20,%20Gracias!"><button>WHATSAPP</button></a>
        </div>

      </div>
      <Footer></Footer>
    </div>
  )
}
