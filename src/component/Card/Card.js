import React from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import './Card.css';
import Tilt from 'react-tilt';

const Card = ({ key, name, image, cards }) => {
    if (!image) {
        image = 'https://upload.wikimedia.org/wikipedia/en/thumb/a/aa/Magic_the_gathering-card_back.jpg/200px-Magic_the_gathering-card_back.jpg'
    }
    return (
        <Flippy className="card__flip"
            flipOnHover={false}
            flipOnClick={true}
            flipDirection="horizontal"
            ref={(r) => this.flippy = r} // to use toggle method like       this.flippy.toggle()
            // if you pass isFlipped prop component will be controlled      component.
            // and other props, which will go to div
        >
            <Tilt className="Tilt, card__tilt" options={{ max : 25 }} >
                <FrontSide className='card__front'>
                    <div className="Tilt-inner">
                        <div className="card__img">
                            <img src={image} alt={name} />
                        </div>
                    </div>
                </FrontSide>
            </Tilt>
            <BackSide className="card__back"
                style={{ backgroundColor: 'purple'}}>
                MTG CARD BACK
            </BackSide>
        </Flippy>
    )
}

export default Card;