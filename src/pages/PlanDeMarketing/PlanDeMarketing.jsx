import React from 'react';
import '../PlanDeMarketing/PlanDeMarketing.css';
import ciclo from '../../assets/ciclo-reciclo.png';
import nombre from '../../assets/logo.png';
import logo1 from '../../assets/la-tata-1-2.png';
import logo2 from '../../assets/tata-2-2.png';
import logo3 from '../../assets/CUADRADITOS.png';
import estrategias from '../../assets/postventa.png';
import app from '../../assets/celus.png';

export default function PlanDeMarketing() {
    return (
        <section>
            <div className='container_section1'>
                <h1 className='titulo-section1'>Plan De Marketing</h1>
            </div>
            <div className='p'>
                <h1 className='titulo-p'>1.</h1>
                <h1 className='titulo-p'>Producto</h1>
            </div>
            <div className='1-producto'>
                <div className='container_producto'>
                    <h1 className='titulo-mision'>Niveles del producto</h1>
                    <div className='cajas_producto'>
                        <div className='cajas_producto_individual'>
                            <h1 className='cajas__numeros2'>1.</h1>
                            <h1 className='titulo_cajas'>Beneficio Básico</h1>
                            <p className='parrafo_cajas'>  Se ofrece un servicio de cuidado infantil, con babysitters calificadas, que proporciona tranquilidad y seguridad a los clientes <br />al asegurar que sus hijos estén en buenas manos, en su hogar,durante situaciones de emergencia.</p>
                        </div>
                        <div className='cajas_producto_individual'>
                            <h1 className='cajas__numeros2'>2.</h1>
                            <h1 className='titulo_cajas'>Producto Esperado</h1>
                            <p className='parrafo_cajas'>Nuestros clientes esperan no solo cuidadores calificados y amigables, sino también un servicio que incluye:<br /> la puntualidad, <br /> la confiabilidad, y <br /> el respeto por las necesidades de sus hijos.</p>
                        </div>
                        <div className='cajas_producto_individual'>
                            <h1 className='cajas__numeros2'>3.</h1>
                            <h1 className='titulo_cajas'>Producto Aumentado</h1>
                            <p className='parrafo_cajas'>La empresa puede superar las expectativas del cliente al ofrecer servicios adicionales como la personalización de preferencias de cuidado y la disponibilidad del servicio a cualquier hora y en cualquier parte de la ciudad.</p>
                        </div>
                        <div className='cajas_producto_individual'>
                            <h1 className='cajas__numeros2'>4.</h1>
                            <h1 className='titulo_cajas'>Producto Potencial</h1>
                            <p className='parrafo_cajas'>En el futuro, se considerarán otras innovaciones, como la integración de tecnología de seguimiento en tiempo real que permita a los padres monitorear a sus hijos, así como servicios relacionados con el desarrollo infantil.</p>
                        </div>
                    </div>
                </div>
                <div className='container_ciclo_producto'>
                    <h1 className='titulo-mision'>Ciclo de vida del producto</h1>
                    <h1 className='subtitulo-fo'>Patrón Ciclo-Reciclo</h1>
                    <div className='container-img-ciclo'>
                        <img src={ciclo} alt='ciclo reciclo' className='img_ciclo' />
                    </div>
                </div>
                <div className='container_nombre_producto'>
                    <h1 className='titulo-mision'>Nombre empresarial</h1>
                    <div className='producto_nombre'>
                        <p className='texto-conclusion'>El nombre representa una idea de familia extensa, abarcando no solo el hogar, sino una noción más compleja y heterogénea de familia. <br />Hace referencia a aquellas figuras mayores, como abuelas y bisabuelas, que han contribuido al cuidado y la diversión de los más pequeños en el entorno familiar. <br />La identidad de "La Tata" refleja la unión de estas partes en pos de un todo, incorporando elementos lúdicos en su enfoque.</p>
                        <img src={nombre} alt="nombre" className='nombre-tata'></img>
                    </div>
                    <h1 className='titulo-mision'>Logos</h1>
                    <div className='container-logos'>
                        <img src={logo1} alt='logo la tata' className='logo-tata'></img>
                        <img src={logo2} alt='logo la tata' className='logo-tata'></img>
                    </div>
                    <h1 className='titulo-mision'>Logos de la aplicación</h1>
                    <div className='container-logos'>
                        <img src={logo3} alt='logo la tata' className='logo-app'></img>
                    </div>
                </div>
                <div className='container-colores'>
                    <h1 className='titulo-mision'>Colores</h1>
                    <div className='producto_colores'>
                        <div className='colores_rosa'>
                            <h2 className='titulo-colores'>Rosa:</h2>
                            <p className='texto-colores'> En el contexto de "La Tata", representa la atención y el cariño que brindamos a los niños a quienes cuidamos. Simboliza la empatía y la sensibilidad hacia las necesidades de los padres y sus hijos.</p>
                        </div>
                        <div className='colores_lino'>
                            <h2 className='titulo-colores'>Crudo:</h2>
                            <p className='texto-colores'> Refleja la confianza que los padres pueden tener al elegir nuestros servicios de cuidado infantil. También simbolizan la pureza y la paz en el entorno del hogar donde se brinda el cuidado.</p>
                        </div>
                        <div className='colores_naranja'>
                            <h2 className='titulo-colores'>Naranja:</h2>
                            <p className='texto-colores'>En el contexto de "La Tata", sugiere la energía positiva y el entusiasmo que tienen nuestros cuidadores para brindar un servicio excepcional y divertido a los niños.</p>
                        </div>
                        <div className='colores_azul'>
                            <h2 className='titulo-colores' style={{ color: 'white' }}>Azul petróleo:</h2>
                            <p className='texto-colores' style={{ color: 'white' }}>El azul petróleo evoca calma y profesionalismo. Representa la confiabilidad y la eficiencia en la coordinación y organización de los cuidadores para satisfacer las necesidades de los padres.</p>
                        </div>
                    </div>
                    <p style={{ fontSize: '1.7rem', textAlign: 'justify' }}>Al combinar estos colores, "La Tata" busca transmitir una imagen de cuidado amoroso, confianza, profesionalismo y energía positiva. Cada color se ha elegido estratégicamente para generar un impacto emocional que refleja nuestra dedicación a proporcionar un cuidado seguro y amoroso a los niños, así como tranquilidad y confianza a los padres.</p>
                </div>
                <div className='container-tipografia'>
                    <h1 className='titulo-mision'>Tipografía</h1>
                    <div className='tipografia'>
                        <p className='texto-conclusion'>La tipografía elegida para nuestra empresa será la llamada ‘Roboto’ quedaron bien definidos los tamaños de los títulos y los cuerpos de la aplicación la tipografía elegida es del estilo tradicional hijas de las tipografías como la Arial, si bien es simple y legible es moderna, adaptándose a la actualidad y a la novedad de nuestra empresa. Roboto es la tipografía elegida porque no es rígida, es tradicional pero innovadora, legible, idónea para nuestra aplicación.</p>
                        <p className='texto-tipografia'>Roboto Thin 100</p>
                    </div>
                </div>
                <div className='container-calidad-servicio'>
                    <h1 className='titulo-mision'>Calidad del Servicio</h1>
                    <div className='caja_calidad'>
                        <div className='cajas_calidad'>
                            <h1 className='cajas__numeros2'>1.</h1>
                            <p className='texto_calidad'>Implementación de Normativas de Calidad (ISO 9000)</p>
                        </div>
                        <div className='cajas_calidad'>
                            <h1 className='cajas__numeros2'>2.</h1>
                            <p className='texto_calidad'>Capacitación y Formación Continua</p>
                        </div>
                        <div className='cajas_calidad'>
                            <h1 className='cajas__numeros2'>3.</h1>
                            <p className='texto_calidad'>Feedback de nuestros clientes</p>
                        </div>
                        <div className='cajas_calidad'>
                            <h1 className='cajas__numeros2'>4.</h1>
                            <p className='texto_calidad'>Establecimiento de métricas de calidad</p>
                        </div>
                        <div className='cajas_calidad'>
                            <h1 className='cajas__numeros2'>5.</h1>
                            <p className='texto_calidad'>Innovación y mejora continua</p>
                        </div>
                        <div className='cajas_calidad'>
                            <h1 className='cajas__numeros2'>6.</h1>
                            <p className='texto_calidad'>Transparencia y comunicación clara</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='2-precio'>
                <div className='p'>
                    <h1 className='titulo-p'>2.</h1>
                    <h1 className='titulo-p'>Precio</h1>
                </div>
                <div className='container-politica-precios'>
                    <h1 className='titulo-mision'>Establecimiento de una política de precios</h1>
                    <p className='texto-target'>‘La Tata’ para respaldar el liderazgo en calidad justificará sus precios más altos al enfocarse en brindar un servicio excepcionalmente seguro, confiable y de alta calidad; es por ello que los precios establecidos reflejarán la percepción de que los servicios brindados son superiores a los de la competencia debido a la alta calidad y la atención al detalle del mismo.</p>
                    <div>
                        <h1 className='titulo-mision'>Estimación de costos</h1>
                    </div>
                    <div>
                        <h1 className='titulo-mision'>Método de fijación de precios</h1>
                        <p className='texto-precios'>Fijación de Precios por Valor Percibido: ya que nos centraremos en la percepción del valor de la oferta por parte del mercado. Para "La Tata", es importante determinar cómo los padres perciben el valor de los servicios de cuidado infantil que ofreces y fijar precios que reflejen esa percepción de valor.
                        </p>
                        <p className='texto-precios'>Fijación de Precios Psicológica:  Los consumidores a menudo utilizan el precio como un indicador de calidad. Esto significa que el precio que se establezca puede influir en la percepción de los clientes sobre la calidad de los servicios de cuidado infantil.
                            Se considerará cuidadosamente cómo el precio se relaciona con la calidad que se ofrece.
                        </p>
                    </div>
                </div>
            </div>
            <div className='3-Plaza'>
                <div className='p'>
                    <h1 className='titulo-p'>3.</h1>
                    <h1 className='titulo-p'>Plaza</h1>
                </div>
                <div className='container_plaza'>
                    <div>
                        <h1 className='titulo-mision' >Canales de distribución</h1>
                        <h1 className='titulo-mision'>Selección de los canales de distribución apropiados</h1>
                    </div>
                    <div>
                        <div className='cajas_canales'>
                            <div className='cajas_canal'>
                                <h1 className='numeros_canales'>1.</h1>
                                <p className='texto_canal'>Sitio Web y Plataforma en Línea</p>
                            </div>
                            <div className='cajas_canal'>
                                <h1 className='numeros_canales'>2.</h1>
                                <p className='texto_canal'>Redes Sociales</p>
                            </div>
                            <div className='cajas_canal'>
                                <h1 className='numeros_canales'>3.</h1>
                                <p className='texto_canal'>Alianzas Estratégicas</p>
                            </div>
                            <div className='cajas_canal'>
                                <h1 className='numeros_canales'>4.</h1>
                                <p className='texto_canal'>Publicidad Local</p>
                            </div>
                            <div className='cajas_canal'>
                                <h1 className='numeros_canales'>5.</h1>
                                <p className='texto_canal'>Marketing de Boca a Boca</p>
                            </div>
                            <div className='cajas_canal'>
                                <h1 className='numeros_canales'>6.</h1>
                                <p className='texto_canal'>Plataformas de Búsqueda de Servicios de Cuidado Infantil</p>
                            </div>
                            <div className='cajas_canal'>
                                <h1 className='numeros_canales'>7.</h1>
                                <p className='texto_canal'>Correo Electrónico y Boletines Informativos</p>
                            </div>
                            <div className='cajas_canal'>
                                <h1 className='numeros_canales'>8.</h1>
                                <p className='texto_canal'>Contacto Directo con Centros Educativos</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container_nivel_canal'>
                    <h1 className='titulo-mision'>Nivel de canal cero</h1>
                    <p className='texto-conclusion'>"La Tata" podría identificarse en un canal de cero niveles o canal de marketing directo. Esto se debe a que la empresa tiene como objetivo proporcionar servicios de cuidado infantil directamente a los clientes finales (los padres o tutores) sin la intermediación de mayoristas, detallistas u otros intermediarios tradicionales.</p>
                </div>
                <div className='container_logistica'>
                    <h1 className='titulo-mision'>Logística de mercado</h1>
                    <p className='texto-conclusion'>La estrategia de "La Tata" se centrará en la optimización de la plataforma y la experiencia del usuario, permitiendo la conexión rápida y efectiva entre los padres o tutores y las babysitters disponibles. Además, es fundamental mantener un monitoreo constante de la disponibilidad de babysitters  y la satisfacción de los clientes.
                        <br /><br />
                        En resumen, la distribución física en este contexto se enfocaría en la gestión de recursos humanos (babysitters) y la plataforma tecnológica que permite la conexión entre los usuarios y los proveedores de servicios de cuidado infantil.
                    </p>
                </div>
            </div>
            <div className='4-Promocion'>
                <div className='p'>
                    <h1 className='titulo-p'>3.</h1>
                    <h1 className='titulo-p'>Promoción</h1>
                </div>
                <div className='container_estrategias'>
                    <h1 className='titulo-mision'>Estrategias de promoción</h1>
                    <div className='caja_estrategias'>
                        <div className='cajas_es'>
                            <h1 className='titulo_estrategia'>1. Publicidad</h1>
                            <p className='texto_estrategia'>A través de redes sociales y plataformas de búsqueda.</p>
                        </div>
                        <div className='cajas_es'>
                            <h1 className='titulo_estrategia'>2. Marketing Directo</h1>
                            <p className='texto_estrategia'>Emails informativos, con promociones o descuentos.</p>
                        </div>
                        <div className='cajas_es'>
                            <h1 className='titulo_estrategia'>3. Venta personal</h1>
                            <p className='texto_estrategia'>Comunicación directa de las babysitters a los padres.</p>
                        </div>
                        <div className='cajas_es'>
                            <h1 className='titulo_estrategia'>4. Promociones de ventas</h1>
                            <p className='texto_estrategia'>Para atraer a nuevos clientes o recompensar a los existentes por recomendar el servicio a otros.</p>
                        </div>
                        <div className='cajas_es'>
                            <h1 className='titulo_estrategia'>5. Programas de fidelidad</h1>
                            <p className='texto_estrategia'>Recompensar a los clientes que eligen los servicios de forma continua.</p>
                        </div>
                        <div className='cajas_es'>
                            <h1 className='titulo_estrategia'>6. Relaciones públicas</h1>
                            <p className='texto_estrategia'> Establecer relaciones con organizaciones locales e influencers.</p>
                        </div>
                        <div className='cajas_es'>
                            <h1 className='titulo_estrategia'>7. Material promocional</h1>
                            <p className='texto_estrategia'>Proporcionar con material promocional en diferentes empresas de la ciudad.</p>
                        </div>
                    </div>
                </div>
                <div className='container_postventa'>
                    <h1 className='titulo-mision'>Estrategias de Servicios Postventa</h1>
                    <img src={estrategias} alt="estrategias de postventa" className='img_postventa'></img>
                </div>
                <div className='container_resumen'>
                    <h1 className='titulo-mision'>Conclusión</h1>
                    <div className='resumen_texto'>
                        <p className='texto-conclusion'>  "La Tata" tiene proyectado convertirse en un referente destacado del cuidado infantil, basado en su enfoque en la calidad, la confiabilidad y la personalización del servicio. <br /><br />Se espera que la empresa consolide su presencia en varios mercados y establezca alianzas estratégicas con instituciones educativas y de salud, fortaleciendo así su compromiso con la excelencia. <br /><br />Con un equipo altamente calificado y una infraestructura de vanguardia, "La Tata" se propone ofrecer un entorno seguro y enriquecedor para las familias, satisfaciendo las demandas cambiantes del cuidado infantil moderno.</p>
                        <img src={app} alt="imagen ilustrativa de la aplicación" style={{ width: '40%' }}></img>
                    </div>
                </div>
            </div>
        </section>
    )
}

