import * as utilities from "./utilities.js";

const canvas = document.getElementById("Canvas");
const canvasContext = canvas.getContext("2d");
const defaultImage = "https://images.unsplash.com/photo-1629197519111-053d2be5b392?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2023&q=80";

const urlInput = document.getElementById("getUrl");
const urlSubmitButton = document.getElementById("submitUrl");

const resetButton = document.getElementById("resetButton");

const viaFilesystemButton = document.getElementById("viaFileSystemButton");
const fileInputButton = document.querySelector("#fileInputButton");


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
    canvasContext.globalAlpha = 0.5;
    drawImage(loadPictureFromUrl(defaultImage));
}

function loadPictureFromUrl(url) {
    let image = new Image;
    image.src = url;

    return image;
}

function loadPictureFromFileSystem() {
    fileInputButton.click();
    var uploadedImage;

    // https://www.youtube.com/watch?v=lzK8vM_wdoY -> this video was used to write the following lines of code

    // fileInputButton.addEventListener("change", function() {
    //     const reader = new FileReader();
    //     reader.addEventListener("load", () => {
    //         uploadedImage = reader.result;
    //     });
    //     reader.readAsDataURL(this.files[0]);
    // });
    // var image = new Image();
    // image.src = uploadedImage;

    // drawImage(image);
    var uploadedImage;

    fileInputButton.addEventListener('change', function() {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
        uploadedImage = reader.result;
    });
    reader.readAsDataURL(this.files[0]);
    console.log(uploadedImage);
    drawImage(loadPictureFromUrl(uploadedImage));
    });
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
window.onload = resetImage;
urlSubmitButton.addEventListener("click", getUrl);
resetButton.addEventListener("click", resetImage);
viaFilesystemButton.addEventListener("click", loadPictureFromFileSystem);