import './styles.css';
import LogoTopNav from '../../assets/LogoTopNav.svg';
import SearchIcon from '../../assets/SearchIcon.svg';
import Arrow from '../../assets/ArrowMenu.svg'
import { useState } from 'react';

const TopNav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [size, setsize] = useState(window.innerWidth);

    const handleMenu = () => {
        setIsOpen(!isOpen);
    }

    const handleTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

    window.addEventListener('resize', () => {
        setsize(window.innerWidth);
    })

    return (

        <>
            <div className="topnav">
                <div className={isOpen ? 'topnav__icon open' : 'topnav__icon'}
                    onClick={handleMenu}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className="topnav__logo"
                onClick={handleTop}
                >
                    <img src={LogoTopNav} alt="" />
                </div>
                <div className="topnav__search">
                    <img src={SearchIcon} alt="" />
                </div>

            </div>
            <nav className={isOpen ? 'topmenu open' : 'topmenu'}>
                <div className="topmenu__section">
                    <h3>Embarazo</h3>
                    <ul>
                        <li onClick={handleMenu}>Quiero ser mamá <img src={Arrow} alt="Arrow" /></li>
                        <li onClick={handleMenu}>Voy a ser mamá <img src={Arrow} alt="Arrow" /></li>
                        <li onClick={handleMenu}>Parto <img src={Arrow} alt="Arrow" /></li>
                    </ul>
                </div>
                <div className="topmenu__section">
                    <h3>Educación</h3>
                    <ul>
                        <li onClick={handleMenu}>Aprende a ser mamá <img src={Arrow} alt="Arrow" /></li>
                        <li onClick={handleMenu}>Educación para bebés <img src={Arrow} alt="Arrow" /></li>
                        <li onClick={handleMenu}>Educación para niños <img src={Arrow} alt="Arrow" /></li>
                    </ul>
                </div>
                {size>768 &&
                    <div className="topmenu__section">
                        <h3>Lorem</h3>
                        <ul>
                            <li onClick={handleMenu}>Id pulvinar scelerisque<img src={Arrow} alt="Arrow" /></li>
                            <li onClick={handleMenu}>Sit lacus viverra sit<img src={Arrow} alt="Arrow" /></li>
                            <li onClick={handleMenu}>Cras in eu tincidunt<img src={Arrow} alt="Arrow" /></li>
                        </ul>
                    </div>
                }
            </nav>
        </>





    );
}

export default TopNav;