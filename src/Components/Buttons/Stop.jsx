import React from 'react';
import Button from '@mui/material/Button';

export default function Stop(props){
    return(
        <div>
            <Button className="button" variant="outlined" onClick={props.stop}>
                Stop
            </Button>
        </div>
    );
}
