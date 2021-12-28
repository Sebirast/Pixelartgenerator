export function isUrlValid(testUrl) {
    let url;
    try {
        url = new URL(testUrl);
    }
    catch(exception) {
        return false;
    }

    if(testUrl.match(".(jpeg|jpg|gif|png)" != true)) {
        return false;
    }

    return url.protocol === "http:" || url.protocol === "https:";
}
