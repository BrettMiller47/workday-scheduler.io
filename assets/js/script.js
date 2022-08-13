// display current date
var currDate = moment();
var dateEl = document.querySelector("#currentDay");
currDate = currDate.format("MMM Do YYYY");
dateEl.textContent = currDate;