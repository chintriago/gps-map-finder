const searchInput = document.getElementById("gps-search");
const btn = document.getElementById("btn");
const input = document.getElementById("pac-input");

btn.addEventListener("click", function (event) {
    event.preventDefault();
    let searchInputVal = searchInput.value;
    let result = searchInputVal.replace("/", ",")
    input.value = result;
    input.focus();
});