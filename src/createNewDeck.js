import axios from 'axios';

const createNewDeck = async () => {
    const DECK_API = 'https://deckofcardsapi.com/api/deck/new/shuffle'
    const response = await axios.get(DECK_API);
    return response.data;
}

export {createNewDeck};