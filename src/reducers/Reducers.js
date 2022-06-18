import { combineReducers } from "redux";
import UserReducer from './userReducer.js';
import newDeck from './newDeck.js';
import configBaralho from './configBaralho.js';
import newFlashCard from './newFlashCard.js';
import configCartoes from './configCartoes.js';

export default combineReducers({
    user: UserReducer,
    deckForm: newDeck,
    baralho: configBaralho,
    flashCard: newFlashCard,
    cartoes: configCartoes
})