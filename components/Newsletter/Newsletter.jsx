import './styles.css'
import NewsletterHero from '../../assets/NewsletterHero.svg'
import { useState } from 'react';
const Newsletter = () => {
    const [email, setemail] = useState('');
    const [isValid, setIsValid] = useState(false);

    const handleEmail = (e) => {
        setemail(e.target.value);
        setIsValid(isMailValid(e.target.value));
    }

    const isMailValid = (email) => {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Te Suscribiste a nuestro Newsletter');
        setemail('');
        setIsValid(false);
    }

    return (
        <form className="newsletter" onSubmit={handleSubmit}>
            <div className="newsletter__hero">
                 <img src={NewsletterHero} alt="Newsletter Hero" />
            </div>
            <div className="newsletter__container">
                <div className="newsletter__container__title">
                    <h4>Suscribete al Newsletter</h4>
                    <p>La Mente es Maravillosa</p>
                </div>
                <div className="newsletter__container__input">

                    <input
                        type="email"
                        value={email}
                        onChange={handleEmail}
                        placeholder="Inserte su correo" />

                    <button
                        className={isValid ? 'btn' : `btn btn--disabled`}
                        disabled={!isValid}
                    >
                        Suscribete
                    </button>



                </div>
            </div>
        </form>
    );
}

export default Newsletter;