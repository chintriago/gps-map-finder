const gpsInput = document.getElementById("gps-input");
const searchButton = document.getElementById("search-button");
const googleButton = document.getElementById("google-button")
const input = document.getElementById("pac-input");
const arrowDownLink = document.getElementById("arrow-down-link");
let gpsInputValue;
let gpsEvent;

// Function that checks if x has an empty value it will add error state/message.
// It removes them if the length of the value is greater than 0.
function emptyInput(x) {
    if (x.value === "") {
        event.preventDefault();
        gpsInput.classList.add("border-error");
        gpsInput.placeholder = "cannot be empty";
    } else if (x.value.length > 0) {
        gpsInput.classList.remove("border-error");
        gpsInput.placeholder = "";
    }
};

// Search button click event listener.
// Prevents default behavior on search button.
// If gps input value is not empty
// automatically search input value
// on google maps. Then scroll to bottom of page.
searchButton.addEventListener("click", function (event) {
    event.preventDefault();
    emptyInput(gpsInput);
    gpsInputValue = gpsInput.value.replace("/", ",");;
    gpsEvent = new KeyboardEvent('keydown', {
        key: 'Enter',
        code: 'Enter',
        which: 13,
        keyCode: 13,
    });
    if (gpsInputValue.length > 0) {
        gpsInput.value = gpsInputValue
        input.value = gpsInputValue;
        input.focus();
        input.dispatchEvent(gpsEvent);
        window.scrollTo(0, document.body.scrollHeight);
    } else {
        return false;
    }
});

// Google button click event listener.
// Prevents default behavior on search button.
// checks for empty input.
// checks for incorrect gps format and fixes it.
// Updates google button href to go to google maps
// website with input gps coordinates.
googleButton.addEventListener("click", function (event) {
    emptyInput(gpsInput);
    gpsInputValue = gpsInput.value.replace("/", ",");
    gpsInput.value = gpsInputValue
    googleButton.href = "http://maps.google.com/?q=" + gpsInputValue;
});