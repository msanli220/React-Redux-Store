import React, { useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import uuid from 'uuid-random';
import Lodash from 'lodash';


const TextInput = (props) => {

    const [ data, setData ] = useState({});
    useEffect(
        () => {
            const errorMessageItem = Lodash.find(props?.error?.value, { propertyName: props.name });
            if ( errorMessageItem ) {
                setData({ isError: true, helperText: errorMessageItem?.message});
            } else {
                setData({ isError: false, helperText: null});
            }
        },
        [props.error]
    );

    function onChange(e) {
        if ( data.isError ) {
            setData(prevProps=>({...prevProps, isError: false}));
        }
        props.onChange(e);
    }

    return (
        <TextField
            id={uuid()}
            placeholder={props.placeholder}
            label={props.label}
            value={props.value || ""}
            onChange={onChange}
            onKeyPress={(e) => { if (props.onKeyPress) props.onKeyPress(e);  }}
            onFocus={(e) => { if (props.onFocus) props.onFocus(e);  }}
            inputProps={{ maxLength: props.maxLength , readOnly:props.readOnly}}
            InputProps={props.InputProps}
            inputRef={props.inputRef}
            autoComplete={props.autoComplete || "off"}
            autoFocus={props.autoFocus || false}
            error={data.isError}
            helperText={data.helperText || props.helperText}
            type={props.type}
            variant="outlined"
            margin="dense"
            fullWidth
            InputLabelProps={{shrink: true}}
            disabled={props.disabled || false}
            className={props.className}
        />
    );
}

export default TextInput;
