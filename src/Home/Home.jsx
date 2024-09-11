import { useRef } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

//Golondrina Flotando
import { useSpring, to, animated, config } from '@react-spring/web'
import { scale, dist } from 'vec-la'
import { useDrag } from 'react-use-gesture'

import { HiArrowCircleDown } from "react-icons/hi";

import './Home.css';
import logo from "../assets/Logo.png";
import alcazar from "../assets/img/alcazar_mantillo.png"
import golondrina from "../assets/img/golondrina.png"
import acueductoychica from '../assets/img/Acueductoychica.png'
import cloud from '../assets/img/Nube_Mantillo.png'
import petalo from '../assets/img/petalo_mantillo.png'
import rosa from '../assets/img/Rosa_Mantillo.png'
import hands from '../assets/img/Mano_Mantillo.png'
import panuelo from '../assets/img/Panuelo_Mantillo.png'


export default function Home() {
  const parallax = useRef(null);

  const [{ pos }, api] = useSpring(() => ({ pos: [0, 0] }))
  const [{ angle }, angleApi] = useSpring(() => ({
    angle: 0,
    config: config.wobbly,
  }))

  const bind = useDrag(
    ({ xy, previous, down, movement: pos, velocity, direction }) => {
      api.start({
        pos,
        immediate: down,
        config: { velocity: scale(direction, velocity), decay: true },
      })

      if (dist(xy, previous) > 10 || !down)
        angleApi.start({ angle: Math.atan2(direction[0], -direction[1]) })
    },
    { initial: () => pos.get() }
  )


  return (
    <div className="home">
      <div className='home-background'></div>
      <Parallax ref={parallax} pages={6} style={{bottom:'0'}}>
        <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: 'rgba(135, 188, 222, 0.5)' }} />

        <ParallaxLayer offset={1.3} speed={-0.3} style={{ pointerEvents: 'none' }}>
          <img src={golondrina} style={{ width: '15%', marginLeft: '75%' }} alt="golondrina" />
        </ParallaxLayer>

        <ParallaxLayer offset={0.3} speed={0.8} style={{ opacity: 0.4 }}>
          <img src={cloud} style={{ display: 'block', width: '20%', marginLeft: '55%' }} alt="cloud" />
          <img src={cloud} style={{ display: 'block', width: '10%', marginLeft: '15%' }} alt="cloud" />
        </ParallaxLayer>

        <ParallaxLayer offset={0.4} speed={-0.2} style={{ opacity: 0.4 }}>
          <img src={cloud} style={{ display: 'block', width: '20%', marginLeft: '75%' }} alt="cloud" />
          <img src={cloud} style={{ display: 'block', width: '30%', marginLeft: '25%' }} alt="cloud" />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.5 }}>
          <img src={cloud} style={{ display: 'block', width: '20%', marginLeft: '55%' }} alt="cloud" />
          <img src={cloud} style={{ display: 'block', width: '10%', marginLeft: '15%' }} alt="cloud" />
        </ParallaxLayer>

        <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.5 }}>
          <img src={cloud} style={{ display: 'block', width: '20%', marginLeft: '70%' }} alt="cloud" />
          <img src={cloud} style={{ display: 'block', width: '20%', marginLeft: '40%' }} alt="cloud" />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.5 }}>
          <img src={cloud} style={{ display: 'block', width: '10%', marginLeft: '10%' }} alt="cloud" />
          <img src={cloud} style={{ display: 'block', width: '20%', marginLeft: '75%' }} alt="cloud" />
        </ParallaxLayer>

        <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.3 }}>
          <img src={cloud} style={{ display: 'block', width: '20%', marginLeft: '60%' }} alt="cloud" />
          <img src={cloud} style={{ display: 'block', width: '25%', marginLeft: '30%' }} alt="cloud" />
          <img src={cloud} style={{ display: 'block', width: '10%', marginLeft: '80%' }} alt="cloud" />
        </ParallaxLayer>

        <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.3 }}>
          <img src={cloud} style={{ display: 'block', width: '20%', marginLeft: '5%' }} alt="cloud" />
          <img src={cloud} style={{ display: 'block', width: '15%', marginLeft: '75%' }} alt="cloud" />
        </ParallaxLayer>

        <ParallaxLayer offset={3.6} speed={-0.1} style={{ opacity: 0.5 }}>
          <img src={cloud} style={{ display: 'block', width: '20%', marginLeft: '60%' }} alt="cloud" />
          <img src={cloud} style={{ display: 'block', width: '25%', marginLeft: '30%' }} alt="cloud" />
          <img src={cloud} style={{ display: 'block', width: '10%', marginLeft: '80%' }} alt="cloud" />
        </ParallaxLayer>

        <ParallaxLayer offset={3.6} speed={0.4} style={{ opacity: 0.5 }}>
          <img src={cloud} style={{ display: 'block', width: '20%', marginLeft: '5%' }} alt="cloud" />
          <img src={cloud} style={{ display: 'block', width: '15%', marginLeft: '75%' }} alt="cloud" />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={0.5}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: 'none',
            position: 'relative',
          }}
        >
          <img
            src={alcazar}
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: '100%',
              height: 'auto',
              objectFit: 'cover',
              objectPosition: 'bottom',
            }}
            alt="Alcazar Mantillo"
          />
        </ParallaxLayer>

        <ParallaxLayer offset={2.3} speed={1} style={{ pointerEvents: 'none' }}>
          <h1 style={{ width: '25%', marginLeft: '50%' }}>Desde Segovia, una pequeña ciudad mágica</h1>
          <p style={{ width: '17%', marginLeft: '50%' }}>Nuestro hogar y lugar de inspiración es Segovia, una ciudad pequeña pero llena de historia y encanto. Aquí, entre antiguas calles de piedra y paisajes majestuosos, nace la magia que impregna cada uno de nuestros productos.</p>
          <p style={{ width: '17%', marginLeft: '50%' }}>Segovia, con su aire tranquilo y su rica tradición, nos recuerda la importancia de lo auténtico, lo artesanal y lo cuidado. Es en este entorno único donde creamos piezas con el alma del Slow Fashion, llevando un pedacito de nuestra mágica ciudad al mundo entero.</p>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={0.1}
          onClick={() => parallax.current.scrollTo(2)}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <img src={acueductoychica} style={{ width: '40%' }} alt="acueductoychica" />
        </ParallaxLayer>


        <ParallaxLayer
          offset={3}
          speed={-0}
          style={{
            display: 'flex',
            flexDirection: 'column', // Apilar elementos verticalmente
            alignItems: 'flex-start', // Centrar horizontalmente
            justifyContent: 'center', // Centrar verticalmente
            textAlign: 'center', // Asegurar que el texto esté centrado
          }}
        >
          <img src={rosa} style={{ width: "100%" }} alt="Rosa" />

        </ParallaxLayer>


        <ParallaxLayer
          offset={4}
          speed={-0} // Ajusta la velocidad para el desplazamiento
          style={{
            display: 'flex',
            flexDirection: 'column', // Apilar elementos verticalmente
            alignItems: 'flex-end', // Centrar horizontalmente
            justifyContent: 'center', // Centrar verticalmente
            textAlign: 'center', // Asegurar que el texto esté centrado
            zIndex: '1000',
            
          }}
        >
          <img src={hands} style={{ width: "70%" }} alt="Manos" />

        </ParallaxLayer>

        <ParallaxLayer
          sticky={{ start: 3, end: 3.9 }}
          style={{
            display: 'flex',
            flexDirection: 'column', // Apilar elementos verticalmente
            alignItems: 'center', // Centrar horizontalmente
            justifyContent: 'center', // Centrar verticalmente
            textAlign: 'center', // Asegurar que el texto esté centrado
            zIndex: '100 !important',
          }}>
          <img src={petalo} style={{ width: '100%' }} alt="petalo" />
        </ParallaxLayer>

        
        <ParallaxLayer
          offset={5}
          speed={-0} // Ajusta la velocidad para el desplazamiento
          style={{
            display: 'flex',
            flexDirection: 'column', // Apilar elementos verticalmente
            alignItems: 'center', // Centrar horizontalmente
            justifyContent: 'flex-end', // Centrar verticalmente
            textAlign: 'center', // Asegurar que el texto esté centrado
          }}>
          <img src={panuelo} style={{ width: '100%', zIndex:1000 }} alt="pañuelo" />
        </ParallaxLayer>

        <ParallaxLayer offset={1.3} speed={-0.2} style={{ pointerEvents: 'none' }}>
          <h1 style={{ width: '25%', marginLeft: '7%' }}>Bienvenidos a Mantillo</h1>
          <h2 style={{ width: '25%', marginLeft: '7%' }}>Donde la moda y la naturaleza se fusionan.</h2>
          <p style={{ width: '17%', marginLeft: '7%' }}>En Mantillo creamos pañuelos teñidos con pigmentos de pétalos de flores, combinando sostenibilidad y diseño artesanal. Cada pieza es única, hecha a mano con atención al detalle, manteniendo la esencia del Slow Fashion. Únete a nuestro viaje para cambiar el mundo, un pañuelo a la vez.</p>
        </ParallaxLayer>
        
        <ParallaxLayer
          offset={0}
          speed={0.1}
          style={{
            display: 'flex',
            flexDirection: 'column', // Apilar elementos verticalmente
            alignItems: 'center', // Centrar horizontalmente
            justifyContent: 'center', // Centrar verticalmente
            textAlign: 'center', // Asegurar que el texto esté centrado
          }}
        >
          

          <img src={logo} style={{ width: '40%' }} alt="Mantillo" />
          <h2>El Arte de las Flores</h2>
        </ParallaxLayer>

        <ParallaxLayer
        offset={0}
        speed={1}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: '10%'
        }}
        >
          <animated.div
            className="golondrina"
            {...bind()}
            style={{
              transform: to(
                [pos, angle],
                // @ts-ignore
                ([x, y], a) => `translate3d(${x}px,${y}px,0) rotate(${a}rad)`
              ),
            }}
          />

        </ParallaxLayer>


        <ParallaxLayer
          offset={0}
          speed={-0}
          onClick={() => parallax.current.scrollTo(1)}
          style={{
            display: 'flex',
            flexDirection: 'column', // Apilar elementos verticalmente
            alignItems: 'center', // Centrar horizontalmente
            justifyContent: 'flex-end', // Centrar verticalmente
            textAlign: 'center', // Asegurar que el texto esté centrado
            paddingBottom: '8em',
          }}
        >
            <HiArrowCircleDown size={80} color="#000" /> {/* Tamaño y color de la flecha */}
        </ParallaxLayer>
  
        
        
      </Parallax>
    </div>
  );
}
          
