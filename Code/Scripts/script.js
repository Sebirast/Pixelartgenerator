import * as utilities from "./utilities.js";
import * as processing from "./pixelartProcessing.js"

const canvas = document.getElementById("Canvas");
const canvasContext = canvas.getContext("2d");
const defaultImage = "https://images.unsplash.com/photo-1629197519111-053d2be5b392?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2023&q=80";

const urlInput = document.getElementById("getUrl");
const urlSubmitButton = document.getElementById("submitUrl");

const resetButton = document.getElementById("resetButton");

const viaFilesystemButton = document.getElementById("viaFileSystemButton");
const fileInputButton = document.getElementById("fileInputButton");

const downLoadButton = document.getElementById("downLoadButton");

export const pixelSizeSlider = document.getElementById("pixelSizeSlider");
export const aSlider = document.getElementById("aSlider");

let counter = 0;
let imageData;

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
        imageData = canvasContext.getImageData(0, 0, canvas.width, canvas.height);

        console.log(imageData.width, imageData.height);

        let pixelArray = processing.Pixel.toPixelArray(imageData.data);
        let chunk = processing.Chunk.fillChunkWithData(0, 20, pixelArray, imageData.width, 0);
        let chunk2 = processing.Chunk.fillChunkWithData(0, 20, pixelArray, imageData.width, 2);
        // console.log(chunk.pixelArray);
        let data = imageData.data;

        console.log(chunk.pixelArray);
        console.log(chunk.pixelArray.length);

        imageData = chunk.addChunkToImageData(imageData);
        imageData = chunk2.addChunkToImageData(imageData);

        canvasContext.putImageData(imageData, 0, 0);
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