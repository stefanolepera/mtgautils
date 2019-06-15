import React from 'react';
import Router from './routes/Router';
import Header from './components/Header';
import { Provider } from 'react-redux';
import store from './store/store';

const App = () => {
    return (
        <Provider store={store}>
            <Header />
            <Router />
        </Provider>
    );
};

export default App;
