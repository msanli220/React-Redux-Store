import {connect} from "react-redux";
import Authentication from './page/Authentication';
import React from 'react'
import Lodash from 'lodash'
import { ThemeProvider } from 'react-bootstrap';
import { createTheme } from '@material-ui/core/styles';

import AppRoutes from './app-routes';


const theme = createTheme({
    palette: {
        primary: {
            main: "#333996!important",
            light: '#3c44b126!important'
        },
        secondary: {
            main: "#f83245!important",
            light: '#f8324526!important'
        },
        background: {
            default: "#f4f5fd!important"
        },
    },
    overrides:{
        MuiAppBar:{
            root:{
                transform:'translateZ(0)'
            }
        }
    },
    props:{
        MuiIconButton:{
            disableRipple:true
        }
    },
    typography: {
        fontFamily: [
            'Nunito',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif'
        ].join(','),
    }

})

function App( props ) {
    console.log("App.rendered: ",props.token);

    if(!Lodash.isEmpty(props.token)){
        console.log("isLoginSuccess!!!")
        return (
            <ThemeProvider theme={theme}>
            <AppRoutes />
            </ThemeProvider>
        );
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
