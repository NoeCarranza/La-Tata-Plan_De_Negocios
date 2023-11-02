import React from "react";
import './plandenegocios.css'
import personas from '../../assets/personas-unidas.png';
import logo from '../../assets/sonrisa-2.png'
import cuerpo1 from '../../assets/plan_de_negocios_descripcion_1.png';
import cuerpo2 from '../../assets/plan_de_negocios_descripcion_2.png';
import imagenfinal from '../../assets/winter hamilton.jfif';

function PlanDeNegocios() {
    return (
        <section className="container_plandenegocios">
            <div className="descripción_plan_negocios">
                <h1 className="titulo-pn">Plan de negocios</h1>
            </div>
            <div className="descripcion_texto">
                <p className="textopn-1">En este plan de negocios, presentaremos una visión detallada de nuestra empresa, incluyendo nuestras metas y objetivos, estrategias para el crecimiento y la diferenciación en el mercado, así como nuestros planes para brindar un servicio excepcional y valor agregado a las familias que confían en nosotros para el cuidado de sus preciosos seres. <br/><br/>Con un enfoque en la calidad, la seguridad y la excelencia en el cuidado infantil, estamos comprometidos a establecer "La Tata" como una referencia de confianza y excelencia en el sector del cuidado infantil en nuestra comunidad y más allá. </p>
                <img src={personas} alt="todos juntos" className="img_personas"></img>
            </div>
            <div className="descripcion__tata">
                <p className="textopn-2">La Tata surge como respuesta a esta necesidad, comprometida a ofrecer a los padres soluciones confiables para el cuidado de sus hijos.

                    Nos adaptamos a las necesidades, ofreciendo flexibilidad horaria y cuidado en situaciones de emergencia.</p>
                <img src={logo} alt="logo la tata" className="logo-la-tata"></img>
            </div>
            <div className="descripcion_dupla">
                <div className="cuadros">
                    <img src={cuerpo1} className="img_cuerpo" alt="logo la tata"></img>
                    <p className="textopn-3"> Nuestra empresa se fundamenta en la premisa de la excelencia en el servicio, utilizando tecnología innovadora para simplificar la contratación de cuidadores y brindar comodidad a nuestros clientes. </p>
                </div>
                <div className="cuadros">
                    <img src={cuerpo2} className="img_cuerpo" alt="logo la tata"></img>
                    <p className="textopn-3">Nos enorgullece contar con un equipo altamente calificado y cuidadosamente seleccionado de cuidadores, cuyo profesionalismo y dedicación garantizan un trato amoroso y seguro hacia los niños. </p>
                </div>
            </div>
            <div className="descripcion_final">
                <img src={imagenfinal} alt="La Tata" className="img_cuerpo2" style={{width: '31%'}}></img>
                <p className="textopn-4">
                Este plan de negocios detalla nuestra estrategia para destacar en un mercado en constante crecimiento.

A través de esta estrategia, aspiramos a consolidarnos como líderes en el cuidado infantil flexible y confiable, con una presencia que se expande geográficamente para satisfacer las necesidades de los padres en distintas comunidades y regiones.

Acompáñenos en este recorrido para descubrir cómo "La Tata" se posicionará como el referente en cuidado infantil y marcará la diferencia en la vida de las familias modernas.
                </p>
            </div>

        </section>
    )
}

export default PlanDeNegocios