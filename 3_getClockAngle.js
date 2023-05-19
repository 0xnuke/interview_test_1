function getClockAngle(hh_mm) {
    // get the value from the input as an integer
    let hours = parseInt(hh_mm[0] + hh_mm[1]);
    let minutes = parseInt(hh_mm[3] + hh_mm[4]);
    hours = hours % 12;

    //  minute hand angle increases 360 degrees per 60 minutes, 6 degrees per minutes
    let minAngle = 6 * minutes;
    // hours hand angle increases 360 degrees per 12 hours, 30 degrees per hours but when the minute hand increases, the hour hand also increases by 30 degrees per 60 minutes, 0.5 degree per minute
    let hoursAngle = ((30 * hours) + (minutes * 0.5));
    let totalAngle = Math.abs(hoursAngle - minAngle);
    // find shorter angle
    let shoterAngle = Math.min(360 - totalAngle, totalAngle);
    console.log(shoterAngle);
    return shoterAngle
}

getClockAngle("09:00")
getClockAngle("17:30")