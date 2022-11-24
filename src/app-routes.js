import React from "react";
import { Switch, Route, Redirect } from 'react-router-dom';
import shortid from 'shortid';

// page
import DashboardRoutes from './page/GostergePaneli/routes'
import KullaniciYonetimiRoutes from './page/HesapYonetimi/KullaniciYonetimi/routes'


const routes = [
    ...DashboardRoutes,
    ...KullaniciYonetimiRoutes,
    
];

const AppRoutes = () => (
    <Switch>
        { routes.map(item => <Route key={shortid.generate()} exact path={item.path} component={item.component} />) }
        <Redirect to={'/dashboard'} />
    </Switch>
);

export default AppRoutes;
