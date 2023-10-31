import React from 'react';
import './PlanEstrategico.css';
import personas from '../../assets/personas-unidas.png';
import FODA from '../../assets/FODA.png';
import sonrisa from '../../assets/sonrisa3.png';
import imgmision from '../../assets/mision.jpg';
import valores1 from '../../assets/valores-1.png';
import valores2 from '../../assets/valores-2.png';
import target from '../../assets/target.jfif';
import target1 from '../../assets/factoresfinal.png';
import estrategia from '../../assets/section4.jpg';
import estrategiaFO from '../../assets/section3.jpg';

function PlanEstrategico() {
    return (
        <section className='PlanEstrategico'>
            <div className='descripcion__plan__estrategico'>
                <h1 className='titulo' style={{ margin: '0', padding: '500px 0 0 120px', color: 'white', fontSize: '5rem' }}>Plan estratégico</h1>
            </div>
            <div className='descripcion__texto'>
                <p style={{ width: '100%', padding: '0', margin: 0 }}>Aquí es donde trazamos el rumbo para alcanzar nuestras metas y cumplir con nuestra visión de ser líderes en el mercado de cuidado infantil confiable y flexible. Reconocemos que en un mundo en constante transformación, la planificación estratégica es fundamental para el éxito sostenible de nuestra empresa.</p>
                <img src={personas} alt='personas unidas' className="img_personas"></img>
            </div>
            <div className='container__foda'>
                <img src={FODA} alt="FODA empresarial" className='FODA'></img>
            </div>
            <div className='container__vision'>
                <div className='vision__texto'>
                    <h1 className='titulo' style={{ margin: '0' }}>Visión</h1>
                    <p>Ser el líder en el mercado regional ofreciendo una solución innovadora y confiable para el cuidado de niños en el hogar.</p>
                </div>
                <img src={sonrisa} className='vision__icono'></img>
            </div>
            <div className='container__mision'>
                <h1 className='titulo' style={{margin:0, paddingLeft:'300px'}}>Misión</h1>
                <div className='mision'>
                    <p className='texto_mision'>Proporcionar un servicio de cuidado de niños en el hogar a través de una aplicación, que ofrece un acceso innovador, cómodo y práctico de contratación simple, proporcionando perfiles de babysitters calificados, que brindan un servicio seguro y de calidad para que los papás encuentren  tranquilidad y seguridad en nuestro servicio sabiendo que sus hijos estarán en buenas manos mientras están ausentes.</p>
                    <img src={imgmision} className='img_mision'></img>
                </div>
            </div>
            <div style={{ backgroundColor: 'rgb(205, 226, 236)' }}>
                <h1 className='titulo' style={{ margin: '0', padding: '40px 0', textAlign: 'center' }}>Objetivos Estratégicos</h1>
                <div className='container__objE'>
                    <div className='cajas_obj'>
                        <h1 className='cajas__numeros'>1.</h1>
                        <p className='cajas__texto'>Personalizar las preferencias de cuidado y encontrar cuidadoras que se adapten a sus necesidades específicas.</p>
                    </div>
                    <div className='cajas_obj'>
                        <h1 className='cajas__numeros'>2.</h1>
                        <p className='cajas__texto'>Implementar un sistema de calificaciones y reseñas que permita a las familias para evaluar la calidad del servicio.</p>
                    </div>
                    <div className='cajas_obj'>
                        <h1 className='cajas__numeros'>3.</h1>
                        <p className='cajas__texto'>Incentivar a las familias a dejar reseñas detalladas al finalizar cada servicio.</p>
                    </div>
                    <div className='cajas_obj'>
                        <h1 className='cajas__numeros'>4.</h1>
                        <p className='cajas__texto'>Incentivar a las familias a dejar reseñas detalladas al finalizar cada servicio.</p>
                    </div>
                    <div className='cajas_obj'>
                        <h1 className='cajas__numeros'>5.</h1>
                        <p className='cajas__texto'>Desarrollar campañas de sensibilización para resaltar los desafíos de los padres trabajadores.</p>
                    </div>
                    <div className='cajas_obj'>
                        <h1 className='cajas__numeros'>6.</h1>
                        <p className='cajas__texto'>Destacar las babysitters con altas calificaciones, tanto en la plataforma como en las redes sociales.</p>
                    </div>
                    <div className='cajas_obj'>
                        <h1 className='cajas__numeros'>7.</h1>
                        <p className='cajas__texto'>Organizar eventos y talleres en línea que aborden temas como el equilibrio entre el trabajo y la vida familiar.</p>
                    </div>
                    <div className='cajas_obj'>
                        <h1 className='cajas__numeros'>8.</h1>
                        <p className='cajas__texto'>Colaborar con empresas que apoyen a los padres trabajadores y ofrezcan servicios o beneficios complementarios.</p>
                    </div>
                </div>
            </div>
            <div style={{ backgroundColor: 'rgb(215, 234, 243)' }}>
                <h1 className='titulo' style={{ margin: '0', padding: '40px 0', textAlign: 'center' }}>Objetivos Operativos de mediano plazo</h1>
                <div className='container__objE'>
                    <div className='cajas_obj2'>
                        <h1 className='cajas__numeros'>1.</h1>
                        <p className='cajas__texto'><b>Aumentar la Cobertura Geográfica: </b><br />Expandir al menos tres ciudades adicionales en un plazo de 3 años.</p>
                    </div>
                    <div className='cajas_obj2'>
                        <h1 className='cajas__numeros'>2.</h1>
                        <p className='cajas__texto'><b>Mejorar la Retención de Clientes:</b> Aumentar la tasa de retención de clientes en un 20% en los próximos 4 años a través de programas de fidelización.</p>
                    </div>
                    <div className='cajas_obj2'>
                        <h1 className='cajas__numeros'>3.</h1>
                        <p className='cajas__texto'><b>Diversificar los Servicios:</b><br />Introducir un nuevo servicio relacionado, como tutoría en línea para niños en edad escolar, dentro de los próximos 2 años.
                        </p>
                    </div>
                    <div className='cajas_obj2'>
                        <h1 className='cajas__numeros'>4.</h1>
                        <p className='cajas__texto'><b>Desarrollar Alianzas Estratégicas:</b><br />Establecer colaboraciones con al menos dos empresas líderes en el sector de la educación en los próximos 3 años para aumentar la visibilidad de la marca.
                        </p>
                    </div>
                </div>
                <h1 className='titulo' style={{ margin: '0', padding: '40px 0', textAlign: 'center' }}>Objetivos Operativos de largo plazo</h1>
                <div className='container__objE' >
                    <div className='cajas_obj2'>
                        <h1 className='cajas__numeros'>1.</h1>
                        <p className='cajas__texto'><b>Innovación Tecnológica:</b><br />Implementar nuevas tecnologías avanzadas para mejorar la eficiencia de las operaciones y la experiencia del cliente en un plazo de 5 años.
                        </p>
                    </div>
                    <div className='cajas_obj2' >
                        <h1 className='cajas__numeros'>2.</h1>
                        <p className='cajas__texto'><b>Responsabilidad Social Corporativa:</b><br />Comprometerse a donar un porcentaje de las ganancias a organizaciones benéficas relacionadas con la infancia y el bienestar infantil regional.
                        </p>
                    </div>
                    <div className='cajas_obj2'>
                        <h1 className='cajas__numeros'>3.</h1>
                        <p className='cajas__texto'><b>Crecimiento Sostenible:</b><br />Mantener un crecimiento anual sostenible del 15% durante los próximos 8 años, manteniendo un equilibrio entre la expansión y la calidad del servicio.
                        </p>
                    </div>
                    <div className='cajas_obj2'>
                        <h1 className='cajas__numeros'>4.</h1>
                        <p className='cajas__texto'><b>Calidad y Formación:</b><br /> Implementar un programa de formación y desarrollo continuo para los cuidadores, buscando obtener una calificación de satisfacción del cliente del 95% o más en un plazo de 6 años.
                        </p>
                    </div>
                </div>
            </div>
            <div className='container_valores'>
                <h1 className='titulo' style={{ margin: '0', paddingBottom: '20px', textAlign: 'center' }}>Valores empresariales</h1>
                <div className='valores_empresariales'>
                    <img src={valores1} alt="valores empresariales" className='img_valores'></img>
                    <img src={valores2} alt="valores empresariales" className='img_valores'></img>
                </div>
            </div>
            <div className='container_target'>
                <h1 className='titulo' style={{ margin: '0', paddingBottom: '20px', textAlign: 'center' }}>Características del target del consumidor</h1>
                <div className='box_target'>
                    <img src={target} alt='babysitter haciendo yoga' className='img_target'></img>
                    <p style={{ fontSize: '1.7rem', width: '450px', hyphens: 'auto', textAlign: 'justify' }}>El target del consumidor está compuesto por padres y tutores entre 24 a 45 años, de la Ciudad de Río Cuarto, que necesitan una solución confiable para el cuidado de sus hijos en situaciones de urgencia, especialmente cuando trabajan en turnos rotativos o en horarios nocturnos. <br /> <br />Este grupo valora la experiencia de los cuidadores, la comodidad de tener al cuidador en el hogar y la confianza en las recomendaciones personales. Están dispuestos a pagar un precio razonable por un servicio de calidad que satisfaga sus necesidades de cuidado infantil en momentos críticos.
                    </p>
                </div>
            </div>
            <div className='container_factorestarget'>
                <h1 className='titulo' style={{ margin: '0', paddingBottom: '20px', textAlign: 'center' }}>Factores del target del consumidor</h1>
                <div className='img_factorestarget'>
                    <img src={target1} alt="factores del target del consumidor" style={{ width: '100%' }}></img>
                </div>
            </div>
            <div className='container_motivacion'>
                <div>
                    <h1 className='titulo' style={{ margin: '0', padding: '40px 0', textAlign: 'center' }}>¿Cómo motivar al cliente de la empresa?</h1>
                    <div className='container__motivar'>
                        <div className='cajas_motiv'>
                            <h1 className='cajas__numeros2'>1.</h1>
                            <p className='cajas_texto2'><b>Ofrecer un Servicio Confiable y de Calidad</b><br /></p>
                        </div>
                        <div className='cajas_motiv'>
                            <h1 className='cajas__numeros2'>2.</h1>
                            <p className='cajas_texto2'><b>Transparencia y Comunicación Clara</b></p>
                        </div>
                        <div className='cajas_motiv'>
                            <h1 className='cajas__numeros2'>3.</h1>
                            <p className='cajas_texto2'><b> Sistema de Calificaciones y Reseñas Efectivo</b><br /></p>
                        </div>
                        <div className='cajas_motiv'>
                            <h1 className='cajas__numeros2'>4.</h1>
                            <p className='cajas_texto2'><b>Ofrecer Incentivos y Recompensas</b><br />
                            </p>
                        </div>
                        <div className='cajas_motiv'>
                            <h1 className='cajas__numeros2'>5.</h1>
                            <p className='cajas_texto2'><b> Personalización del Servicio</b><br /></p>
                        </div>
                        <div className='cajas_motiv'>
                            <h1 className='cajas__numeros2'>6.</h1>
                            <p className='cajas_texto2'><b>Campañas de Sensibilización</b><br /></p>
                        </div>
                        <div className='cajas_motiv' >
                            <h1 className='cajas__numeros2'>7.</h1>
                            <p className='cajas_texto2'><b>Experiencia Positiva del Cliente</b><br /></p>
                        </div>
                        <div className='cajas_motiv'>
                            <h1 className='cajas__numeros2'>8.</h1>
                            <p className='cajas_texto2'><b>Acceso Fácil a la Plataforma y Aplicación</b><br />
                            </p>
                        </div>
                        <div className='cajas_motiv'>
                            <h1 className='cajas__numeros2'>9.</h1>
                            <p className='cajas_texto2'><b>Promoción de Eventos y Talleres</b><br /></p>
                        </div>
                        <div className='cajas_motiv'>
                            <h1 className='cajas__numeros2'>10.</h1>
                            <p className='cajas_texto2'><b>Participación Activa en la Comunidad</b></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container_estrategia'>
                <h1 className='titulo' style={{ textAlign: 'center', padding: '10px', margin: '0' }}>Estrategia de negocio</h1>
                <div className='estrategia_dif'>
                    <p style={{ fontSize: '1.5rem', width: '550px' }}>La Tata se diferenciará en el mercado a través de una estrategia centrada en resaltar su seguridad, confianza y comodidad excepcionales para el cuidado infantil en situaciones de emergencia. <br /><br />La plataforma permitirá a los usuarios seleccionar cuidadores a través de una aplicación, asegurando la conveniencia y tranquilidad del cliente. <br /><br />La marca se construirá en torno a una identidad sólida, destacando la experiencia y capacitación de los cuidadores. Además, se enfocará en ofrecer una experiencia excepcional para los clientes, desde la facilidad de uso de la aplicación hasta la calidad del servicio proporcionado. <br /><br />La innovación continua también será un enfoque, con la introducción de nuevos servicios y mejoras tecnológicas para mejorar la experiencia del cliente.</p>
                    <img src={estrategia} alt="babysitter" className='estrategia_img'></img>
                </div>
            </div>
            <div className='container_estrategiaFO'>
                <h1 className='titulo' style={{ textAlign: 'center', padding: '10px', margin: '0' }}>Estrategia de Diferenciación Reforzada según FODA</h1>
                <h2 className='subtitulo' style={{ textAlign: 'center', padding: '30px', margin: '0', fontSize: '2.5rem' }}>Enfoque según las fortalezas y las oportunidades (FO) </h2>
                <div className='estrategiaFO'>
                    <p style={{ fontSize: '1.5rem', width: '550px' }}>Nuestra estrategia se basa en capitalizar las fortalezas y oportunidades, centrándonos en la innovación y el crecimiento sostenible.<br /><br />Esto implica el desarrollo de servicios personalizados y flexibles para las familias, la mejora continua de nuestra plataforma digital, y la creación de alianzas estratégicas con instituciones educativas y organizaciones de crianza. <br /><br />Para fomentar la fidelización de clientes, implementaremos un programa de recompensas y enfocaremos recursos en investigación y desarrollo continuo para mantenernos a la vanguardia en educación infantil. Esto asegurará la satisfacción del cliente y fortalecerá nuestra posición en el mercado a largo plazo.</p>
                    <img src={estrategiaFO} alt="babysitter" className='estrategia_img'></img>
                </div>
            </div>
            <div className='container_conclusion'>
                    <h1 className='titulo' style={{ margin: '0', color: 'black', fontSize: '4rem', textAlign: 'start' }}>Conclusión</h1>
                    <div className='resumen_texto'>
                        <p style={{ fontSize: '1.3rem' }}>"La Tata" surge como respuesta a la falta de cuidadores de niños en situaciones de emergencia, detectada a través de una encuesta en línea que reveló la disposición del público objetivo a pagar por un servicio de calidad. <br/><br/>La empresa se propone ser líder en el mercado regional a través de una aplicación que ofrece un acceso innovador y práctico al cuidado de niños. <br/><br/>Su estrategia de diferenciación se basa en la calidad del servicio, la tecnología innovadora y la capacitación rigurosa de las babysitters. Además, se compromete a fomentar la transparencia, la comunicación clara y una experiencia positiva para el cliente mediante la personalización del servicio y la participación activa en la comunidad.</p>
                        <img src='' alt="imagen ilustrativa de la aplicación" style={{ width: '40%' }}></img>
                    </div>
                </div>
        </section >
    )
}

export default PlanEstrategico

