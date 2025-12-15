let arr = [1, 7, 3, 1, 0, 20, 77];

function stringifyArray() {
    let stringedarr = JSON.stringify(arr);
    let spanEl = document.getElementById("updatedArray");
    spanEl.textContent = stringedarr;
}

let startInputEl = document.getElementById("startIndexInput");
let deleteInputEl = document.getElementById("deleteCountInput");
let itemEl = document.getElementById("itemToAddInput");

function onSpliceBtn() {
    let startIndex = parseInt(startInputEl.value);
    let deleteCount = parseInt(deleteInputEl.value);
    let itemToAdd = itemEl.value;

    if (startIndex === "") {
        alert("Enter a valid start index");
        return;
    } else {
        if (deleteCount === "") {
            deleteCount = 0;
        }
        arr.splice(startIndex, deleteCount, itemToAdd);
        stringifyArray();
    }

}
