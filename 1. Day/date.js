
const date = new Date();

const daysList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const day = daysList[date.getDay()];

console.log("Today is: " + day);

let hour = date.getHours();
let mins = date.getMinutes();
let seconds = date.getSeconds();

let prepand = (hour >= 12) ? "PM" : "AM"; // Get the right meridian suffix (AM/PM)

// Covert 24-hour format to 12-hour format
hour = (hour >= 12) ? hour - 12 : hour; // If we are in PM in 24 hr format(e.g. hour 14), then takeaway 12 (to make it hour 2)

// Check for special case where hour is 0
if(hour ===0 && prepand === "PM")
{
    if(mins === 0 && seconds === 0)
    {
        hour = 12;
        prepand = 'Noon'        
    }
    else
    {
        hour = 12;
        prepand = 'PM'
    }
}

// Other special case when hour is 0 - Midnight

if(hour ===0 && prepand === "AM")
{
    if(mins === 0 && seconds === 0)
    {
        hour = 12;
        prepand = 'Midnight'        
    }
    else
    {
        hour = 12;
        prepand = 'AM'
    }
}

console.log("Current Time: " + hour + ":" + mins + ":" + seconds + " " +prepand);