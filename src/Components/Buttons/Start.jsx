import React from 'react';
import Button from '@mui/material/Button';

export default function Start(props){
    return(
        <div>
            <Button className="button" variant="outlined" onClick={props.start}>
                Start
            </Button>
        </div>
    );
}
