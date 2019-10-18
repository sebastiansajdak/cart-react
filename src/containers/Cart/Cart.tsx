import * as React from 'react';
import IProduct from '../../types/product';
import Product from '../../components/Product';
import ProductPlaceholder from '../../components/ProductPlaceholder';

interface IProps {
    getProducts: () => void;
    products: IProduct[];
}

class Cart extends React.Component<IProps> {
    componentDidMount() {
        const { getProducts } = this.props;

        getProducts();
    }

    render() {
        const { products } = this.props;

        return (
            <section>
                {products.length ?
                    products.map((item: IProduct) =>
                        <Product
                            key={item.id}
                            data={item}
                        />,
                    )
                    :
                    <div>
                        <ProductPlaceholder />
                        <ProductPlaceholder />
                    </div>
                }
            </section>
        );
    }
}

export default Cart;
