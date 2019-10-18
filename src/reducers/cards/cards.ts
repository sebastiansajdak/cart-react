import IStore from '../../types/store';
import typeToReducer from 'type-to-reducer';
import {
    GET_CARDS,
    SET_CARD,
    ADDED_NEW_CARD,
    ADDING_CARD,
} from '../../constants/actionTypes';

type IState = IStore['cards'];

export const initialState: IState = {
    items: [],
    currentCard: null,
    isFetching: false,
};

export default typeToReducer({
    [GET_CARDS]: (state, action): IState => ({
        ...state,
        items: action.payload.data.cards,
    }),
    [SET_CARD]: (state, action): IState => ({
        ...state,
        currentCard: action.payload.data.card,
    }),
    [ADDED_NEW_CARD]: (state): IState => ({
        ...state,
        isFetching: false,
    }),
    [ADDING_CARD]: (state): IState => ({
        ...state,
        isFetching: true,
    }),
}, initialState);
