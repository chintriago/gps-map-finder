const gpsInput = document.getElementById("gps-input");
const searchButton = document.getElementById("search-button");
const googleButton = document.getElementById("google-button")
const input = document.getElementById("pac-input");
const arrowDownLink = document.getElementById("arrow-down-link");
let gpsInputValue;
let gpsResult;
let activeInput;
let gpsEvent;

function emptyInput(x) {
    activeInput = gpsInput.activeElement;
    if (x.value === "") {
        event.preventDefault();
        gpsInput.classList.add("border-error");
        gpsInput.placeholder = "cannot be empty";
    } else if (x.value.length > 0) {
        gpsInput.classList.remove("border-error");
        gpsInput.placeholder = "";
    }
}

gpsInput.addEventListener("input", function () {
    gpsInputValue = gpsInput.value;
    if (gpsInputValue.length > 0) {
        gpsInput.classList.remove("border-error");
        gpsInput.placeholder = "";
    }
});


searchButton.addEventListener("click", function (event) {
    event.preventDefault();
    emptyInput(gpsInput);
    gpsInputValue = gpsInput.value;
    gpsResult = gpsInputValue.replace("/", ",");
    gpsEvent = new KeyboardEvent('keydown', {
        key: 'Enter',
        code: 'Enter',
        which: 13,
        keyCode: 13,
    });
    if (gpsInputValue.length > 0) {
        input.value = gpsResult;
        arrowDownLink.click();
        input.focus();
        input.dispatchEvent(gpsEvent);
        // scrolls to bottom of the page
        // found solution below
        window.scrollTo(0, document.body.scrollHeight);
    } else {
        return false;
    }

});

googleButton.addEventListener("click", function (event) {
    emptyInput(gpsInput);
    gpsInputValue = gpsInput.value;
    gpsResult = gpsInputValue.replace("/", ",")
    googleButton.href = "http://maps.google.com/?q=" + gpsResult;
});