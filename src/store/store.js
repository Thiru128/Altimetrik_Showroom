import { createStore } from 'redux';
import carReducer from './reducers/carReducer';

const store = createStore(carReducer);

export default store;