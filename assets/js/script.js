// display current date
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
    // for each time range in times:
    // < rootContainerEl >
    // ----< rowEL >
    // -------- < timeColEl >
    // -------- < taskColEl >
    // -------- < saveColEl >

    // create the timeColEl (<p>)
    var timeColEl = document.createElement("p");
    timeColEl.setAttribute("class", "col-sm-2 m-0 time-block");
    timeColEl.textContent = Object.values(times)[i];

    // create the taskColEl (editable <p>)
    var taskColEl = document.createElement("p");
    taskColEl.setAttribute("class", "col-sm-8 m-0 rounded description");
//BUG START-----------------------
    // set the background color based on current time of day
    var timeRangeStartHr = Object.keys(times)[i];
    if (isPast(timeRangeStartHr)) {
        taskColEl.classList.add("past");
    } else if (isPresent(timeRangeStartHr)) {
        taskColEl.classList.add("present");
    } else if (isFuture(timeRangeStartHr)) {
        taskColEl.classList.add("future");
    }
//BUG END------------------------------------------------------------------    
    taskColEl.id = "task-" + i;
    taskColEl.textContent = "Get item from local storage"

    // create the saveColEl (<button> with <span> child)
    var saveIconEl = document.createElement("span");
    saveIconEl.setAttribute("class", "glyphicon glyphicon-floppy-save");
    saveIconEl.textContent = " Save";
    var saveColEl = document.createElement("button");
    saveColEl.setAttribute("class", "col-sm-1 btn saveBtn")
    saveColEl.setAttribute("type", "button");
    saveColEl.id ="saveBtn-" + i;
    saveColEl.append(saveIconEl);
    
    // append the three column elements to the rowEl
    var rowEl = document.createElement("div");
    rowEl.setAttribute("class", "row");
    rowEl.append(timeColEl);
    rowEl.append(taskColEl);
    rowEl.append(saveColEl);

    // append the row to the rootContainerEl
    var rootContainerEl = document.querySelector(".container");
    rootContainerEl.append(rowEl);
}    


// function returning boolean where true is an hourly timeframe that has already occured today
function isPast(hourInMilitaryTime) {
    var currentHour = moment().format("HH");
    if (hourInMilitaryTime < currentHour) {
        return true;
    } else {
        return false;
    }
}
// function returning boolean where true is an hourly timeframe that is in the present
function isPresent(hourInMilitaryTime) {
    var currentHour = moment().format("HH");
    if (currentHour == hourInMilitaryTime) {
        return true;
    } else {
        return false;
    }
}
// function returning boolean where true is an hourly timeframe that has not occured today
function isFuture(hourInMilitaryTime) {
    var currentHour = moment().format("HH");
    if (currentHour < hourInMilitaryTime) {
            return true;
        } else {
            return false;
    }
}