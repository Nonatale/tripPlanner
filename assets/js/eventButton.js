const eventButton = document.querySelector("#event-button");
const submitButton = document.querySelector("#event-submit-button");

// Form entry data
const title = document.querySelector("#eventTitle");
const date = document.querySelector("#date");
const time = document.querySelector("#time");
const eventlocation = document.querySelector("#location");
const note = document.querySelector("#note");
const price = document.querySelector("#price");
const reservation = document.querySelector("#reservation");

const eventForm = document.querySelector("#eventForm");

const eventList = [];

// Unhides the event form upon button click
function eventFormClick(event) {
    event.preventDefault();
    if (eventForm.classList.contains('hidden')) {
        eventForm.classList.remove("hidden");
    } else {
        eventForm.classList.add("hidden");
    }
}

// Submits new event element to the local storage upon button click
function eventFormSubmit(event) {
    event.preventDefault();

    // Proceeds if required data is not empty. Otherwise, prints error message
    if (ifEmptyData(title, date, time, eventlocation)) {



        // Adds new event name to js event array
        eventList.push(title.value.trim());
        // Adds new event list to local storage
        localStorage.setItem("eventList", JSON.stringify(eventList));
        // Hides form after successful submission
        eventForm.classList.add("hidden");
    } else {
        eventFormError();
    }

}

function eventFormError() {

}

function displayEvents() {
    const tripList = JSON.parse(localStorage.getItem("tripList"));
    const currTrip = localStorage.getItem("currTrip");

}

eventButton.addEventListener("click", eventFormClick);
submitButton.addEventListener("click", eventFormSubmit);
document.addEventListener("DOMContentLoaded", displayEvents);