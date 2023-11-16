import { useState, useEffect, useRef } from 'react'
import { Card, Divider, Stack, Typography } from "@mui/material"
import Label from "./Label"
import TimerSlider from "./TimerSlider"
import TimerButton from "./TimerButton"

const getSecondsPassed = (date1, date2) => (date2.getTime() - date1.getTime()) / 1000;

const Timer = () => {
    const [time, setTime] = useState(0);
    const [duration, setDuration] = useState(60);
    const [timeStarted, setTimeStarted] = useState(null);
    const [running, setRunning] = useState(false);
    const timerInterval = useRef(null);

    useEffect(() => {
        if (running) {
            timerInterval.current = setInterval(() => {
                setTime(getSecondsPassed(timeStarted, new Date()));
            }, 10);
        } else {
            setTime(0)
        }

        return () => {
            clearInterval(timerInterval.current);
        }
    }, [running, timeStarted]);

    useEffect(() => {
        if (time >= duration) {
            alert('Time reached the duration')
            clearInterval(timerInterval.current)
        }
    }, [duration, time])

    const onStart = () => {
        setRunning(true);
        setTimeStarted(new Date())
    }

    const onReset = () => {
        setRunning(false);
        setTime(0);
    }

    return <Card sx={{ p: 2 }}>
        <Stack spacing={1} alignItems='center' width={400}>
            <Typography fontWeight='bold'>Timer</Typography>
            <Divider sx={{ width: '100%' }} />
            <Label time={time} duration={duration} />
            <TimerSlider duration={duration} setDuration={setDuration} />
            <TimerButton running={running} onStart={onStart} onReset={onReset} />
        </Stack>
    </Card>
}

export default Timer;