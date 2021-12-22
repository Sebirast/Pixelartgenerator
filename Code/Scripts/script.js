import * as utilities from "./utilities.js"

const canvas = document.getElementById("Canvas");
const canvasContext = canvas.getContext("2d");

const urlInput = document.getElementById("getUrl");
const urlSubmitButton = document.getElementById("submitUrl");

function getUrl(event) {
    event.preventDefault();
    const url = urlInput.value;

    if(utilities.isUrlValid(url) == false) {
        alert("Url is not valid");
        return;
    }

    console.log(url);

    return url;
}

function loadPictureFromUrl(url) {
    let image = new Image;
    image.src = url;

    return image;
}

function loadPictureFromFileSystem(path) {
    let image = new Image;
    image.src = path;
    
    return image;
}

function drawImage(image) {
    image.onload = function() {
        canvas.width = image.width;
        canvas.height = image.height;

        canvasContext.drawImage(image, 0, 0);
    }
}


// links: - https://images.unsplash.com/photo-1639269966566-fabc0b3f2a4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80
//        - https://images.unsplash.com/photo-1639402479778-bcb2d2fbb69e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2232&q=80 

// loadPictureFromUrl("https://images.unsplash.com/photo-1639402479778-bcb2d2fbb69e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2232&q=80");

urlSubmitButton.addEventListener("click", getUrl());