import './styles.css'
import CookiesSVG from '../../assets/Cookies.svg'
import { useEffect, useState } from 'react';
const Cookies = () => {
    const [showCookies, setShowCookies] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    }, []);

    function handleScroll(e) {
        if (e.target.scrollingElement.scrollTop >= 500) {
            setShowCookies(true);
            window.removeEventListener('scroll', handleScroll);
        }
    }

    return (
        <div className="modalCookies"
            style={{ display: !showCookies ? 'none' : 'flex' }}>
            <div className="modalCookies__container">
                <img src={CookiesSVG} alt="Cookies Image" />
                <p>We use cookies to improve your experience on our website</p>
                <div className="buttons">
                    <button
                        className='btn secondary'
                        onClick={() => setShowCookies(false)}
                    >
                        MORE INFORMATION
                    </button>
                    <button
                        className='btn'
                        onClick={() => setShowCookies(false)}
                    >
                        YES, I ACCEPT
                    </button>
                </div>

            </div>
        </div>
    );
}

export default Cookies;