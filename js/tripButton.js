
const tripButton = document.querySelector("#trip-button");
const submitButton = document.querySelector("#trip-submit-button");
const title = document.querySelector("#tripTitle");
const tripForm = document.querySelector("#tripForm");

const tripList = [];

// Unhides the trip form upon button click
function tripForm(event) {
    event.preventDefault();
    tripForm.classList.remove("hidden");
}

// Submits new trip element to the local storage upon button click
function tripFormSubmit(event) {
    event.preventDefault();

    // Only proceeds if entry is not empty. Otherwise, nothing happens
    if (!title) {
        // Adds new trip name to js trip array
        tripList.push(title.value.trim());
        // Adds new trip list to local storage
        localStorage.setItem("tripList", JSON.stringify(tripList));
        // Hides form after successful submission
        tripForm.classList.add("hidden");
    }
    
}

tripButton.addEventListener("click", tripForm);
submitButton.addEventListener("click", tripFormSubmit);