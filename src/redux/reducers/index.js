import { combineReducers } from 'redux';
import cards from './cards';
import decks from './decks';
import difficulty from './difficulty.js';

export default combineReducers({ cards, decks, difficulty });
