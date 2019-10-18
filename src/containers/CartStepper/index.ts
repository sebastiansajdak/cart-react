import CartStepper from './CartStepper';
import IStore from '../../types/store';
import { changeStep } from '../../actions/stepper';
import { connect } from 'react-redux';

const mapStatetoProps = ({ stepper }: IStore) => ({
    step: stepper.step,
});

const mapDispatchToProps = {
    changeStep,
};

export default connect(
    mapStatetoProps,
    mapDispatchToProps,
)(CartStepper as any);
