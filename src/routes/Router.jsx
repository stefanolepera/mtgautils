import React, { Fragment } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import HomeScreen from '../screens/HomeScreen';
import DeckBuilderScreen from '../screens/DeckBuilderScreen';
import NotFoundScreen from '../screens/NotFoundScreen';

const Router = () => {
    return (
        <BrowserRouter>
            <Fragment>
                <Switch>
                    <Route exact path="/" component={HomeScreen} />
                    <Route
                        exact
                        path="/deckbuilder/:id?"
                        component={DeckBuilderScreen}
                    />
                    <Route component={NotFoundScreen} />
                </Switch>
            </Fragment>
        </BrowserRouter>
    );
};

export default Router;
