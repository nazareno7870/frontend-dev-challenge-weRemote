import './styles.css'
const Card = ({article}) => {
    return (
        <div className="card">
            <div className="card__image">
                <img src={article.img} alt={article.title} />
            </div>
            <div className="card__content">
                <div className="card__content__category">
                    <p>{article.category}</p>
                </div>
                <div className="card__content__title">
                    <h3>{article.title}</h3>
                </div>
                <div className="card__content__description">
                    <p>{article.description}</p>
                </div>
            </div>
        </div>

    );
}

export default Card;