import * as React from 'react';
import * as styles from './Routes.scss';
import CartStepper from '../CartStepper';
import TopBar from '../../components/TopBar';
import { Route } from 'react-router-dom';

class Routes extends React.Component<any> {
    render() {
        return (
            <section className={styles.wrapper}>
                <TopBar />
                <Route exact path='/' component={CartStepper} />
            </section>
        );
    }
}

export default Routes;
