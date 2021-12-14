import * as utilities from "./utilities.js"

const canvas = document.getElementById("Canvas");

const canvasContext = canvas.getContext("2d");


function loadPictureFromUrl(url) {
    var image = new Image;
    image.src = url;

    image.onload = function() {
        canvasContext.drawImage(image, 0, 0, canvas.clientHeight, canvas.width);
    }
}

function loadPictureFromFileSystem() {
    return;
}

loadPictureFromUrl("https://images.unsplash.com/photo-1639269966566-fabc0b3f2a4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80");