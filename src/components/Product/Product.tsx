import * as React from 'react';
import * as styles from './Product.scss';
import IProduct from '../../types/product';

const Product = ({ data }: { data: IProduct }) =>
    <section className={styles.productWrapper}>
        <div className={styles.imgBlock}>
            <img src={data.imgUrl} />
        </div>
        <div className={styles.content}>
            <h2 className={styles.title}>{data.name}</h2>
            <h3 className={styles.description}>{data.description}</h3>
            <span className={styles.price}>{data.price}$</span>
        </div>
    </section>;

export default React.memo(Product);
