import { combineReducers } from 'redux';
import cards from './cards';
import decks from './decks';
import difficulty from './difficulty';
import game from './game';
import timer from './timer';

export default combineReducers({ cards, decks, difficulty, game, timer });
