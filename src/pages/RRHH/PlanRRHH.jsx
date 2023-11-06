import React from "react";
import "../RRHH/PlanRRHH.css";
import organigrama from "../../assets/organigrama-tata.png";
import cdetrab from "../../assets/cde-trabajador.png";
import cdeemp from "../../assets/cde-empleador.png";
import puestoby from "../../assets/puesto-babysitter.png";
import puestocm from "../../assets/puesto-cm.png";
import incentivos from "../../assets/incentivos.png";
import hysbby from "../../assets/hys-bby.png";
import hysbby2 from "../../assets/hys-bby2.png";
import hysoff from "../../assets/hys-oficina.png";
import capbby from "../../assets/cap-bby-1.png";
import capbby2 from "../../assets/cap-bby-2.png";
import capbby3 from "../../assets/cap-bby-3.png";
import capcm from "../../assets/cap-cm.png";
import capcm2 from "../../assets/cap-cm2.png";
import capcm3 from "../../assets/cap-cm3.png";
import capcm4 from "../../assets/cap-cm4.png";

function PlanRRHH() {
  return (
    <section>
      <div className="container_encabezado">
        <h1 className="titulo-pe">Plan de Recursos Humanos</h1>
      </div>
      <div className="container-intro">
        <h1 className="titulo-intro">Introducción</h1>
        <p className="texto_intro">¿Cómo hace la función de recursos humanos para tomar la materia prima que constituyen las personas y convertirla en ese recurso capitalizable que aporta valor a la empresa?</p>
      </div>
      <div className="vision_RRHH">
        <h1 className="titulo-intro">
          Visión
        </h1>
          <p className="texto_intro">
            Ser el líder en el mercado regional ofreciendo una solución
            innovadora y confiable para el cuidado de niños en el hogar.
          </p>
      </div>
      <div className="mision_RRHH">
        <h1 className="titulo-intro">Misión</h1>
          <p className="texto_intro">
            Proporcionar un servicio de cuidado de niños en el hogar a través de
            una aplicación, que ofrece un acceso innovador, cómodo y práctico de
            contratación simple, proporcionando perfiles de babysitters
            calificados, que brindan un servicio seguro y de calidad para que
            los papás encuentren tranquilidad y seguridad en nuestro servicio
            sabiendo que sus hijos estarán en buenas manos mientras están
            ausentes.
          </p>
      </div>
      <div className="container-objetivos">
        <h1 className="titulo-intro">Objetivos</h1>
        <div className="cajas_objetivos">
        <h1 className='titulo-p'>Corto Plazo</h1>
        <p className="texto_intro">Que en el lapso de un año en nuestra ciudad, sea conocido el servicio que brindamos.</p>
        </div>
        <div className="cajas_objetivos">
        <h1 className='titulo-p'>Largo Plazo</h1>
        <p className="texto_intro">Que nuestro servicio sea conocido y pueda prestarse en toda la Argentina.</p>
      </div>
      </div>
      <div className="organigrama">
        <h1 className="titulo-intro">Nuestro organigrama</h1>
        <img
          className="img-organigrama"
          src={organigrama}
          alt="organigrama de la empres"
        ></img>
      </div>
      <div className="container-cde">
        <h1 className="titulo-mision">Códigos de ética</h1>
        <div className="cde-trab">
          <img
            src={cdetrab}
            alt="codigo de etica del trabajador"
            className="img-cde"
          ></img>
          <img
            src={cdeemp}
            alt="codigo de etica del empleador"
            className="img-cde2"
          ></img>
        </div>
      </div>
      <div className="container-puestos">
        <h1 className="titulo-mision">Puestos</h1>
        <div className="puestos-descrip">
          <img src={puestoby} alt="responsabilidades puestos babysitter" className="img-puestos"></img>
          <img src={puestocm} alt="responsabilidades puestos cm" className="img-puestos"></img>
        </div>
      </div>
      <div className="container-incentivos">
        <h1 className="titulo-mision">Incentivos</h1>
        <div className="div_incentivos">
          <img
            src={incentivos}
            alt="incentivos"
            className="img-incentivos"
          ></img>
        </div>
      </div>
      <div className="container-hys">
        <h1 className="titulo-mision">Higiene y seguridad</h1>
        <div className="hys-tipos">
          <img
            src={hysbby}
            alt="higiene y seguridad de las babysitters"
            className="img-hysb"
          ></img>
          <img
            src={hysbby2}
            alt="higiene y seguridad de las babysitters"
            className="img-hysb2"
          ></img>
        </div>
        <img
          src={hysoff}
          alt="higiene y seguridad en la oficina"
          className="img-hyso"
        ></img>
      </div>
      <div className="container-capacitaciones">
        <h1 className="titulo-mision">Desarrollo de carrera</h1>
        <h2 className="subtitulo-cap">Capacitaciones Babysitters</h2>
        <div className="capacitacion-bby">
          <img
            src={capbby}
            alt="capacitaciones babysitter"
            className="img-cap-bby"
          ></img>
          <img
            src={capbby2}
            alt="capacitaciones babysitter"
            className="img-cap-bby"
          ></img>
          <img
            src={capbby3}
            alt="capacitaciones babysitter"
            className="img-cap-bby"
          ></img>
        </div>
        <h2 className="subtitulo-cap">Capacitaciones Community manager</h2>
        <div className="capacitacion-cm">
          <img
            src={capcm}
            alt="capacitaciones community manager"
            className="img-cap-cm2"
          ></img>
          <img
            src={capcm2}
            alt="capacitaciones community manager"
            className="img-cap-cm"
          ></img>
          <img
            src={capcm3}
            alt="capacitaciones community manager"
            className="img-cap-cm"
          ></img>
          <img
            src={capcm4}
            alt="capacitaciones community manager"
            className="img-cap-cm2"
          ></img>
        </div>
      </div>
      <div className="container-conclusiones">
        <h1 className="titulo-mision">Conclusiones</h1>
        <p className="texto-target" style={{textAlign:'justify', hyphens:'auto'}}> Los humanos podemos, realmente convertirnos en ventaja competitiva, ser el valor agregado de la organización. Somos un recurso escaso difícil de imitar e imperfectamente sustituibles,  así como peculiares, diversos complejos y difíciles de gestionar. El futuro de la función de recursos humanos está en reconocer, potenciar y capitalizar esta identidad entendiendo al ser humano de manera sistémica.</p>
      </div>
    </section>
  );
}

export default PlanRRHH;
