import { combineReducers } from 'redux';
import ZhomeReducer from '../scenes/home/ZhomeReducer'
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
   ZhomeReducer: ZhomeReducer,
   form: formReducer
})