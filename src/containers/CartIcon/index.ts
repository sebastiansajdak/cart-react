import CartIcon from './CartIcon';
import IStore from '../../types/store';
import { changeStep } from '../../actions/stepper';
import { connect } from 'react-redux';

const mapStatetoProps = ({ products }: IStore) => ({
    productsCount: products.items.length,
});

const mapDispatchToProps = {
    changeStep,
};

export default connect(
    mapStatetoProps,
    mapDispatchToProps,
)(CartIcon as any);
