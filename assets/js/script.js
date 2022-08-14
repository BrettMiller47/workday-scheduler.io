// display current date in <header> textContent
var currDate = moment().format("MMM Do YYYY");
var dateEl = document.querySelector("#currentDay");
dateEl.textContent = currDate;

// dictionary for schedule time blocks
var times = {
    8: "8:00 - 9:00 am",
    9: "9:00 - 10:00 am",
    10: "10:00 - 11:00 am",
    11: "11:00 am - 12:00 pm",
    12: "12:00 - 1:00 pm",
    13: "1:00 - 2:00 pm",
    14: "2:00 - 3:00 pm",
    15: "3:00 - 4:00 pm",
    16: "4:00 - 5:00 pm"
}
var lenTimes = Object.keys(times).length;

// append a row of three column elements for each schedule time slot in times:
for (let i = 0; i < lenTimes; i++) {
    // < rootContainerEl >
    // ---- < rowEL >
    // -------- < timeColEl >
    // -------- < descriptionColEl >
    // -------- < saveColEl >

    // create the timeColEl --- <p>
    var timeColEl = document.createElement("p");
    timeColEl.setAttribute("class", "col-sm-2 m-0 time-block");
    timeColEl.textContent = Object.values(times)[i];

    // create the descriptionColEl --- editable <p>
    var descriptionColEl = document.createElement("p");
    descriptionColEl.setAttribute("class", "col-sm-7 m-0 rounded description");
    descriptionColEl.setAttribute("id", "description-" + i);
    descriptionColEl.setAttribute("contenteditable", "true");
    descriptionColEl.textContent = localStorage.getItem("description-" + i);

    // set the descriptionColEl background color based on current time of day
    var timeRangeStartHr = Object.keys(times)[i];
    timeRangeStartHr = parseInt(timeRangeStartHr);
    
    if (isPastHour(timeRangeStartHr)) {
        descriptionColEl.classList.add("past");
    } else if (isPresentHour(timeRangeStartHr)) {
        descriptionColEl.classList.add("present");
    } else if (isFutureHour(timeRangeStartHr)) {
        descriptionColEl.classList.add("future");
    }

    // create the saveColEl --- <button> with <span> child
    var saveIconEl = document.createElement("span");
    saveIconEl.setAttribute("class", "glyphicon glyphicon-floppy-save");
    saveIconEl.textContent = " Save";
    var saveColEl = document.createElement("button");
    saveColEl.setAttribute("class", "col-sm-2 btn saveBtn")
    saveColEl.setAttribute("type", "button");
    saveColEl.id ="saveBtn-" + i;
    saveColEl.append(saveIconEl);
    
    // create the rowEl and append the three column elements
    var rowEl = document.createElement("div");
    rowEl.setAttribute("class", "row");
    rowEl.append(timeColEl);
    rowEl.append(descriptionColEl);
    rowEl.append(saveColEl);

    // append the row to the rootContainerEl
    var rootContainerEl = document.querySelector(".container");
    rootContainerEl.append(rowEl);
}    

// function returning boolean where true is an hourly timeframe that has already occured today
function isPastHour(hourInMilitaryTime) {
    
    // declare the currentHour in military time format
    var currentHour = moment().format("HH");

    // if the currentHour is equal to the argument for an hourInMilitaryTime
    if (hourInMilitaryTime < currentHour) {
        // argument isPastHour
        return true;
    } else {
        return false;
    }
}

// function returning boolean where true is an hourly timeframe that is in the present
function isPresentHour(hourInMilitaryTime) {

    // declare the currentHour in military time format
    var currentHour = moment().format("HH");
    
    // if the currentHour is equal to the argument for an hourInMilitaryTime
    if (currentHour == hourInMilitaryTime) {
        // argument isPresentHour
        return true;
    } else {
        return false;
    }
}

// function returning boolean where true is an hourly timeframe that has not occured today
function isFutureHour(hourInMilitaryTime) {
    
    // declare the currentHour in military time format
    var currentHour = moment().format("HH");
    
    // if the currentHour is before the argument for an hourInMilitaryTime
    if (currentHour < hourInMilitaryTime) {
            // argument isFutureHour
            return true;
        } else {
            return false;
    }
}

// event listeners for ALL save buttons 
$(".saveBtn").each(function (index, value) {
    
    // add event listener for INDIVIDUAL save button
    $("#saveBtn-" + index).on("click", function () {
        
        // save the corresponding description in localStorage
        var descriptionEl = $("#description-" + index); 
        var newDesc = descriptionEl.text();
        localStorage.setItem("description-" + index, newDesc);
    });
});
