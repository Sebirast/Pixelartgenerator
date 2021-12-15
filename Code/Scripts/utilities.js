export function getMeta(url) {
    let height;
    let width;
    let image = new Image;
    image.src = url;
    image.onload = function() {
        height = this.height;
        width = this.width;
    }

    return ;
}