import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        textTransform: 'none',
    },
    wrapper: {
        margin: theme.spacing(1),
        position: 'relative',
        textTransform: 'none',
    },
    buttonSuccess: {
        backgroundColor: green[500],
        '&:hover': {
            backgroundColor: green[700],
        },
        textTransform: 'none',
    },
    fabProgress: {
        color: green[500],
        position: 'absolute',
        top: -6,
        left: -6,
        zIndex: 1,
        textTransform: 'none',
    },
    buttonProgress: {
        color: green[500],
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: -12,
        marginLeft: -12,
        textTransform: 'none',
    },

}));

/**
 *
 * @param props { Object }
 * @param props.loading { Boolean }
 * @param props.disabled { Boolean }
 * @param props.fullWidth { Boolean }
 * @param props.icon { any }
 * @param props.style { any }
 * @param props.label { String }
 * @param props.color { String }
 * @param props.className { any }
 * @param props.onClick { Function }
 * @param props.variant { Function }
 * @returns {JSX.Element}
 * @constructor
 */
export default function ButtonMui(props) {
    const classes = useStyles();

    const handleButtonClick = (e) => {
        e.preventDefault();
        props.onClick(e);
    };

    return (
        <div className={classes.wrapper}>
            <Button
                variant={props.variant || "contained"}
                color={props.color?props.color:"primary"}
                disabled={props.loading || props.disabled}
                onClick={handleButtonClick}
                fullWidth={props.fullWidth}
                type={"button"}
                startIcon={props.icon}
                style={props.style}
                className={props.className}
            >
                { props.loading && <CircularProgress size={24} className={classes.buttonProgress} /> }
                { props.label }
            </Button>
        </div>
    );
}
