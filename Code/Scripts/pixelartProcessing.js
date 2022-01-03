import { aSlider, pixelSizeSlider } from "./script.js";

let processingTypes = {
    median, 
    average, 
    middlePixel, 
    range
};

export class Pixel {
    constructor(r, g, b, a) {
        this.red = r;
        this.green = g;
        this.blue = b;
        this.alpha = a;
    }

    getData() {
        return {
            red: this.red,
            green: this.green, 
            blue: this.blue,
            alpha: this.alpha
        };
    }
    
    static toPixelArray(data) {
        let array = []; 
        for(let i = 0; i < data.length; i += 4) {
            let p = new Pixel(
                data[i],
                data[i + 1],
                data[i + 2],
                data[i + 3]
            )
            array.push(p);
        }
        return array;
    }
    
    static toImageData(pixelArray, imageData) {
        for(let i = 0; i < pixelArray.length; i += 4) {
            imageData[i] = pixelArray[i];
            imageData[i + 1] = pixelArray[i + 1];
            imageData[i + 2] = pixelArray[i + 2];
            imageData[i + 3] = pixelArray[i + 3];
        }
    }
}

export class Chunk {
    constructor(pixelArray) {
        this.pixelArray = pixelArray;
        this.sideLength = length;

        if(this.sideLength % 2 == 1) {
            this.middlePixel = Math.ceil(Math.pow(Math.sqrt(pixelArray.length), 2)/2) - 1;
        }
        else {
            // TODO think of a solution for even sidelenghts
        }
    }   
    

    static fillChunkWithData(indexOfChunk, sideLength, pixelArray, width, height) {
        let array = [];
        let indexOfFirstPixel = indexOfChunk * sideLength; // TODO is that really right

        for(let i = 0; i < sideLength; i++) {
            for(let o = 0; o < sideLength; o++) {
                let index = i * width
                array.push(pixelArray[(width * i) + o]);
            }
        }

        return new Chunk(array);
    }

    getMiddlePixel() {
        return this.pixelArray[this.middlePixel];
    }

    fillChunkWithColor(pixel) {
        return;
    }
}