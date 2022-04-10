import './styles.css'
import Card from './Card';
import {articles} from '../../assets/Articles.json'
import { useState } from 'react';

const Articles = () => {
    const [size, setsize] = useState(window.innerWidth);
    window.addEventListener('resize', () => {
        setsize(window.innerWidth);
    })

    return (
        <div className="articles">
            {
                size>768
                ?articles.slice(0,6).map(article => (
                    <Card key={article.id} article={article} />)
                )
                :articles.slice(0,3).map(article => (
                    <Card key={article.id} article={article} />)
                )
            }
        </div>
    );
}

export default Articles;