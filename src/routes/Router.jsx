import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Home from './Home';
import DeckBuilder from './DeckBuilder';
import NotFound from './NotFound';
import { Header } from '../components';

const Router = () => (
    <BrowserRouter>
        <>
            <Header />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/deckbuilder/:id?" component={DeckBuilder} />
                <Route component={NotFound} />
            </Switch>
        </>
    </BrowserRouter>
);

export default Router;
