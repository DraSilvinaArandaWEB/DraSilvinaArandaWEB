import React from 'react'
import './Corporales.css'
import { Navbar } from '../../components/navbar/Navbar'
import { Banner } from '../../components/banner/Banner'
import { Footer } from '../../components/footer/Footer'
import { useEffect } from 'react'

export const Corporales = () => {

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

  return (
    <div>
      <div className="navbar-container">
      <Navbar></Navbar>
      </div>
      <Banner title={"TRATAMIENTOS"} subtitle={"Corporales"}></Banner>
      <div className="container-corporales">
        <div className="pink-line"></div>
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
                  La mamoplastia de aumento se hace para incrementar el tamaño de las mamas. También se puede hacer para cambiar la forma de los senos o para corregir defectos de nacimiento (deformidad congénita). Existen distintos abordajes para esta cirugía (puede realizarse el abordaje por via submamaria, periareolar o axilar), distintos planos en los que puede colocarse el implante (retroglandular, retropectoral o dualplane) como tambien distintos tamaños y tipos de prótesis. En la consulta decidiremos juntas cual es el abordaje, el plano y el tipo de protesis mas adecuado para cada paciente.
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
                  La pexia mamaria (mastopexia o levantamiento de busto) es un procedimiento quirúrgico destinado a corregir la posición y mejorar el aspecto general de las mamas. Se puede realizar con o sin implantes mamarios segun se quiera aumentar o no el volumen de las mamas. Hay muchas formas diferentes de realizar una pexia mamaria, y eso determinará que tipo de cicatriz quede finalmente (periareolar, vertical, en T invertida). Segun la caida de las mamas y el volumen, determinaremos cual es la incisión mas adecuada para cada paciente.
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
                  Nos permite definir y adelgazar zonas de adiposidad localizada (papada, abdomen, flancos, muslos) además de dar forma a la cintura, al glúteo y al abdomen. Se realiza en quirófano, de forma semi ambulatoria, con Renuvion y con Lumiia. La diferencia respecto a MELA es que se puede trabajar integralmente en varias zonas del cuerpo a la vez, logrando en un unico procedimiento eliminar la grasa de varias zonas (abdomen y espalda completos, piernas, brazos, etc)

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
                  La abdominoplastia es un procedimiento quirúrgico de reconstrucción de la pared abdominal, que consta de eliminación del exceso de piel, del exceso de grasa y la tensión de los músculos de la pared abdominal con el objetivo final de remodelar el abdomen, la cintura y la forma del tronco del cuerpo.​ Se realiza en quirofano, con anestesia general. Se utiliza también tecnologia Renuvion y Lumiia. En general el paciente queda internado el primer dia para un mayor confort.
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      <Footer></Footer>

    </div>
  )
}
