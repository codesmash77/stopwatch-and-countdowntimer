import React from 'react';
import Button from '@mui/material/Button';

export default function Reset(props){
    return(
        <div>
            <Button className="button" variant="outlined"  onClick={props.reset}>
                Reset
            </Button>
        </div>
    );
}