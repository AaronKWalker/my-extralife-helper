export function startTimer(timerType) {
    switch (timerType) {
        case "action":
            actionTimerId = setInterval(onActionTimer, ACTION_TIMER_INTERVAL);
            onActionTimer();
            break;
        case "clock":
            if (showYearMode !== true) {
                clockTimerId = setInterval(onClockTimer, CLOCK_TIMER_INTERVAL);
                onClockTimer();
            }
            break;
        case "donor":
            donorTimerId = setInterval(onDonorTimer, DONOR_TIMER_INTERVAL);
            break;
    }
}

export function stopTimer(timerType) {
    switch (timerType) {
        case "action":
            clearInterval(actionTimerId);
            break;
        case "clock":
            clearInterval(clockTimerId);
            break;
        case "donor":
            clearInterval(donorTimerId);
            break;
    }
}

