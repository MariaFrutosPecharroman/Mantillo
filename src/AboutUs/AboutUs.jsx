import React, { useState, useCallback, useRef, useEffect } from 'react';
import { useTransition, animated } from '@react-spring/web';
import './AboutUs.css';
import video from '../assets/videos/Mantillo_inicio.mp4';
import maria from '../assets/img/maria.png';
import materials from '../assets/img/about_materials.png';

const AboutUs = () => {
  const ref = useRef([]);
  const [items, set] = useState([]);

  const transitions = useTransition(items, {
    from: {
      opacity: 0,
      height: 0,
      innerHeight: 0,
      transform: 'perspective(600px)',
      color: '#8fa5b6',
    },
    enter: [
      { opacity: 1, height: 80, innerHeight: 80 },
      { transform: 'perspective(600px)', color: '#28d79f' },
      { transform: 'perspective(600px)' },
    ],
    leave: [{ color: '#c23369' }, { innerHeight: 0 }, { opacity: 0, height: 0 }],
    update: { color: '#28b4d7' },
  });

  const reset = useCallback(() => {
    ref.current.forEach(clearTimeout);
    ref.current = [];
    set([]);
    ref.current.push(setTimeout(() => set(['Bienvenidos']), 2000));
    ref.current.push(setTimeout(() => set(['Esto', 'es']), 5000));
    ref.current.push(setTimeout(() => set(['Mantillo']), 8000));
  }, []);

  useEffect(() => {
    reset();
    return () => ref.current.forEach(clearTimeout);
  }, [reset]);

  return (
    <div>
      <div className="aboutus">
        <video className="background-video" autoPlay loop muted>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="content overlay">
          <div className="main">
            {transitions(({ innerHeight, ...rest }, item) => (
              <animated.div className="transitionsItem" style={rest} onClick={reset}>
                <animated.div style={{ overflow: 'hidden', height: innerHeight }}>{item}</animated.div>
              </animated.div>
            ))}
          </div>
        </div>
      </div>
      <div className='aboutusContent'>
        {/* Primera sección de About Us */}
        <section className="py-5">
          <div className="container">
            <div className="row gx-4 align-items-center justify-content-between">
              <div className="col-md-5 order-1 order-md-1">
                <div className="mt-5 mt-md-0">
                  <span className="text-muted">Nuestra historia</span>
                  <h2 className="display-5 fw-bold">Sobre Nosotros</h2>
                  <p className='lead'>
                    Detrás de Mantillo se encuentra una mente creativa y apasionada: nuestra fundadora y diseñadora integral. Una soñadora incansable, llena de energía y vitalidad, que ha sabido transformar su visión en una marca única dentro del mundo del Slow Fashion.
                  </p>
                  <p className='lead'>
                    Con una constante búsqueda de la perfección, su enfoque innovador y su creatividad inagotable son el alma de cada pieza que creamos. Su capacidad para trabajar en equipo y su voluntad férrea hacen que cada proyecto sea una oportunidad para reinventar el diseño, siempre fiel a su esencia artesanal.
                  </p>
                  <p className='lead'>
                    Mantillo no solo es su marca, es su forma de expresar su pasión por lo hecho a mano, por lo auténtico y por crear moda que cuente historias.
                  </p>
                </div>
              </div>
              <div className="col-md-6 offset-md-1 order-2 order-md-2">
                <div className="row gx-2 gx-lg-3">
                <div className="col-12">
                    <div className="mb-2">
                      <img className="img-fluid rounded-3" src={maria} alt="Pañuelo 1" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Segunda sección de About Us */}
        <section className="py-5">
          <div className="container">
            <div className="row gx-4 align-items-center justify-content-between">
              <div className="col-md-6 order-2 order-md-1">
                <div className="row gx-2 gx-lg-3">
                  <div className="col-12">
                    <div className="mb-2">
                      <img className="img-fluid rounded-3" src={materials} alt="Pañuelo 1" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-5 offset-md-1 order-1 order-md-2">
                <div className="mt-5 mt-md-0">
                  <h2 className="display-5 fw-bold">Nuestra Filosofia</h2>
                  <p className='lead'>
                    Nuestra filosofía corporativa es el eje de la comunicación en todos los soportes. Somos fieles a nuestros principios de calidad y buenas prácticas, concluyendo en que:
                  </p>
                  <p className='lead'>
                    Ética + estética = Mantillo
                  </p>
                  <p className='lead'>
                    Comprometidos con la sostenibilidad. Con ello se pretende que la gente empiece a plantearse si quieren seguir apoyando al tipo de prácticas “fast fashion”, comprando ropa a estas industrias, o prefiere ser más responsable y exigir y conseguir que estas prácticas estén reguladas para un “vertido cero”. Es decir, que los productos químicos peligrosos sean progresivamente sustituidos por alternativas más seguras
                  </p>
                  <p className='lead'>
                    Mantillo quiere aportar posibles nuevas soluciones éticas y ecológicas en el mundo textil.
                  </p>
                  <p className='lead'>
                    Con un trabajo de manera artesanal y consciente haciendo un bajo stock o stock bajo demanda.
                  </p>
                  <p className='lead'>
                    Trabajar con materiales orgánicos que se produzcan de forma local.
                  </p>
                  <p className='lead'>
                    Trabajar con contenidos (a través de workshops, inclusión de personas menos favorecidas, respeto hacia el medioambiental y promulgación del buen uso de tintes naturales) que aporten un beneficio a la sociedad.
                  </p>

                </div>
              </div>
            </div>
          </div>
        </section>
        
      </div>

    </div>
  );
};

export default AboutUs;
