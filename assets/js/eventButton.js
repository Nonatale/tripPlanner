
const eventButton = document.querySelector("#event-button");
const submitButton = document.querySelector("#event-submit-button");

// Form entry data
const title = document.querySelector("#eventTitle");
const date = document.querySelector("#date");
const time = document.querySelector("#time");
const location = document.querySelector("#location");
const note = document.querySelector("#note");
const price = document.querySelector("#price");
const reservation = document.querySelector("#reservation");

const eventForm = document.querySelector("#eventForm");

const eventList = [];

// Unhides the event form upon button click
function eventForm(event) {
    event.preventDefault();
    eventForm.classList.remove("hidden");
}

// Submits new event element to the local storage upon button click
function eventFormSubmit(event) {
    event.preventDefault();

    // Only proceeds if entry is not empty. Otherwise, nothing happens
    if (!title) {
        // Adds new event name to js event array
        eventList.push(title.value.trim());
        // Adds new event list to local storage
        localStorage.setItem("eventList", JSON.stringify(eventList));
        // Hides form after successful submission
        eventForm.classList.add("hidden");
    }
    
}

eventButton.addEventListener("click", eventForm);
submitButton.addEventListener("click", eventFormSubmit);