const searchInput = document.getElementById("gps-search");
const btn = document.getElementById("btn");

btn.addEventListener("click", function (event) {
    event.preventDefault();
    let searchInputVal = searchInput.value;
    // let newArr = [];
    // for (let i = 0; i < searchInputVal.length; i++) {
    //     let result = searchInputVal[i].replace("/", ",");
    //     newArr[i] = result;
    // }
    // alert("you have submitted: " + newArr);
    let result = searchInputVal.replace("/", ",")
    alert("you have submitted: " + result);
});