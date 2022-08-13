var currentTime = moment();
currentTime = currentTime.format("h");
var myBool = currentTime === "10";
console.log(myBool);

// dictionary for schedule time blocks
var times = {
    "8": "8:00 - 9:00 am",
    "9": "9:00 - 10:00 am",
    "10": "10:00 - 11:00 am",
    "11": "11:00 am - 12:00 pm",
    "12": "12:00 - 1:00 pm",
    "1": "1:00 - 2:00 pm",
    "2": "2:00 - 3:00 pm",
    "3": "3:00 - 4:00 pm",
    "4": "4:00 - 5:00 pm"
}

// display current date
var currDate = moment();
var dateEl = document.querySelector("#currentDay");
currDate = currDate.format("MMM Do YYYY");
dateEl.textContent = currDate;