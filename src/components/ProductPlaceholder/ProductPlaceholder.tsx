import * as React from 'react';
import * as styles from './ProductPlaceholder.scss';

const ProductPlaceholder = () =>
    <section className={styles.productPlaceholderWrapper}>
        <div className={styles.left}></div>
        <div className={styles.right}>
            <div></div>
            <div></div>
        </div>
    </section>;

export default React.memo(ProductPlaceholder);
