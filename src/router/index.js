import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Index = lazy(() => import('../components/index'));

const Router = () => (
    <BrowserRouter>
        <Suspense fallback={<div>Carregando...</div>}>
            <Switch>
                <Route exact path="/" component={Index} />
                {/* <Route exact path="/:guard/recuperar-senha/:token" component={NewPassword} /> */}
            </Switch>
        </Suspense>
    </BrowserRouter>
)
export default Router;