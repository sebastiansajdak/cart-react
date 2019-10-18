import * as React from 'react';
import * as styles from './Loader.scss';

const Loader = () =>
    <section className={styles.loaderWrapper}>
        <div>Loading...</div>
    </section>;

export default React.memo(Loader);
