import React from 'react'
import { Grid,Paper, Avatar, TextField, Button,Link } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import {useState,useCallback} from 'react'
import {connect} from "react-redux";
import AccountAction from '../../action/Page/Auth/AccountAction';

function Authentication ( props ) {
    console.log("Authentication.rendered", props);
  
    const paperStyle={padding :20,height:'70vh',width:280, margin:"20px auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const buttonStyle={margin:'8px 0'}
    const textFieldStyle ={ marginBottom:'10px'}
    const [ formData, setFormData ] = useState({});


    function usernameOnChange(e) {
        setFormData(prevState => ({...prevState, username: e.target.value}));
    }
    function passwordOnChange(e) {
        setFormData(prevState => ({...prevState, password: e.target.value}));
    }


    const onSubmit = useCallback(
        (e) => {

            e.preventDefault();
            console.log("formdata:",formData)
            props.doSignIn({ serviceData: { ...formData } });

        },
        [formData]
    );
    return (
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                     <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <TextField label='Username' placeholder='Enter username' style={textFieldStyle}   onChange={usernameOnChange} variant="outlined" fullWidth required/>
            
                <TextField label='Password' placeholder='Enter password' style={textFieldStyle} onChange={passwordOnChange} type='password' variant="outlined" fullWidth required/>
        
                <Button type='submit' color='primary' variant="contained" style={buttonStyle}  onClick ={onSubmit} fullWidth>Sign in</Button>
                

            </Paper>
        </Grid>

    );
}
const mapStateToProps = function ( state, props ) {
    console.log("SignIn.mapStateToProps: ", state.AuthPageStore );
  
    const signInIsLoading = state.AuthPageStore.AccountServiceStore.signIn.isLoading;
    const signInError = state.AuthPageStore.AccountServiceStore.signIn.error;
    const token = localStorage.getItem("token") || state.AuthPageStore.AccountServiceStore.signIn.payload;

    return {
        signInIsLoading,
        signInError,
        token,
    }
}

const mapDispatchToProps = function ( dispatch ) {
    console.log("SignIn.mapDispatchToProps");
    const accountAction = new AccountAction( dispatch );

    return {
        doSignIn: (params) => { accountAction.signIn(params); },
        doClean: () => { accountAction.signInClean(); },
    }
}

const Component = React.memo(Authentication, (prevProps, nextProps) => {
    console.log("---- SignIn.React.memo ----\n", "PrevProps:", prevProps, "NextProps:", nextProps);

    if( prevProps.isLoading !== nextProps.isLoading ) {
        console.log("SignIn.React.doRender");
        return false;
    }
    console.log("SignIn.doNotRender");
    return true;
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);