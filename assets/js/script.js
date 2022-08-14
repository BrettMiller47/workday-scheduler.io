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

localStorage.setItem(8, "8:00 - 9:00 am");
var get = localStorage.getItem(8);
console.log(get);

// for each time in times...
var lenTimes = Object.keys(times).length;
for (let i = 0; i < lenTimes; i++) {
    // store key: value pair


    // declare rootContainerEl to hold the individual schedule rows
    // construct individual schedule row and store as a local variable
    // append scheduleRow to rootContainerEl
}    


function constructScheduleRow() {
    // create a rootRow element to hold three columns: 
    // --- (timeColEl, taskColEl, saveColEl) ---
    var rootRowEl = document.createElement("div");
    rootRowEl.setAttribute("class", "row");
    console.log(rootRowEl);

    // create the timeColEl (<p>)
    var timeColEl = document.createElement("p");
    timeColEl.setAttribute("class", "col-sm-2 m-0 text-center");
    timeColEl.textContent = Object.values(times)[0];
    console.log(timeColEl);

    // create the taskColEl (editable <p>)
    var taskColEl = document.createElement("p");
    taskColEl.setAttribute("class", "col-sm-8 m-0 bg-secondary text-light rounded");
    taskColEl.textContent = "Get item from local storage"
    console.log(taskColEl);

    // create the saveColEl (<button> with <span> child)
    var saveIconEl = document.createElement("span");
    saveIconEl.setAttribute("class", "glyphicon glyphicon-floppy-save");
    saveIconEl.textContent = " Save";
    console.log(saveIconEl);
    var saveColEl = document.createElement("button");
    saveColEl.setAttribute("class", "col-sm-1 btn saveBtn")
    saveColEl.setAttribute("type", "button");
    saveColEl.setAttribute("id", "button-");
    saveColEl.append(saveIconEl);
    console.log(saveColEl);
    
    // append the three column elements to the rootRowEl
    rootRowEl.append(timeColEl);
    rootRowEl.append(taskColEl);
    rootRowEl.append(saveColEl);

    var rootContainerEl = document.querySelector(".container");
    rootContainerEl.append(rootRowEl)
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