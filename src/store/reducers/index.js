import { combineReducers } from 'redux';

import navReducer from './navReducer';


const rootReducer = combineReducers({
    navWork: navReducer,
});


export default rootReducer;