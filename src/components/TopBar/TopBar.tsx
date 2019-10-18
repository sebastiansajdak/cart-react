import * as React from 'react';
import * as styles from './TopBar.scss';
import CartIcon from '../../containers/CartIcon';
import { Link } from 'react-router-dom';

const TopBar = () =>
    <section className={styles.topBarWrapper}>
        <div className={styles.innerBlock}>
            <div className={styles.logo}>
                <Link to='./'>shop</Link>
            </div>
            <div className={styles.cart}>
                <CartIcon />
            </div>
        </div>
    </section>;

export default React.memo(TopBar);
