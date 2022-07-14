import React from 'react';
import Button from '@mui/material/Button';

export default function Lap(props) {
  return (
    <div>
        <Button className="button" variant="outlined"  onClick={props.timelap}>
            Lap
        </Button>
    </div>
  )
}
