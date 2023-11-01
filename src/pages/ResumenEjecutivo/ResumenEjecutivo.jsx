import React from 'react'
import '../ResumenEjecutivo/ResumenEjecutivo.css';
import logo from '../../assets/la-tata-1-2-1.png';
import img1 from '../../assets/section2.jpg';
import img2 from '../../assets/section3.jpg';



export default function ResumenEjecutivo() {
    return (
        <section className='container_RE'>
            <div className='fondo_RE'>
                <h1 className="titulo-resumen">Resumen Ejecutivo</h1>
            </div>
            <div className='parte1_RE'>
                <p className='texto-parte1'>La Tata SAS es una empresa fundada por María Cecilia Giraudo, Natalia Oyola y Noelia Carranza. <br/><br/>Su enfoque principal es brindar servicios de cuidado infantil confiable y de alta calidad, especialmente diseñados para atender las necesidades de padres con horarios laborales variables. <br/><br/>El público objetivo de La Tata se compone principalmente de padres y tutores de entre 25 y 45 años que residen en la ciudad de Río Cuarto. La empresa opera con un equipo compuesto por cuatro babysitters, con su oficina central ubicada en el centro de la ciudad.
                </p>
                <img src={logo} alt="logo La Tata" className='logo-RE'></img>
            </div>
            <div className='parte2_RE'>
                <img src={img1} alt="babysitter" className='img-tata'></img>
                <p className='texto-parte2'>Las actividades centrales de La Tata incluyen una cuidadosa selección y capacitación de cuidadores calificados, el desarrollo y mantenimiento de una aplicación móvil y una página web, la atención al cliente personalizada y la coordinación eficiente de servicios, estrategias de promoción y marketing, así como una gestión financiera y administrativa eficiente. Además, la empresa se compromete con un monitoreo continuo de la calidad del servicio y planea expandirse a nuevas áreas geográficas en el futuro.</p>
            </div>
            <div className='parte3_RE'>
                <p className='texto-parte3'>Para garantizar un servicio de alta calidad, La Tata implementa programas de capacitación continua y supervisión regular. La empresa también recopila la retroalimentación de los clientes para mejorar y ajustar los procesos de atención y cuidado. Además, establece protocolos estrictos de seguridad y protección para garantizar la integridad física y emocional de los niños a su cargo.</p>
                <img src={img2} alt="babysitter" className='img-tata'></img>
            </div>
        </section>
    )
}

