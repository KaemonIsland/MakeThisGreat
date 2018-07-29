import React from 'react';
import Card from '../Card/Card';
import './CardList.css';

const CardList = ({ cards }) => {
    
    return (
        <div className="cards">
        {

            cards.map(card => {
                return <Card 
                    key={card.id} 
                    name={card.name}
                    image={card.imageUrl}
                    cards={card}
                />
            })
        }
        </div>
    )
}

export default CardList;