var secondHand = document.querySelector('.second-hand');
var minuteHand = document.querySelector('.min-hand');
var hourHand = document.querySelector('.hour-hand');
function setDate() {
    var now = new Date();
    // Moving the second hand
    var seconds = now.getSeconds();
    var secondsDegrees = (seconds / 60) * 360 + 90;
    secondHand.style.rotate = "".concat(secondsDegrees, "deg");
    // Moving the minute hand
    var minutes = now.getMinutes();
    var minutesDegrees = (minutes / 60) * 360 + 90;
    minuteHand.style.rotate = "".concat(minutesDegrees, "deg");
    // Moving the hour hand
    var hour = now.getHours();
    var hourDegrees = (hour / 12) * 360 + 90;
    hourHand.style.rotate = "".concat(hourDegrees, "deg");
}
setInterval(setDate, 1000);
