import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import HomeScreen from '../screens/HomeScreen';
import DeckBuilderScreen from '../screens/DeckBuilderScreen';
import NotFoundScreen from '../screens/NotFoundScreen';

const Router = () => {
    return (
        <BrowserRouter>
            <div>
                <Switch>
                    <Route exact path="/" component={HomeScreen} />
                    <Route
                        exact
                        path="/deckbuilder/:id?"
                        component={DeckBuilderScreen}
                    />
                    <Route component={NotFoundScreen} />
                </Switch>
            </div>
        </BrowserRouter>
    );
};

export default Router;
