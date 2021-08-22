import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Index = lazy(() => import('../components/index'));
const Details = lazy(() => import('../components/details'))

const Router = () => (
    <BrowserRouter>
        <Suspense fallback={<div>Carregando...</div>}>
            <Switch>
                <Route exact path="/" component={Index} />
                <Route exact path="/details/:movie_id" component={Details} />
            </Switch>
        </Suspense>
    </BrowserRouter>
)
export default Router;