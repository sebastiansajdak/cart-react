import IStore from '../../types/store';
import typeToReducer from 'type-to-reducer';
import {
    GET_PRODUCTS,
} from '../../constants/actionTypes';

type IState = IStore['products'];

export const initialState: IState = {
    items: [],
};

export default typeToReducer({
    [GET_PRODUCTS]: (state, action): IState => ({
        ...state,
        items: action.payload.data.products,
    }),
}, initialState);
