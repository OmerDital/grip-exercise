import { Button } from "@mui/material"

const TimerButton = ({onStart, onReset, running}) => {
    return <Button variant='contained' onClick={() => running ? onReset() : onStart()}>
        {running ? 'RESET' : 'START'}
        </Button>
}

export default TimerButton;