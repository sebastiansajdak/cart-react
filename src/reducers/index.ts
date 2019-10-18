
import {
    combineReducers,
    Reducer,
} from 'redux';
import productReducer from './products';
import cardsReducer from './cards';
import stepperReducer from './stepper';

const reducers: Reducer<object> = combineReducers({
    products: productReducer,
    cards: cardsReducer,
    stepper: stepperReducer,
});

export default reducers;
