import * as React from 'react';
import * as styles from './PaymentSummary.scss';
import Cards from 'react-credit-cards';
import ICreditCard from '../../types/creditCard';
import IProduct from '../../types/product';
import Product from '../../components/Product';

interface IProps {
    currentCard: ICreditCard;
    products: IProduct[];
}

class PaymentSummary extends React.Component<IProps> {

    render() {
        const {
            currentCard: {
                creditCardNumber,
                name,
                expirationDate,
                cvc,
            },
            products,
        } = this.props;
        return (
            <section className={styles.paymantSummary}>
                <div className={styles.thanks}>
                    Thank you
                    <div>Your order is completed</div>
                </div>
                <div className={styles.summary}>
                    <div className={styles.title}>Summary</div>
                    <div className={styles.card}>
                        <Cards
                            number={creditCardNumber}
                            name={name}
                            expiry={expirationDate}
                            cvc={cvc}
                            focused='name'
                        />
                    </div>
                    <div className={styles.products}>
                        {products.map((item: IProduct) =>
                            <Product
                                key={item.id}
                                data={item}
                            />,
                        )}
                    </div>
                </div>
            </section>
        );
    }
}

export default PaymentSummary;
