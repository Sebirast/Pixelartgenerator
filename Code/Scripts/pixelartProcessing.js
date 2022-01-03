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
}

export class Chunk {
    constructor(content, length){
        this.content = content;
        this.sideLength = length;

        if(this.sideLength % 2 == 1) {
            this.middlePixel = Math.ceil(Math.pow(this.sideLength, 2)/2) - 1;
        }
        else {
            // TODO think of a solution for even sidelenghts
        }
    }   
    

    static fillChunkWithData(index, sideLenght) {

    }

    getMiddlePixel() {
        return this.pixelArray[this.middlePixel];
    }

    fillChunkWithColor(pixel) {
        return;
    }
}