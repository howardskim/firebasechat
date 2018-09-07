import {combineReducers} from 'redux';
import {reducer as form} from 'redux-form';
import chat from './chat_reducer';

export default combineReducers({
    form,
    chat
});
