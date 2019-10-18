import * as React from 'react';
import * as styles from './CartStepper.scss';
import Cart from '../../containers/Cart';
import PaymentMethods from '../PaymentMethods';
import PaymentSummary from '../PaymentSummary';
import Stepper from 'react-stepper-horizontal';

interface IProps {
    changeStep: (step: number) => void;
    step: number;
}

type IMouse = React.MouseEvent<HTMLElement>;

class CartStepper extends React.PureComponent<IProps> {
    changeStep = (e: IMouse, step: number) => {
        e.preventDefault();
        const { changeStep } = this.props;

        changeStep(step);
    }

    render() {
        const { step } = this.props;
        const steps = [
            {
                title: 'Cart summary',
                onClick: (e: IMouse) => this.changeStep(e, 0),
            },
            {
                title: 'Paymant methods',
                onClick: (e: IMouse) => this.changeStep(e, 1),
            },
            {
                title: 'Summary',
                onClick: (e: IMouse) => this.changeStep(e, 2),
            },
        ];

        return (
            <section className={styles.cartStepperWrapper}>
                <Stepper
                    steps={steps}
                    activeStep={step}
                    defaultColor='#dc395f'
                    activeColor='#00d8bb'
                />

                <div className={styles.steps}>
                    {[<Cart />, <PaymentMethods />, <PaymentSummary />][step]}
                </div>
                <div className={styles.nextStepWrapper}>
                    {step < steps.length - 1 &&
                        <button
                            className={styles.next}
                            onClick={(e: any) => this.changeStep(e, step + 1)}
                        >
                            {step === 1 ? 'Pay' : 'Next'}
                        </button>
                    }
                </div>
            </section>
        );
    }
}

export default CartStepper;
