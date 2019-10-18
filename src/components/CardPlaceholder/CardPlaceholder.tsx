import * as React from 'react';
import * as styles from './CardPlaceholder.scss';

const CardPlaceholder = () =>
    <section className={styles.cardPlaceholderWrapper}>
        <div></div>
    </section>;

export default React.memo(CardPlaceholder);
