import IStore from '../../types/store';
import PaymentSummary from './PaymentSummary';
import { connect } from 'react-redux';

const mapStatetoProps = ({ cards, products }: IStore) => ({
    currentCard: cards.currentCard,
    products: products.items,
});

export default connect(
    mapStatetoProps,
)(PaymentSummary);
