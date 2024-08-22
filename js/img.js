//Have folder on images, function on line 74 would create a randomly generated number to grab image.
//Creates an array of images
const imageArray = [
    'https://media.9news.com/assets/KUSA/images/7f6e78a1-dd06-48e2-85b2-6e35a08d6832/7f6e78a1-dd06-48e2-85b2-6e35a08d6832_1140x641.jpg',
    'https://cdn.aarp.net/content/dam/aarp/travel/Domestic/2021/12/1140-oahu-hero.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT78NCXBn45EBPyNn3zfSjQe9kCxwiddFkH2A&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR1D45iBVsNs0SCKLbS2NwDW_2elEzF74vsQ&s'
]
function getRandomImage (){
//Grabs random image from image array
const randomImage = Math.floor(Math.random() * imageArray.length);
//Select a random image
const selectedImage = imageArray[randomImage];
//Apply random image to attribute of the button
//document.querySelector('.container mt-5').style.backgroundImage = `url(${selectedImage})`;
tripButton.imgUrl = `url(${selectedImage})`;

}
