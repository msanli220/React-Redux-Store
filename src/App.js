import {connect} from "react-redux";
import Authentication from './page/Authentication';
import React, { useEffect } from 'react'
import Lodash from 'lodash'
import Dashboard from "./page/Dashboard";
function App( props ) {
    console.log("App.rendered: ",props.token);

    if(!Lodash.isEmpty(props.token)){
        console.log("isLoginSuccess!!!")
        return <Dashboard/>
    }

    return <Authentication/>;
}

const mapStateToProps = function(state, props) {
    console.log("App.mapStateToProps", state.AuthPageStore);
    const token = localStorage.getItem("token") || state.AuthPageStore.AccountServiceStore.signIn.payload;
   
    return {
        token
    }
}

const mapDispatchToProps = function (dispatch) {
    console.log("App.mapDispatchToProps");
  
    return {
       
    }
}

const Component = React.memo(App, (prevProps, nextProps) => {
    console.log("---- App.React.memo ----\n", "PrevProps:", prevProps, "NextProps:", nextProps);

    if( prevProps.token !== nextProps.token ) {
        console.log("App.React.doRender");
        return false;
    }
    console.log("App.doNotRender");
    return true;
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
