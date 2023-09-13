import React from 'react'
import './App.css'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { images } from './pathsperegrina/pathsperegrina';
import { images2 } from './pathsveni/pathsveni';
import reza from './assets/reza.png'
import oracion from './assets/reza/2.png'
import cancion from './assets/reza/3.png'
import rosario from './assets/reza/4.png'
import logo1 from './assets/logo1.png'
function App() {

  return (
    <div>
      <div className='header'>
        <a className='header-text' href='#reza'>Rezá a la Virgen</a>
        <a className='header-text' href='#peregrina'>Peregriná a la Casa de María</a>
        <a className='header-text' href='#veni'>Vení a La Reducción</a>
        <a className='header-text' href='#colabora'>Colaborá con el Santuario</a>
      </div>
      <div className='body-content'>
        <div className='portada'>
          <img src={logo1} alt="virgen" className='imgvirgen'></img>
          <h1>Santuario Nuestra Señora</h1>
          <h1>del</h1>
          <h1>Valle de La Reducción</h1>
          <h3>Bienvenidos al Sitio Web Oficial del Santuario Nuestra Señora del Valle de La Reducción, 
            perteneciente a la Arquidiócesis de Tucumán. Con la alegría de compartir una misma fe, 
            te invitamos a conocer la Historia del Hallazgo de Nuestra Madre Santísima y todas las 
            actividades que realizamos en el Santuario dedicado a la Virgen Morenita.</h3>
        </div>
       
      </div>
      <section className='peregrina' id='peregrina'>
      <div>
      <h2>Peregriná a la Casa de María</h2>
    </div>
      <Carousel showArrows={true} infiniteLoop={true} autoPlay={true} className='carousel-peregrina'>
      {images.map((image, index) => (
        <div key={index} className="carousel-image-container">
          <img src={image.img}alt={`Image ${index + 1}`} />
          <h3 className='carousel-text'>{image.text}</h3>
        </div>
      ))}
    </Carousel>
      </section>
      <section className='reza-content' id='reza'>
      <div className='margin'>
      <h2>Rezá a la Virgen</h2>
      </div>
        <div className='reza-container'>
          <div className='reza-text-div'>
            <h3 className='reza-text'>- Oración</h3>
            <h3 className='reza-text'>- Canción</h3>
            <h3 className='reza-text'>- Rosario</h3>
          </div>
          <img src={reza} alt='reza' className='imgs' />
        </div>
      <div className='oracion'>
      <img src={oracion} alt='oracion' className='imgs' />
      <div className='column-text'>
        <h2>Oración</h2>
        <h3 className='oracion-text'>¡Oh Santísima Virgen del Valle, que en La Reducción has salido al encuentro de tus hijos tucumanos, estableciendo tu morada entre labradores del campo!
        A ti, que eres Madre amantísima de todos los hombres, especialmente de los que llevan el sello de tu Hijo por el santo Bautismo, suplicamos llenos de humilde confianza, que acrecientes en nuestra alma la fe, esperanza y caridad, para que vivamos fieles a la ley de Dios y así alcancemos nuestra eterna salvación.
        Protégenos en todas nuestras necesidades espirituales y temporales; bendice nuestros hogares y haz que cuantos están afuera del redil de tu Hijo entren en él. Amen.
        </h3>
      </div>
      </div>
      <section className='cancion' id='santuario'>
      <div className='column-text'>
        <h2>Canción</h2>
      <h3 className='oracion-text'>
                    Te presentaste sola en nuestro Pueblo,<br/>
                    de las entrañas mismas de nuestro suelo<br/>
                    en una humilde gruta un lugareño,<br/>
                    dio la noticia ansiada fue como un sueño.<br/>
                    De cabellera negra y su piel morena,<br/>
                    con sus ojitos buenos, manos sinceras.<br/>
                    Año tras año llegan los peregrinos,<br/>
                    todos son hijos tuyos agradecidos.<br/>
                    Estribillo<br/>
                    Virgen del Valle, escucha mi ruego<br/>
                    Virgen del Valle, patrona de nuestro pueblo<br/>
                    Virgen del Valle, bendice a La Reducción.<br/>
                    Cuántos necesitamos tu amor divino<br/>
                    cuántos hermanos llegan afligidos<br/>
                    juntos elevaremos nuestra plegaria<br/>
                    que guíes los destinos de nuestra Patria.<br/>
                    Estribillo<br/>
                    -El autor de esta canción es el señor Pedro Soria, escribiéndola en la Gruta del Hallazgo, bajo la sombra de un gran y centenario algarrobo, que presenció el Milagro de La Reducción. 
                    Agradecemos a la Familia de Don Pedro Soria el permitirnos publicar esta canción.
                    </h3>
      </div>
      <img src={cancion} alt='cancion' className='imgs' />
      </section>
      <section className='rosario-container' id='santuario'>
      <img src={rosario} alt='oracion' className='imgs' />
      <div className="rosario">
      <h2>Rosario</h2>
      <div className="row">
        <div className="column">
          <h3 className="rosario-text"> Santo Rosario en honor a Nuestra Señora del Valle de La Reducción
          </h3>
          <h3 className="rosario-text2">
          Oraciones  iniciales
          Señal de la cruz, Pésame o acto de contrición.
          </h3>
        </div>
        <div className="column">
          <h3 className="rosario-text"> Primer misterio: "El pueblo trabaja la tierra para sanar la pobreza en la que vive"
          </h3>
          <h3 className="rosario-text2">
                      Pedimos por los pobres de nuestra Patria.
            Era un 26 de noviembre de 1923, en una quinta ubicada en la localidad de La Reducción, provincia de Tucuman, trabajaban hombres, mujeres y niños. ese día tenían que apurarse para poder cumplir con el pedido del patrón, un inmigrante protestante, llamado Felipe Auvieux. Mientras tanto el cielo se oscurecía, anunciando una gran tormenta.
            Padrenuestro, 10 Ave Maria, Gloria
            "Nuestra Señora Del Valle, ayúdanos a crecer en humildad"
          </h3>
        </div>
      </div>
      <div className="row">
        <div className="column">
        <h3 className="rosario-text">Segundo misterio: "Todos juntos rezaban el Rosario a la Madre del cielo"
          </h3>
          <h3 className="rosario-text2">
          Pedimos por la Iglesia y por el Papa Francisco
          La tormenta desató toda su furia con fuerte descarga eléctrica y granizo llenando de temor a los trabajadores quienes pronto regresaron a sus casas, pensando que toda la cosecha iba a perderse. Todos juntos rezaban el Rosario pidiendo protección divina para su fuente de trabajo.
          Padrenuestro, 10 Ave Maria, Gloria
          "Nuestra Señora Del Valle, enséñanos a rezar en familia"
          </h3>
        </div>
        <div className="column">
        <h3 className="rosario-text">Tercer misterio: "Mientras un sordo mudo seguía trabajando vio caer una Luz del Cielo"
          </h3>
          <h3 className="rosario-text2">
          Pedimos por los enfermos y marginados.
          Todos los obreros regresaron asustados a sus casas pero Luis Delgado, un sordo mudo de nacimiento siguió trabajando, sin entender siquiera la magnitud de la tormenta. De repente vio una Luz brillante y muy intensa que descendía hacia la tierra, aclarando el cielo y todo a su alrededor. Lleno de temor regresó inmediatamente al pueblo y mediante señas contaba a los vecinos lo ocurrido.
          Padrenuestro, 10 Ave Maria, Gloria
          "Nuestra Señora Del Valle, cubre con tu Manto a los enfermos"
          </h3>
        </div>
      </div>
      <div className="row">
        <div className="column">
        <h3 className="rosario-text">Cuarto Misterio: "La Virgen del Valle se quedó en La Reducción por amor"
          </h3>
          <h3 className="rosario-text2">
          Pedimos para que todas las personas descubran el amor de Dios.
          Tanto revuelo se armó en el pueblo que tuvo que intervenir el cura párroco, fueron todos los vecinos a la quinta y descubrieron que milagrosamente la tormenta no provocó ningún daño en el sembrado. Llegaron al sitio donde cayó la Luz del Cielo, allí Luis, con un cuchillo, removió la tierra y en presencia de todos, desenterraron una pequeña y hermosa Imagen de Nuestra Señora del Valle.
          Padrenuestro, 10 Ave Maria, Gloria
          "Nuestra Señora Del Valle, fortalece nuestra fe"
          </h3>
        </div>
        <div className="column">
        <h3 className="rosario-text">Quinto misterio:"La misma imagen que bajó del Cielo espera a sus hijos en La Reducción"
          </h3>
          <h3 className="rosario-text2">
          Pedimos por todos los peregrinos que llegan a los pies de la Virgen Del Valle
          Desde el momento del Milagro de La Reducción muchas personas veneran la imagen de la Morenita. En su hermoso Santuario la Madre de Dios, espera a sus Hijos todo el año para llenarlos de amor y de sus bendiciones. Son innumerables los prodigios de Nuestra Señora, cuya devoción trasciende las fronteras de nuestra Provincia y congrega cada año a miles y miles de fieles cada 8 de diciembre, Fiesta de la Inmaculada Concepción.
          Padrenuestro, 10 Ave Maria, Gloria
          "Nuestra Señora Del Valle, escucha las intenciones de tus hijos" <br></br>
          Al finalizar rezamos por las intenciones del Santo Padre
          Padrenuestro, Ave Maria, Gloria
          "Nuestra Madre amada Del Valle,
          Ruega por nosotros y por el Mundo entero"

          </h3>
        </div>
      </div>
    </div>
      </section>
      </section>
      <section className='veni-content' id='veni'>
        <div className='text-sections'> 
          <h2>Vení a La Reducción</h2>
          <h3 className='text-subs'>Te invitamos a visitar el hermoso Santuario dedicado a la Madre de Dios que hace 100 años bajó del cielo en la pequeña localidad de La Reducción, 
              departamento Lules, Provincia de Tucumán, al norte de Argentina. </h3>
          <a href='https://www.google.com/maps/d/u/1/edit?mid=1_tMMfpnIm3foO412fuv-_7vQP1NuKKs&ll=-26.957573889248863%2C-65.3506306&z=18'
            >
            ¡Hacé click acá y conocé como llegar!
          </a>
        </div>
        
      <Carousel showArrows={true} infiniteLoop={true} autoPlay={true}>
      {images2.map((image, index) => (
        <div key={index} className="carousel-image-container">
          <img src={image.img}alt={`Image ${index + 1}`} />
          <h3 className='carousel-text'>{image.text}</h3>
        </div>
      ))}
    </Carousel>
      </section>
      <section className="colabora" id='colabora'>
        <h2>Colaborá con el Santuario</h2><br/>
        <h3 className="colabora-text">Si quiere realizar alguna donación puede hacerlo a la cuenta del Banco Macro </h3><br/>
        <h3 className="colabora-text">Nro de cuenta: 4-6170952957393-2</h3><br/>
        <h3 className="colabora-text">CBU: 2850617940095295739328</h3><br/>
        <h3 className="colabora-text">Después de realizar la transferencia, manda comprobante al celular:  3815220050 o al mail: lulessanisidrolabrador@gmail.com</h3>
      </section>
      <div className='footer'>
        <h3>Ubicación <br/>Ruta 301 y Avenida Presidente Perón, La Reducción, Lules, Tucumán</h3>
        <h3>Contacto<br/>(0381) 4913186</h3>
        <div className='red-container'>
        <h3>Redes Sociales</h3>
        <a className='face-link' href=' https://www.facebook.com/santuariovirgendelvallereduccionPAGINA '>
        Santuario de la Virgen del Valle - Tucumán
        </a>
        </div>
        <div class="face"></div>
      </div>
    </div>
  )
}

export default App
