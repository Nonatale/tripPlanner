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
        displayActivities();

        title.value = "";
        date.value = "";
        time.value = "";
        place.value = "";
        note.value = "";

    } else {
        activityFormError();
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const deleteButton = document.getElementById('deleteTripButton');
    const deleteModalElement = document.getElementById('deleteModal');
    const confirmDeleteButton = document.getElementById('confirmDelete');
  
     //to ensure that bootstrap modal is being used
     if (deleteButton && deleteModalElement && confirmDeleteButton) {
    try {
      const deleteModal = new bootstrap.Modal(deleteModalElement);
    
      // clicking on delete trip button opens modal
      deleteButton.addEventListener('click', function() {
        deleteModal.show();
      });
  
      // Add event listener to handle delete confirmation
      confirmDeleteButton.addEventListener('click', function () {
        console.log('Item deleted');
        deleteModal.hide();
        deleteTrip();
        redirectPage("../../index.html");

      });
    //implemented this b/c I was needing to identify initial errors
    } catch(error) {
        console.error("Error initializing Bootstrap modal", error)
    }
}

});

function deleteTrip() {
    const currTrip = localStorage.getItem("currTrip");
  

    const tripList = JSON.parse(localStorage.getItem("tripList")) || [];
    const tripIndex = getTripIndex(currTrip);

    if (tripIndex > -1) {
        // Remove the trip from tripList
        tripList.splice(tripIndex, 1);

        // make sure local storage is updated to reflect new array
        localStorage.setItem("tripList", JSON.stringify(tripList));

        //  current trip is removed from local storage
        localStorage.removeItem("currTrip");
    } else {
        console.error("Trip not found in tripList.");
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
    console.log(trip);

    const activities = trip.activity;
    eventBox.innerHTML = "";
    activities.forEach((item) => {
        const dayBox = document.createElement("section");
        const dateBox = document.createElement("div");
        const dayAndDate = document.createElement("h4");
        const infoBox = document.createElement("div");
        const timeBox = document.createElement("div");
        const timeElem = document.createElement("h4");
        const iconBox = document.createElement("div");
        const activitySquare = document.createElement("div");
        const activityBox = document.createElement("div");
        const titleBox = document.createElement("div");
        const eventElem = document.createElement("h4");
        const locationElem = document.createElement("h5");
        const noteBox = document.createElement("div");
        const noteElem = document.createElement("p");
        const deleteBox = document.createElement("div");




        eventBox.appendChild(dayBox).classList.add("day-box");
        eventBox.appendChild(dateBox).classList.add("date-box");
        dayBox.appendChild(dayAndDate);
        dayAndDate.append(`${item.date}`);
        dayBox.appendChild(infoBox).classList.add("info-box");
        infoBox.appendChild(timeBox).classList.add("time-box");
        timeBox.appendChild(timeElem);
        timeElem.append(`${item.time}`);
        infoBox.appendChild(iconBox).classList.add("icon-box");
        iconBox.appendChild(activitySquare).classList.add("activity-sqaure");
        infoBox.appendChild(activityBox).classList.add("activityBox");
        activityBox.appendChild(titleBox).classList.add("title-box");
        titleBox.appendChild(eventElem);
        titleBox.appendChild(locationElem);
        eventElem.append(`${item.title}`);
        locationElem.append(`${item.place}`);
        activityBox.appendChild(noteBox).classList.add("note-box");
        noteBox.appendChild(note);
        noteElem.append(`${item.note}`);
        activityBox.appendChild(deleteBox).classList.add("delete-box");



    })

}

activityButton.addEventListener("click", activityFormClick);
submitButton.addEventListener("click", activityFormSubmit);
//deletebutton.addEventListener("click", deleteTrip);
document.addEventListener("DOMContentLoaded", displayActivities);
