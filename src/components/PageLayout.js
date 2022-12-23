import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Backdrop, CircularProgress, Divider } from '@material-ui/core';
import Lodash from 'lodash';


const useStyles=makeStyles();
export default function Index({ title, children, actionButtons, isLoading, dialog, dialogButtonType, dialogActionButton, dialogCallback }) {

    const classes = useStyles();
    

    return (
        <React.Fragment>
            <div className={classes.titleContainer}>

                <h3 style={{marginLeft:15}}>{title}</h3>
              
            </div>

            <Divider light variant="middle" />

            { children }

            <Backdrop style={{zIndex: 999, color: '#fff'}} open={isLoading} >
                <CircularProgress color="inherit" />
            </Backdrop>

           

        </React.Fragment>
    );
}
