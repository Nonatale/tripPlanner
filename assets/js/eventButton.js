
const activityButton = document.querySelector("#activity-button");
const submitButton = document.querySelector("#activity-submit-button");

// Form entry data
const title = document.querySelector("#activityTitle");
const date = document.querySelector("#date");
const time = document.querySelector("#time");
const location = document.querySelector("#location");
const note = document.querySelector("#note");
const price = document.querySelector("#price");
const reservation = document.querySelector("#reservation");

const activityForm = document.querySelector("#activityForm");

const activityList = [];

// Unhides the activity form upon button click
function activityForm(event) {
    event.preventDefault();
    if (activityForm.classList.contains('hidden')) {
        activityForm.classList.remove("hidden");
    } else {
        activityForm.classList.add("hidden");
    }
}

// Submits new activity element to the local storage upon button click
function activityFormSubmit(event) {
    event.preventDefault();

    // Proceeds if required data is not empty. Otherwise, prints error message
    if (ifEmptyData(title, date, time, location)) {

        const activity = {
            title: title.value.trim(),
            date: date.value.trim(),
            time: time.value.trim(),
            location: location.value.trim(),
            note: function() {
                return note.value ? note.value.trim() : undefined;
            },
            price: function() {
                return price.value ? price.value.trim() : undefined;
            },
            reservation: function() {
                return reservation.value ? reservation.value.trim() : undefined;
            },
            trip: currTrip
        }

        // Adds new activity name to js activity array
        updateActivityList(activity);
        // Adds new activity list to local storage
        localStorage.setItem("activityList", JSON.stringify(activityList));
        // Hides form after successful submission
        activityForm.classList.add("hidden");
    } else {
        activityFormError();
    }
}

function updateActivityList(event) {
    
}

function activityFormError() {

}

function displayActivities() {
    const tripList = JSON.parse(localStorage.getItem("tripList"));
    const currTrip = localStorage.getItem("currTrip");

}

activityButton.addEventListener("click", activityForm);
submitButton.addEventListener("click", activityFormSubmit);
document.addEventListener("DOMContentLoaded", displayActivities);