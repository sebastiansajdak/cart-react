import firebase from 'firebase';
import IProduct from '../../types/product';
import { DATABASE_NAME } from '../../constants/common';
import { GET_PRODUCTS } from '../../constants/actionTypes';
import { Dispatch } from 'react-redux';

export const apiGetProducts = () => async (dispatch: Dispatch<any>) => {
    const db = firebase.firestore();
    const collection = db
        .collection(DATABASE_NAME);

    const products: IProduct[] = [];

    await collection.get().then((snapshot: any) => {
        snapshot.forEach((doc: any) => {
            products.push({
                id: doc.id,
                ...doc.data(),
            });
        });
    });

    dispatch({
        type: GET_PRODUCTS,
        payload: {
            data: {
                products,
            },
        },
    });
};
