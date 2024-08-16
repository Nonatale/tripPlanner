
const eventButton = document.querySelector("#event-button");
const submitButton = document.querySelector("#event-submit-button");

//
const title = document.querySelector("#eventTitle");
const date = document.querySelector("#eventTitle");
const time = document.querySelector("#eventTitle");
const location = document.querySelector("#eventTitle");
const note = document.querySelector("#eventTitle");
const price = document.querySelector("#eventTitle");
const reservation = document.querySelector("#eventTitle");

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