import { Slider, Stack, Typography } from "@mui/material"

const TimerSlider = ({ setDuration, duration }) => <Stack spacing={2} direction='row' width='100%'>
    <Typography variant='body1'>
        Duration
    </Typography>
    <Slider
        value={duration}
        onChange={(e, value) => setDuration(value)}
        min={15}
        max={120}
        valueLabelDisplay="auto"
    />
</Stack>

export default TimerSlider;