import React from 'react';
import Router from './routes/Router';
import { Provider } from 'react-redux';
import store from './store/store';

const App = () => (
    <Provider store={store}>
        <Router />
    </Provider>
);

export default App;
