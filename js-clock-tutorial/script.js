// Set an intervalfor how often a fucntion runs in milliseconds

setInterval(setClock, 1000); 

const hourHand = document.getElementById('hour');
const minuteHand = document.getElementById('minute');
const secondHand = document.getElementById('second');

// Define the set clock function
function setClock() {
    // new Date willgrab the current date & time
    const currentDate = new Date();
    const secondsRatio = currentDate.getSeconds() / 60
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12

    // Because we dont wnat the hours or minutes hand to jump by minutes or hours and move gradually we can call upon the previos ratio to allow them to move smoothly

    // Call the setRotation fuction of each hand passing in the correct elements
    setRotation(secondHand, secondsRatio);
    setRotation(minuteHand, minutesRatio);
    setRotation(hourHand, hoursRatio);
}  

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360)
  }

setClock();
