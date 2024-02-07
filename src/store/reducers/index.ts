import { combineReducers } from 'redux';
import carReducer from './carReducer';

const rootReducer = combineReducers({
  cars: carReducer,
});

export default rootReducer;