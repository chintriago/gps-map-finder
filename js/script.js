const gpsInput = document.getElementById("gps-input");
const searchButton = document.getElementById("search-button");
const input = document.getElementById("pac-input");
const bottom = document.getElementById("bottom");
let gpsInputValue;
let gpsResult;

searchButton.addEventListener("click", function (event) {
    event.preventDefault();
    gpsInputValue = gpsInput.value;
    console.log(gpsInputValue);
    gpsResult = gpsInputValue.replace("/", ",")
    console.log(gpsResult);
    input.value = gpsResult;
    input.focus();
    // scrolls to bottom of the page
    // found solution below
    // https://stackoverflow.com/questions/11715646/scroll-automatically-to-the-bottom-of-the-page
    window.scrollTo(0, document.body.scrollHeight);
});