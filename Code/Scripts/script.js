import * as utilities from "./utilities.js";
import * as processing from "./pixelartProcessing.js";

/**
 * varibles and objects
 */
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

const invisbleCanvas = document.getElementById("invisbleCanvas");
const invisbleCanvasContext = invisbleCanvas.getContext("2d");

const valueOfSlider = document.getElementById("valueOfASlider");

let counter = 0;
let imageData;
let processor;
export let imageDataCopy;

let imageCopy;

/**
 * functions
 */

function getUrl(event) {
    const url = urlInput.value;

    if(utilities.isUrlValid(url) == false) {
        alert("Url is not valid");
        return;
    }

    drawImage(loadPictureFromUrl(url));
    drawImageOnInvisbleCanvas(loadPictureFromUrl(url))

    return url;
}

/**
 * This function draws the image to a invisible canvas. I use the imageData of this canvas to calculate the pixel image 
 * as it was impossible to somehow store the imageData constant. It wasn't either possible to store the imageData to a 
 * other imageData object or a uint8ClampedArray as these objects then were refrenced
 * 
 * @param {*} image the imageCopy 
 */
function drawImageOnInvisbleCanvas(image) {
    invisbleCanvasContext.clearRect(0, 0, canvas.width, canvas.height);
    image.onload = function() {
        invisbleCanvas.width = image.width;
        invisbleCanvas.height = image.height;

        invisbleCanvasContext.drawImage(image, 0, 0);
        console.log("Hi");
    }

}


/**
 * This function is called when the website loads and when the image is reset with the resetImage button
 */
function resetImage() {
    if(counter != 0) {
        alert("All changes are lost");
    }
    canvasContext.globalAlpha = 0.5;
    drawImage(loadPictureFromUrl(defaultImage));
    counter += 1;
    drawImageOnInvisbleCanvas(loadPictureFromUrl(defaultImage));

    pixelSizeSlider.value = 1;
    valueOfSlider.textContent = pixelSizeSlider.value;
    aSlider.value = 255;
}

/**
 * this function converts a link of an image (unsplash) to an imageObject that can be drawn by the canvas
 * @param {*} url the image source 
 * @returns an image
 */
function loadPictureFromUrl(url) {
    let image = new Image;
    imageCopy = image;
    image.setAttribute('crossOrigin', '');
    image.src = url;

    return image;
}


/**
 * this function fetches a picture from the fileSystem of the galary of a phone and draws it afterwards
 * @param {*} event the event that containes the picture
 */
function loadPictureFromFileSystem(event) {
    fileInputButton.click();

    var image = new Image();
    image.setAttribute('crossOrigin', '');
    image.src = URL.createObjectURL(event.target.files[0]);
    drawImage(image);
    drawImageOnInvisbleCanvas(loadPictureFromUrl(image.src));
}

/**
 * function that draws the image to a canvas
 * @param {*} image the image that has to drawn
 */
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

/**
 * set the alpha channel of the srgb array of the image
 */
function setAlpha() {
    let sliderValue = aSlider.value;
    let data = imageData.data;

    for(let i = 0; i < data.length; i += 4) {
        data[i + 3] = sliderValue;
    }

    canvasContext.putImageData(imageData, 0, 0);
}

/**
 * function that converts the image to an pixelartpicture 
 */
function setPixels() {
    imageData = invisbleCanvasContext.getImageData(0, 0, invisbleCanvas.width, invisbleCanvas.height);
    processor = processing.Processor.imageToChunkArray(imageData, pixelSizeSlider.value);

    processor.fillChunksWithColors();
    processor.addChunksToImageData(imageData, canvasContext);
}

/**
 * eventlisteners:
 */
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
    valueOfSlider.textContent = aSlider.value;
    setAlpha();
});

goButton.addEventListener("click", setPixels);
pixelSizeSlider.addEventListener("input", setPixels);

document.getElementById("refreshButton").addEventListener("click", function() {
    console.log(imageCopy);
    drawImage(loadPictureFromUrl(imageCopy.src));
});