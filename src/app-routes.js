
import React from "react";
import {  Switch,Routes, Route,Redirect} from 'react-router-dom';
import shortid from 'shortid';

// page
import DashboardRoutes from './page/Dashboard/routes'

const routes = [
    ...DashboardRoutes,  
];

const AppRoutes = () => (
    
    <Switch>
         { routes.map(item => <Route key={shortid.generate()} exact path={item.path} component={item.component } />) }
         <Redirect to={'/'} />
    </Switch>
        
);

export default AppRoutes;
