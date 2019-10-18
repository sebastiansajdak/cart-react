import * as React from 'react';
import * as styles from './CartIcon.scss';
import cn from 'classnames';

interface IProps {
    productsCount: number;
    changeStep: (step: number) => void;
}

class CartIcon extends React.PureComponent<IProps> {
    render() {
        const {
            productsCount,
            changeStep,
        } = this.props;

        return (
            <section
                className={styles.cartIconWrapper}
                onClick={() => changeStep(0)}
            >
                <span className={styles.count}>{productsCount}</span>
                <i className={cn('fas fa-shopping-cart', styles.active)}></i>
            </section>
        );
    }
}

export default CartIcon;
