import IStore from '../../types/store';
import PaymentMethods from './PaymentMethods';
import { connect } from 'react-redux';
import {
    apiGetCards,
    apiAddNewCard,
    setCard,
} from '../../actions/cards';

const mapStatetoProps = ({ cards }: IStore) => ({
    cards: cards.items,
    isFetching: cards.isFetching,
});

const mapDispatchToProps = {
    setCard,
    getCards: apiGetCards,
    addNewCard: apiAddNewCard,
};

export default connect(
    mapStatetoProps,
    mapDispatchToProps,
)(PaymentMethods as any);
