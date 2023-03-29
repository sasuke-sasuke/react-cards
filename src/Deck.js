import {useState, useEffect} from 'react';
import {createNewDeck} from './createNewDeck'
import Card from './Card'
import Button from './Button'
import './Deck.css'
import axios from 'axios';
import {v4 as uuid} from 'uuid';

const Deck = () => {
    const API_URL = `https://deckofcardsapi.com/api/deck/`
    const [ deck, setDeck ] = useState(null);
    const [ card, setCard ] = useState([]);
    
    
    useEffect(() => {
        const initializeDeck = async () => {
            const newDeck = await createNewDeck();
            setDeck(newDeck)
        }
        initializeDeck();
    }, []);

    

    const drawCard = async () => {
        try {
            const res = await axios.get(`${API_URL}${deck.deck_id}/draw`);

            if (res.data.remaining === 0) throw new Error(`No cards remaining!`);

            const newCard = res.data.cards[0]
            setCard(card => [...card, {
                id: uuid(),
                image: newCard.image
                }
            ])
        } catch (err) {
            alert(err);
        }
    }

    const shuffleDeck = async () => {
        try {
            await axios.get(`${API_URL}${deck.deck_id}/shuffle`);
            setCard([]);
        } catch (err) {
            alert(err);
        }
    }

    return (
        <div className='Deck'>
            <Button name='Draw Card' func={drawCard} />
            <Button name='Shuffle Deck' func={shuffleDeck} />
            <div>
                {card.map(c => (
                    <Card key={c.id} image={c.image} />
                ))}
            </div>
            
        </div>
    )
}

export default Deck;