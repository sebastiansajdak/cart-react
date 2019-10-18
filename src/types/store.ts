import IProduct from './product';
import ICreditCard from './creditCard';

export default interface IStore {
    products: {
        items: IProduct[];
    };
    cards: {
        items: ICreditCard[];
        currentCard: ICreditCard;
        isFetching: boolean;
    };
    stepper: {
        step: number;
    }
}
