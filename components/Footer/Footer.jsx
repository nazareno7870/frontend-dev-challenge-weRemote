import './styles.css'
import McontigoLogo from '../../assets/McontigoLogo.svg'
import SeparatorFooter from '../../assets/SeparatorFooter.svg'
import SeparatorFooterMobile from '../../assets/SeparatorFooterMobile.svg'
import { useState } from 'react';

const Footer = () => {
    const [size, setsize] = useState(window.innerWidth);
    window.addEventListener('resize', () => {
        setsize(window.innerWidth);
    })

    return (
        <footer
            className="footer"
            chang>
            <div className="footer__top">
                <img src={McontigoLogo} alt="Logo Mcontigo" />
                <div className="footer__top__content">
                    <small>La Mente es Maravillosa is a property of Grupo MContigo© 2012 – 2020. All rights reserved.</small>
                    <small>Los contenidos de esta publicación se redactan solo con fines informativos. En ningún momento pueden servir para facilitar diagnósticos o sustituir la labor de un profesional. Le recomendamos que contacte con su especialista de confianza.</small>
                </div>
            </div>
            <img src={size > 768 ? SeparatorFooter : SeparatorFooterMobile} alt="Footer Separator" />
            <div className="footer__bottom">
                <ul>
                    <li>Política de Cookies</li>
                    <li>Política de Privacidad</li>
                    <li>Términos y condiciones de uso</li>
                    <li>Cláusula Informativa de Consentimiento</li>
                </ul>
            </div>
        </footer >

    );
}

export default Footer;