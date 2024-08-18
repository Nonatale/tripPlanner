
const tripButton = document.querySelector("#trip-button");
const submitButton = document.querySelector("#trip-submit-button");
const title = document.querySelector("#tripTitle");
const tripForm = document.querySelector("#tripForm");
const tripContainer = document.querySelector("#tripContainer");

const tripList = initTripList();

function initTripList() {
    const localTripList = localStorage.getItem("tripList");
    return localTripList ? JSON.parse(localTripList) : [];
}

// Unhides/hides the trip form upon button click
function tripFormClick(event) {
    event.preventDefault();
    if (tripForm.classList.contains('hidden')) {
        tripForm.classList.remove("hidden");
    } else {
        tripForm.classList.add("hidden");
    }
    
}

// Submits new trip element to the local storage upon button click
function tripFormSubmit(event) {
    event.preventDefault();
    console.log(title);
    // Only proceeds if entry is not empty. Otherwise, nothing happens
    if (title.value.length !== 0) {
        // Adds new trip name to js trip array
        tripList.push(title.value.trim());
        // Adds new trip list to local storage
        localStorage.setItem("tripList", JSON.stringify(tripList));
        // Hides form after successful submission
        tripForm.classList.add("hidden");

        displayTrip();
    }
    
}

// Adds html elements of the trip to the page and give it a background img
function displayTrip() {
    console.log(tripList);
    for (const trip of tripList) {
        const tripblock = document.createElement("div");
        const triptitle = document.createElement("h2");
        //tripblock.style.backgroundImage = `./assets/img/background-img${getImageNumber(trip)}`;
        triptitle.textContent = trip;
        tripContainer.appendChild(tripblock);
        tripblock.appendChild(triptitle);
        // Adds clickable event to the images and redirects page when clicked
        tripContainer.addEventListener("click", (event) => redirEventPage(event, trip));
    }
}

function redirEventPage (event, trip) {
    event.preventDefault();

    localStorage.setItem("currTrip", trip);
    redirectPage("./assets/html/events.html");
}

tripButton.addEventListener("click", tripFormClick);
submitButton.addEventListener("click", tripFormSubmit);
displayTrip();