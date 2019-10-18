import firebase from 'firebase';
import ICreditCard from '../../types/creditCard';
import { DATABASE_CARDS } from '../../constants/common';
import { Dispatch } from 'react-redux';
import {
    GET_CARDS,
    SET_CARD,
    ADDED_NEW_CARD,
    ADDING_CARD,
} from '../../constants/actionTypes';

export const apiGetCards = () => async (dispatch: Dispatch<any>) => {
    const db = firebase.firestore();
    const collection = db
        .collection(DATABASE_CARDS)
        .orderBy('created', 'desc');

    const cards: ICreditCard[] = [];

    await collection.get().then((snapshot: any) => {
        snapshot.forEach((doc: any) => {
            cards.push({
                id: doc.id,
                ...doc.data(),
            });
        });
    });

    dispatch({
        type: GET_CARDS,
        payload: {
            data: {
                cards,
            },
        },
    });

    dispatch(setCard(cards[0]));
};

export const apiAddNewCard = (data: ICreditCard) => async (dispatch: Dispatch<any>) => {
    dispatch({
        type: ADDING_CARD,
        payload: {},
    });

    const db = firebase.firestore();
    const newCard = await db.collection(DATABASE_CARDS).add({
        ...data,
        created: new Date(),
    });

    if (newCard.id) {
        dispatch({
            type: ADDED_NEW_CARD,
            payload: {},
        });
    }

    dispatch(apiGetCards());
};

export const setCard = (card: ICreditCard) => ({
    type: SET_CARD,
    payload: {
        data: {
            card,
        },
    },
});
