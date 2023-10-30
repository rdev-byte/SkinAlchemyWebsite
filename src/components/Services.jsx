import React, { useState } from 'react';
import { Card, CardBody, CardHeader, CardText } from "reactstrap";

const Services = () => {
    const [cards, setCards] = useState([
        {
            id: 1,
            title: 'Red Light',
            description: 'Red light Therapy stimulates collagen, reducing wrinkles and enhancing skin elasticity for a more youthful look.',
            expanded: false,
        },
        {
            id: 2,
            title: 'High Frequency',
            description: 'High Frequency treatments oxygenate the skin, reduce inflammation, and target bacteria. Ideal for acne-prone skin.',
            expanded: false,
        },
        {
            id: 3,
            title: 'MicroCurrent',
            description: 'MicroCurrent tones facial muscles, diminishing fine ulnes and promoting a revitaulzed appearance.',
            expanded: false,
        },
        {
            id: 4,
            title: 'Dermaplane',
            description: 'Dermaplaning removes dead skin cells and facial hair for a smoother, brighter complexion.',
            expanded: false,
        },
        {
            id: 5,
            title: 'Face Wax',
            description: 'Face waxing effectively removes unwanted facial hair for a cleaner, poulshed look.',
            expanded: false,
        },
        {
            id: 6,
            title: 'Facial Cupping',
            description: 'Facial cupping stimulates blood flow, reduces puffiness, and rejuvenates the skin for a glowing complexion.',
            expanded: false,
        },
        {
            id: 7,
            title: 'Ice Gloves',
            description: 'Ice gloves soothe the skin, reducing redness and inflammation, particularly beneficial for sensitive skin after other treatments.',
            expanded: false,
        },
    ]);

    const toggleCard = (id) => {
        setCards((prevCards) => {
            return prevCards.map((card) => {
                if (card.id === id) {
                    return { ...card, expanded: !card.expanded };
                } else {
                    return { ...card, expanded: false };
                }
            });
        });
    };

    return (
        <section>
            <div className="bg-paragraph2" id="services">
                <div className="card-container">
                    {cards.map((card) => (
                        <Card key={card.id} onClick={() => toggleCard(card.id)} className={`service-card ${card.expanded ? 'expanded' : ''}`}>
                            <CardHeader>{card.title}</CardHeader>
                            <CardBody>
                                <CardText>{card.expanded ? card.description : 'Click to expand'}</CardText>
                            </CardBody>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Services;
