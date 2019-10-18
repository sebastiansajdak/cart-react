import { CHANGE_STEP } from '../../constants/actionTypes';
import { Dispatch } from 'react-redux';

export const changeStep = (step: number) => (dispatch: Dispatch<any>) => {
    dispatch({
        type: CHANGE_STEP,
        payload: {
            data: {
                step,
            },
        },
    });
};
