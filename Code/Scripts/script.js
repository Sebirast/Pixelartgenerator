import * as utilities from "./utilities.js";

const canvas = document.getElementById("Canvas");
const canvasContext = canvas.getContext("2d");
const defaultImage = "https://images.unsplash.com/photo-1629197519111-053d2be5b392?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2023&q=80";

const urlInput = document.getElementById("getUrl");
const urlSubmitButton = document.getElementById("submitUrl");

const resetButton = document.getElementById("resetButton");

const viaFilesystemButton = document.getElementById("viaFileSystemButton");
const fileInputButton = document.getElementById("fileInputButton");

var counter = 0;


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
    image.src = url;

    return image;
}

function loadPictureFromFileSystem(event) {
    fileInputButton.click();

    // var checkExist = setInterval(function() {
    //     if (event.target.files[0]) {
    //        console.log("Exists!");
    //        clearInterval(checkExist);
    //     }
    // }, 100);

    // https://stackoverflow.com/questions/63151823/how-to-display-a-picture-from-file-input-to-canvas

    var image = new Image();
    image.src = URL.createObjectURL(event.target.files[0]);
    drawImage(image);
}

function drawImage(image) {
    image.onload = function() {
        canvas.width = image.width;
        canvas.height = image.height;

        canvasContext.drawImage(image, 0, 0);
    }
}

window.onload = resetImage;
urlSubmitButton.addEventListener("click", getUrl);
resetButton.addEventListener("click", resetImage);
viaFilesystemButton.addEventListener("click", loadPictureFromFileSystem);
fileInputButton.addEventListener("change", loadPictureFromFileSystem);