import './styles.css'
import FaqsIcon from '../../assets/FaqsIcon.svg';
import Arrow from '../../assets/ArrowFaqs.svg';
import { useState } from 'react';

const ItemFaqs = ({faq,idOpen,setIdOpen}) => {
    const [isOpen, setIsOpen] = useState(false);
    
    const handleClick = () => {
        if(idOpen === faq.id){
            setIdOpen(null);
            setIsOpen(false);
        } else {
            setIdOpen(faq.id);
            setIsOpen(true);
        }
    }

    return (
        <div className={isOpen&&idOpen===faq.id ? "faqs__faq open" : "faqs__faq"}
            onClick={handleClick}>
            <div className="faqs__faq__question">
                <img src={FaqsIcon} alt="Question Icon" />
                <p>{faq.question}</p>
                <div className="arrowIcon">
                    <img src={Arrow} alt="Arrow" />
                </div>
            </div>
            <div className="faqs__faq__answer">
                <p>{faq.answer}</p>
            </div>
        </div>
    );
}

export default ItemFaqs;