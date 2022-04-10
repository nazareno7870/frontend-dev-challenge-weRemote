import './styles.css';
import { useState, useEffect, useRef } from 'react';

const Hero = () => {
    const [size, setsize] = useState(window.innerWidth);
    const [itemShow, setItemShow] = useState(0);
    const hero = useRef();
    useEffect(() => {
        window.addEventListener('resize', () => {
            setsize(hero.current.clientWidth);
        })
        setsize(hero.current.clientWidth)

    }, [size])

    setTimeout(() => {
        if (itemShow < 3) {
            setItemShow(itemShow + 1);
        } else {
            setItemShow(0);
        }
    }, 2500);

    return (
        <div className="hero" ref={hero}>
            <div className="hero__container" style={{ transform: `translateX(-${size * itemShow}px)` }}>
                <div className="hero__container__item">
                    <div className="textContainer">
                        <div className="textContainer__top">
                            <h1>Su viaje de <span>salud emocional</span> empieza aquí</h1>
                        </div>
                        <div className="textContainer__bottom">
                            <h2>Conoce a nuestros profesionales con licencia
                            </h2>
                        </div>
                        <div className="textContainer__p">
                            <p>Todos se someten a un proceso seguro de verificación y acreditación, además de adherirse a estrictos códigos de ética y confidencialidad.</p>
                        </div>
                    </div>
                </div>
                <div className="hero__container__item">
                    <div className="textContainer">
                        <div className="textContainer__top">
                            <h1>Su viaje de <span>salud emocional</span> empieza aquí</h1>
                        </div>
                        <div className="textContainer__bottom">
                            <h2>Conoce a nuestros profesionales con licencia
                            </h2>
                        </div>
                        <div className="textContainer__p">
                            <p>Todos se someten a un proceso seguro de verificación y acreditación, además de adherirse a estrictos códigos de ética y confidencialidad.</p>
                        </div>
                    </div>
                </div>
                <div className="hero__container__item">
                    <div className="textContainer">
                        <div className="textContainer__top">
                            <h1>Su viaje de <span>salud emocional</span> empieza aquí</h1>
                        </div>
                        <div className="textContainer__bottom">
                            <h2>Conoce a nuestros profesionales con licencia
                            </h2>
                        </div>
                        <div className="textContainer__p">
                            <p>Todos se someten a un proceso seguro de verificación y acreditación, además de adherirse a estrictos códigos de ética y confidencialidad.</p>
                        </div>
                    </div>
                </div>
                <div className="hero__container__item">
                    <div className="textContainer">
                        <div className="textContainer__top">
                            <h1>Su viaje de <span>salud emocional</span> empieza aquí</h1>
                        </div>
                        <div className="textContainer__bottom">
                            <h2>Conoce a nuestros profesionales con licencia
                            </h2>
                        </div>
                        <div className="textContainer__p">
                            <p>Todos se someten a un proceso seguro de verificación y acreditación, además de adherirse a estrictos códigos de ética y confidencialidad.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Hero;