
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
    if (tripForm.classList.contains("hidden")) {
        tripForm.classList.remove("hidden");
    } else {
        tripForm.classList.add("hidden");
    }
    
}

// Submits new trip element to the local storage upon button click
function tripFormSubmit(event) {
    event.preventDefault();

    // Only proceeds if entry is not empty. Otherwise, nothing happens
    if (title.value.length !== 0) {
        // Creates new trip object: name and empty activity list
        const trip = {
            name: title.value.trim(),
            activity: []
        }

        tripList.push(trip);
        // Adds new trip list to local storage
        localStorage.setItem("tripList", JSON.stringify(tripList));
        // Hides form after successful submission
        tripForm.classList.add("hidden");

        displayTrip();
    } else {
        tripFormError();
    }
    
}
//Have folder on images, function on line 74 would create a randomly generated number to grab image.
//Creates an array of images
const imageArray = [
    'https://media.9news.com/assets/KUSA/images/7f6e78a1-dd06-48e2-85b2-6e35a08d6832/7f6e78a1-dd06-48e2-85b2-6e35a08d6832_1140x641.jpg',
    'https://cdn.aarp.net/content/dam/aarp/travel/Domestic/2021/12/1140-oahu-hero.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT78NCXBn45EBPyNn3zfSjQe9kCxwiddFkH2A&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR1D45iBVsNs0SCKLbS2NwDW_2elEzF74vsQ&s'

];
//Grabs random image from image array
const randomImage = Math.floor(math.random() * imageArray.length);

//Creates a new image element
const newImage = document.createElement('img');
newImage.src = imageArray[randomIndex];
newImage.alt = 'randomImage';

//Appened the new image to container
const container = document.getElementById('imageContainer');
container.appendChild(newImage);

//Adds randomly generated background image to trip created by user 
function displayBackgroundImage(many){
    var arr = randomImages
} 

function tripFormError() {
    const errorMsg = document.createElement("p");
    errorMsg.classList.add("error");
    errorMsg.textContent = "Please enter a trip name.";
    tripForm.appendChild(errorMsg);
}

// Adds html elements of the trip to the page and give it a background img
function displayTrip() {
    tripContainer.innerHTML = "";
    for (const trip of tripList) {
        const tripblock = document.createElement("div");
        tripblock.classList.add("trip-block");
        const triptitle = document.createElement("h3");
        //tripblock.style.backgroundImage = `./assets/img/background-img${getImageNumber(trip)}`;
        triptitle.textContent = trip.name;

        tripContainer.appendChild(tripblock);
        tripblock.appendChild(triptitle);
        // Adds clickable event to the images and redirects page when clicked
        tripblock.addEventListener("click", (event) => {
            redirEventPage(event, trip.name)
        });
    }
}

function redirEventPage (event, tripName) {
    event.preventDefault();
    console.log(tripName);
    localStorage.setItem("currTrip", tripName);
    redirectPage("./assets/html/events.html");
}

tripButton.addEventListener("click", tripFormClick);
submitButton.addEventListener("click", tripFormSubmit);
displayTrip();