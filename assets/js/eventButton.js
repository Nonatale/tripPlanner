const activityButton = document.querySelector("#activity-button");
const submitButton = document.querySelector("#activity-submit-button");

// Form entry data
const title = document.querySelector("#activityTitle");
const date = document.querySelector("#date");
const time = document.querySelector("#time");
const place = document.querySelector("#place");
const note = document.querySelector("#note");
const price = document.querySelector("#price");
const reservation = document.querySelector("#reservation");
const eventBox=document.querySelector("#eventBox")

const activityForm = document.querySelector("#activityForm");

const activityList = [];
const currTrip = localStorage.getItem("currTrip");

// Unhides the activity form upon button click
function activityFormClick(event) {
    event.preventDefault();
    if (activityForm.classList.contains("hidden")) {
        activityForm.classList.remove("hidden");
    } else {
        activityForm.classList.add("hidden");
    }
}

// Submits new activity element to the local storage upon button click
function activityFormSubmit(event) {
    event.preventDefault();

    // Proceeds if required data is not empty. Otherwise, prints error message
    if (ifEmptyData(title, date, time, place)) {

        const activity = {
            title: title.value.trim(),
            date: date.value.trim(),
            time: time.value.trim(),
            place: place.value.trim(),
            note: note.value ? note.value.trim() : undefined,
            trip: localStorage.getItem("currTrip")
        }

        updateActivityList(activity);

        activityForm.classList.add("hidden");
    } else {
        activityFormError();
    }
}

// Adds new activity to a trip and then sorts the events and trips
function updateActivityList(activity) {
    const tripIndex = getTripIndex(currTrip);
    const tripList = JSON.parse(localStorage.getItem("tripList"));
    tripList[tripIndex].activity.push(activity);
    localStorage.setItem("tripList", JSON.stringify(tripList));
    sortActivities(currTrip);
}

// Searches for a trip name in the local storage and returns the index of that trip
function getTripIndex(tripName) {
    const tripList = JSON.parse(localStorage.getItem("tripList"));
    for (let i = 0; i < tripList.length; i++) {
        if (tripList[i].name === tripName) {
            return i;
        }
    }
    return -1;
}

// Sort the trips based on the date and time of the first activity
function sortTrips() {
    const tripList = JSON.parse(localStorage.getItem("tripList"));
    
    tripList.sort((trip1, trip2) => {
        // Ensure both trips have at least one activity with a valid date and time
        if (trip1.activity.length > 0 && trip2.activity.length > 0) {
            const dateComparison = new Date(trip1.activity[0].date) - new Date(trip2.activity[0].date);
            if (dateComparison === 0) {
                return trip1.activity[0].time.localeCompare(trip2.activity[0].time);
            }
            return dateComparison;
        }

        // If one or both trips have no activities, consider them equal in sorting
        return 0;
    });
    
    localStorage.setItem("tripList", JSON.stringify(tripList));
}

// Sorts activites based on added activity, then calls the sortTrips function
function sortActivities(tripName) {
    const tripList = JSON.parse(localStorage.getItem("tripList"));
    const tripIndex = getTripIndex(tripName);
    tripList[tripIndex].activity.sort((act1, act2) => {
        const dateComparison = new Date(act1.date) - new Date(act2.date);
        if (dateComparison === 0) {
            return act1.time.localeCompare(act2.time);
        }
        return dateComparison;
    })
    localStorage.setItem("tripList", JSON.stringify(tripList));
    sortTrips();
}

function activityFormError() {
    const errorMsg = document.createElement("p");
    errorMsg.classList.add("error");
    errorMsg.textContent = "Required data is Empty. Required input: Title, Date, Time, Place.";
    activityForm.appendChild(errorMsg);
}

function displayActivities() {
    const tripList = JSON.parse(localStorage.getItem("tripList"));
    const tripIndex = getTripIndex(localStorage.getItem("currTrip"));
    const trip = tripList[tripIndex];
    // Display Logic
    let currDate;
    let activityIndex = 0;
    // Loops through 
    while (trip.activity[activityIndex]) {
        if (!currDate || currDate !== activity.date) {
            const dayBox = document.createElement("section");
            const dateBox = document.createElement("div");
            const infoBox = document.createElement("div");
            dayBox.classList.add("day-box");
            dateBox.classList.add("date-box");
            infoBox.classList.add("info-box");
            
            eventBox.appendChild(dayBox);
            dayBox.appendChild(dateBox);
            dayBox.appendChild(infoBox);
        } else {

        }
        activityIndex++;
    }

}

activityButton.addEventListener("click", activityFormClick);
submitButton.addEventListener("click", activityFormSubmit);

// function colorChanger() {
//     const squareList = document.querySelector(".activity-square");
//     for (const square of squareList) {
//         square.addEventListener('click', function() {
//             document.getElementById('colorPicker').click();
//         });
//     }
// }

// colorChanger();

// document.getElementById('colorPicker').addEventListener('input', function() {
//     document.getElementById('colorSquare').style.backgroundColor = this.value;
// });

document.addEventListener("DOMContentLoaded", displayActivities);
