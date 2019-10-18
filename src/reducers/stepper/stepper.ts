import IStore from '../../types/store';
import typeToReducer from 'type-to-reducer';
import {
    CHANGE_STEP,
} from '../../constants/actionTypes';

type IState = IStore['stepper'];

export const initialState: IState = {
    step: 0,
};

export default typeToReducer({
    [CHANGE_STEP]: (state, action): IState => ({
        ...state,
        step: action.payload.data.step,
    }),
}, initialState);
