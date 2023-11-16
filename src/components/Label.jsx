import TimerProgressBar from "./TimerProgressBar";
import { Stack, Typography } from "@mui/material"

const Label = ({time, duration}) => <Stack direction='row' spacing={1} width='100%'>
    <Typography variant='body1'>Elapsed Time:</Typography>
    <TimerProgressBar time={time} duration={duration} />
</Stack>

export default Label;