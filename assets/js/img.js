//Have folder on images, function on line 74 would create a randomly generated number to grab image.
//Creates an array of images

function imageSetup() {
    const imageArray = [
        'https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=2126&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1494522855154-9297ac14b55f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1512591290618-904e04936827?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1722010010992-db366c8d5e2b?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://plus.unsplash.com/premium_photo-1664361480315-ba09a7dfdd4c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

    ]
    
    localStorage.setItem("imageArray", JSON.stringify(imageArray));
}


function getRandomImage(trip) {
    //Grabs random image from image array
    const imageList = JSON.parse(localStorage.getItem("imageArray"));
    const randomImage = Math.floor(Math.random() * imageList.length);
    const selectedImage = imageList[randomImage];
    imageList.splice(randomImage, 1);
    localStorage.setItem("imageArray", JSON.stringify(imageList));
    //Apply random image to attribute of the button
    return `url(${selectedImage})`;
}

