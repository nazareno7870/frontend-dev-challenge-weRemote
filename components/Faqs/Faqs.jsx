import './styles.css'
import ItemFaqs from './ItemFaqs';
import {faqs} from '../../assets/Faqs.json'
import { useState } from 'react';

const Faqs = () => {
    const [idOpen, setIdOpen] = useState(null);

    return (

        <div className="faqs">
            {
                faqs.map(faq => (
                    <ItemFaqs key={faq.id}
                    setIdOpen={setIdOpen}
                    idOpen={idOpen}
                    faq={faq} />
                ))
            }

        </div>


    );
}

export default Faqs;