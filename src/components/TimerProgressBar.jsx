import { Box, Typography } from "@mui/material"

const TimerProgressBar = ({ time, duration }) => {
    return <Box sx={{ width: 200 }}>
        <Box sx={{ position: 'relative', height: 40, bgcolor: 'rgb(240 240 240)', borderRadius: 2 }}>
            <Box className='progress-bar' sx={{
                width: `${(time / duration) * 100}%`,
                height: '100%',
                borderRadius: 2
            }} />
            <Box sx={{ position: 'absolute', top: '30%', left: '40%' }}>
                <Typography>{time.toFixed(1)}s</Typography>
            </Box>
        </Box>
    </Box>
}

export default TimerProgressBar;