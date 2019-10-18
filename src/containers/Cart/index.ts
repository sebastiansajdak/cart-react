import Cart from './Cart';
import IStore from '../../types/store';
import { connect } from 'react-redux';
import {
    apiGetProducts,
} from '../../actions/products';

const mapStatetoProps = ({ products }: IStore) => ({
    products: products.items,
});

const mapDispatchToProps = {
    getProducts: apiGetProducts,
};

export default connect(
    mapStatetoProps,
    mapDispatchToProps,
)(Cart as any);
