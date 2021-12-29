import * as utilities from "./utilities.js";

const canvas = document.getElementById("Canvas");
const canvasContext = canvas.getContext("2d");
const defaultImage = "https://images.unsplash.com/photo-1629197519111-053d2be5b392?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2023&q=80";

const urlInput = document.getElementById("getUrl");
const urlSubmitButton = document.getElementById("submitUrl");

const resetButton = document.getElementById("resetButton");

const viaFilesystemButton = document.getElementById("viaFileSystemButton");
const fileInputButton = document.getElementById("fileInputButton");

let counter = 0;
let currentImageData;

function getUrl(event) {
    const url = urlInput.value;

    if(utilities.isUrlValid(url) == false) {
        alert("Url is not valid");
        return;
    }

    drawImage(loadPictureFromUrl(url));

    return url;
}

function resetImage() {
    if(counter != 0) {
        alert("All changes are lost");
    }
    canvasContext.globalAlpha = 0.5;
    drawImage(loadPictureFromUrl(defaultImage));
    counter += 1;
}

function loadPictureFromUrl(url) {
    let image = new Image;
    image.setAttribute('crossOrigin', '');
    image.src = url;

    return image;
}

function loadPictureFromFileSystem(event) {
    fileInputButton.click();

    var image = new Image();
    image.setAttribute('crossOrigin', '');
    image.src = URL.createObjectURL(event.target.files[0]);
    drawImage(image);
}

function drawImage(image) {
    canvasContext.clearRect(0, 0, canvas.width, canvas.height);
    image.onload = function() {
        canvas.width = image.width;
        canvas.height = image.height;

        canvasContext.drawImage(image, 0, 0);
        currentImageData = canvasContext.getImageData(0, 0, 100, 100).data;
        console.log(canvasContext.getImageData(0, 0, canvas.width, canvas.height).data);
    }
}

window.onload = resetImage;
urlSubmitButton.addEventListener("click", getUrl);
resetButton.addEventListener("click", resetImage);
viaFilesystemButton.addEventListener("click", loadPictureFromFileSystem);
fileInputButton.addEventListener("change", loadPictureFromFileSystem);