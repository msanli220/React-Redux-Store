import React, { useCallback, useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Backdrop, Button, CircularProgress } from '@material-ui/core';
import DialogButtonTypeEnum from '../enum/DialogButtonTypeEnum';

/**
 *
 * @param props { Object }
 * @param props.open { Boolean }
 * @param props.onClose { Function }
 * @param props.title { String }
 * @param props.message { String }
 * @param props.backDrop { String }
 * @param props.onActionResult { Function }
 * @param props.children { any }
 * @param props.maxWidth { string }
 * @param props.actionButton { Function }
 * @param props.disabled { Boolean }
 * @param props.buttonType { String }
 * @returns {JSX.Element}
 * @constructor
 */
export default function DialogForm(props) {

    console.log("DialogForm", props)
    function acceptOnClick(e) {
        props.onActionResult(true);
    }

    function cancelOnClick(e) {
        props.onActionResult(false);
    }

    const renderButton = useCallback(
        () => {
            if ( props.actionButton !== null && props.actionButton !== undefined ) {
                return props.actionButton(props);
            } else {
                if ( props.buttonType === DialogButtonTypeEnum.TAMAM ) {
                    return <Button disabled={props.disabled} onClick={acceptOnClick} color="primary" variant={'contained'}>TAMAM</Button>
                }
                else if ( props.buttonType === DialogButtonTypeEnum.TAMAM_IPTAL ) {
                    return <React.Fragment>
                        <Button disabled={props.disabled} onClick={cancelOnClick} color="secondary" variant={"contained"}>IPTAL</Button>
                        <Button disabled={props.disabled} onClick={acceptOnClick} color="primary" variant={'contained'}>TAMAM</Button>
                    </React.Fragment>
                }
                /*else {
                    return <React.Fragment>
                        <Button disabled={props.disabled} onClick={cancelOnClick} color="secondary" variant={"contained"}>IPTAL</Button>
                         <Button disabled={props.disabled} onClick={acceptOnClick} color="primary" variant={'contained'}>TAMAM</Button>
                    </React.Fragment>
                }*/
            }
        },
        [props]
    )

    return (
        <Dialog
            open={props.open}
            keepMounted
            onClose={(event, reason) => {
                if ( reason === "backdropClick" ) return;
                props.onClose();
            }}
            fullWidth
            maxWidth={props.maxWidth ? props.maxWidth() :'sm'}
            disableEscapeKeyDown={true}
        >
            <DialogTitle>{props.title}</DialogTitle>

            <DialogContent>
                { props.message ? <DialogContentText> {props.message} </DialogContentText> : props.children }
                {props?.backDrop===true?  <Backdrop style={{zIndex: 999, color: '#fff'}} open={props.backDrop} >
                                          <CircularProgress color="inherit" />
                                         </Backdrop>: null
                }
            </DialogContent>


            <DialogActions> { renderButton() } </DialogActions>
        </Dialog>
    );
}
