import * as utilities from "./utilities.js";
import * as processing from "./pixelartProcessing.js";

const canvas = document.getElementById("Canvas");
const canvasContext = canvas.getContext("2d");
const defaultImage = "https://images.unsplash.com/photo-1629197519111-053d2be5b392?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2023&q=80";

const urlInput = document.getElementById("getUrl");
const urlSubmitButton = document.getElementById("submitUrl");

const resetButton = document.getElementById("resetButton");

const viaFilesystemButton = document.getElementById("viaFileSystemButton");
const fileInputButton = document.getElementById("fileInputButton");

const downLoadButton = document.getElementById("downLoadButton");

const goButton = document.getElementById("goButton");

let counter = 0;
let imageData;
let processor;
export let imageDataCopy;

let imageCopy;

console.log("Hello World");

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
    imageCopy = image;
    image.setAttribute('crossOrigin', '');
    image.src = url;

    return image;
}

function loadPictureFromFileSystem(event) {
    fileInputButton.click();

    var image = new Image();
    image.setAttribute('crossOrigin', '');
    image.src = URL.createObjectURL(event.target.files[0]);
    imageCopy = image;
    drawImage(image);
}

function drawImage(image) {
    canvasContext.clearRect(0, 0, canvas.width, canvas.height);
    image.onload = function() {
        canvas.width = image.width;
        canvas.height = image.height;

        canvasContext.drawImage(image, 0, 0);
        imageData = canvasContext.getImageData(0, 0, canvas.width, canvas.height);
    }
}

// https://www.sanwebe.com/snippet/downloading-canvas-as-image-dataurl-on-button-click
function downLoadImage() {
    var image = canvas.toDataURL("image/png", 1.0);
    var link = document.createElement('a');
    link.download = "my-image.png";
    link.href = image;
    link.click();
}

function setAlpha() {
    let sliderValue = aSlider.value;
    let data = imageData.data;

    for(let i = 0; i < data.length; i += 4) {
        data[i + 3] = sliderValue;
    }

    canvasContext.putImageData(imageData, 0, 0);
}

function setPixels() {
    let currentData = imageData;
    processor = processing.Processor.imageToChunkArray(currentData, pixelSizeSlider.value);

    processor.fillChunksWithColors();
    processor.addChunksToImageData(currentData, canvasContext, imageData);
}

window.onload = resetImage;
urlSubmitButton.addEventListener("click", getUrl);
resetButton.addEventListener("click", resetImage);
viaFilesystemButton.addEventListener("click", loadPictureFromFileSystem);
fileInputButton.addEventListener("change", loadPictureFromFileSystem);
downLoadButton.addEventListener("click", downLoadImage);

pixelSizeSlider.addEventListener("input", function() {
    const valueOfSlider = document.getElementById("valuePixelSizeSlider");
    valueOfSlider.textContent = pixelSizeSlider.value;
});

aSlider.addEventListener("input", function() {
    const valueOfSlider = document.getElementById("valueOfASlider");
    valueOfSlider.textContent = aSlider.value;
    setAlpha();
});

goButton.addEventListener("click", setPixels);
pixelSizeSlider.addEventListener("input", setPixels);

document.getElementById("refreshButton").addEventListener("click", function() {

    // for(let i = 0; i < imageData.data.length; i++) {
    //     imageData.data[i] = processing.imageDataCopy2[i];
    // }

    // console.log(imageDataCopy);
    // canvasContext.putImageData(imageData, 0, 0);
    // console.log("Hi");
    console.log(imageCopy);
    drawImage(loadPictureFromUrl(imageCopy.src));
});