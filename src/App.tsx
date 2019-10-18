import * as React from 'react';
import configureStore from './redux/configureStore';
import firebase from 'firebase';
import firebaseConfig from './firebaseConfig';
import reducers from './reducers';
import Routes from './containers/Routes';
import { BrowserRouter as Router } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import { Provider } from 'react-redux';

const App = () => {
    const store = configureStore({}, reducers);
    firebase.initializeApp(firebaseConfig);
    return (
        <Provider store={store}>
            <Router>
                <Routes />
            </Router>
        </Provider>
    );
};

export default hot(module)(App);
