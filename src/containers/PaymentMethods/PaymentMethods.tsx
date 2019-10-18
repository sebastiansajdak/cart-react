import * as React from 'react';
import * as styles from './PaymentMethods.scss';
import CardPlaceholder from '../../components/CardPlaceholder';
import Cards from 'react-credit-cards';
import cn from 'classnames';
import ICreditCard from '../../types/creditCard';
import Loader from '../../components/Loader';
import 'react-credit-cards/es/styles-compiled.css';

interface IProps {
    getCards: () => void;
    setCard: (card: ICreditCard) => void;
    addNewCard: (card: ICreditCard) => void;
    cards: ICreditCard[];
    isFetching: boolean;
}

interface IState {
    activeCard: number;
    newCard: {
        creditCardNumber: string;
        name: string;
        expiry: string;
        cvc: string;
        focused: string;
    };
}

type IForm = React.FormEvent<HTMLFormElement>;

class PaymentMethods extends React.Component<IProps, IState> {
    state: IState = {
        activeCard: 0,
        newCard: {
            creditCardNumber: '',
            name: '',
            expiry: '',
            cvc: '',
            focused: '',
        },
    };

    componentDidMount() {
        const { getCards } = this.props;

        window.scrollTo(0, 0);
        getCards();
    }

    changeCard = (card: number) => {
        const {
            setCard,
            cards,
        } = this.props;
        this.setState(() => ({
            activeCard: card,
        }));

        setCard(cards[card]);
    }

    handleInputChange = ({ target }: any) => {
        if (target.name === 'creditCardNumber') {
            target.value = target.value.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim();
        } else if (target.name === 'expiry') {
            if (!target.value.includes('/')) {
                target.value = target.value.replace(/[^\dA-Z]/g, '').replace(/(.{2})/g, '$1/').trim();
            }
        }

        this.setState(() => ({
            newCard: {
                ...this.state.newCard,
                [target.name]: target.value,
            },
        }));
    }

    handleInputFocus = ({ target }: any) => {
        this.setState(() => ({
            newCard: {
                ...this.state.newCard,
                focused: target.name,
            },
        }));
    }

    handleSubmit = async (e: IForm) => {
        e.preventDefault();
        const {
            newCard: {
                name,
                creditCardNumber,
                cvc,
                expiry,
            },
        } = this.state;
        const { addNewCard } = this.props;

        addNewCard({
            name,
            creditCardNumber,
            cvc,
            expirationDate: expiry,
        });
    }

    render() {
        const {
            cards,
            isFetching,
        } = this.props;
        const {
            activeCard,
            newCard: {
                creditCardNumber,
                name,
                expiry,
                cvc,
                focused,
            },
        } = this.state;

        return (
            <section className={styles.paymentWrapper}>
                <div>
                    <div className={styles.title}>Wybierz kartę</div>
                    {cards.length ?
                        <section className={styles.cardWrapper}>
                            {cards.map((item: ICreditCard, index: number) =>
                                <div
                                    key={item.id}
                                    className={
                                        cn(
                                            styles.card, activeCard === index && styles.active,
                                        )
                                    }
                                >
                                    <Cards
                                        number={item.creditCardNumber}
                                        name={item.name}
                                        expiry={item.expirationDate}
                                        cvc={item.cvc}
                                        focused='name'
                                    />
                                </div>,
                            )}
                            <div className={styles.controls}>
                                {activeCard > 0 &&
                                    <button
                                        onClick={() => this.changeCard(activeCard - 1)}
                                    >
                                        prev card
                                    </button>
                                }
                                {activeCard < cards.length - 1 &&
                                    <button
                                        onClick={() => this.changeCard(activeCard + 1)}
                                    >
                                        next card
                                    </button>
                                }
                            </div>
                        </section>
                        :
                        <CardPlaceholder />
                    }
                </div>
                <div>
                    <div className={styles.title}>Dodaj nową kartę</div>
                    <div className={styles.newCardWrapper}>
                        <Cards
                            number={creditCardNumber}
                            name={name}
                            expiry={expiry}
                            cvc={cvc}
                            focused={focused}
                        />
                        <form onSubmit={this.handleSubmit}>
                            <input
                                type='tel'
                                name='creditCardNumber'
                                maxLength={19}
                                placeholder='Number: 0000 0000 0000 0000'
                                pattern='[\d| ]{16,22}'
                                required
                                onChange={this.handleInputChange}
                                onFocus={this.handleInputFocus}
                            />
                            <input
                                type='text'
                                name='name'
                                maxLength={30}
                                placeholder='Name: John Smith'
                                required
                                onChange={this.handleInputChange}
                                onFocus={this.handleInputFocus}
                            />
                            <input
                                type='tel'
                                name='expiry'
                                maxLength={5}
                                placeholder='Expiry: 12/23'
                                pattern='\d\d/\d\d'
                                required
                                onChange={this.handleInputChange}
                                onFocus={this.handleInputFocus}
                            />
                            <input
                                type='tel'
                                name='cvc'
                                maxLength={4}
                                placeholder='CVC: 123'
                                pattern='\d{3,4}'
                                required
                                onChange={this.handleInputChange}
                                onFocus={this.handleInputFocus}
                            />
                            <button type='submit'>Add card</button>
                        </form>
                        {isFetching && <Loader />}
                    </div>
                </div>
            </section>
        );
    }
}

export default PaymentMethods;
