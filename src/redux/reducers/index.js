import { combineReducers } from 'redux';
import cards from './cards';
import decks from './decks';
import difficulty from './difficulty.js';
import game from './game.js';
import timer from './timer.js';

export default combineReducers({ cards, decks, difficulty, game, timer });
