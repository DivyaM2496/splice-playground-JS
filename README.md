# 🔢 Array Splice App

## 📌 Overview

The **Array Splice App** is a simple web application built using **JavaScript** that allows users to manipulate an array using the `splice` method. Users can remove elements, add new elements, or replace existing elements in the array dynamically.

This project is ideal for beginners to practice **array manipulation**, **DOM interaction**, and **user input handling** in JavaScript.

---

## 🧩 Features

* Display the original array as a string
* Remove elements from a specific index
* Add new elements at a specific index
* Replace elements dynamically
* Display the updated array instantly

---

## 🛠️ Technologies Used

* HTML5
* CSS3
* JavaScript

---

## ⚙️ How It Works

1. The array is initially displayed as a string using `JSON.stringify()`.
2. Users provide:

   * `Start Index`: the position in the array where changes begin
   * `Delete Count`: the number of elements to remove
   * `Item to Add`: an optional element to insert
3. Clicking the **Splice** button calls the `onSpliceBtn()` function:

   * Validates user input
   * Performs the `arr.splice(startIndex, deleteCount, itemToAdd)` operation
   * Updates the displayed array

---

## 📂 Project Structure

```
array-splice-app/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## 🧪 JavaScript Logic

```js
function onSpliceBtn() {
    let startIndex = parseInt(startInputEl.value);
    let deleteCount = parseInt(deleteInputEl.value);
    let itemToAdd = itemEl.value;

    if (startIndex === "") {
        alert("Enter a valid start index");
        return;
    } else {
        if (deleteCount === "") { deleteCount = 0; }
        arr.splice(startIndex, deleteCount, itemToAdd);
        stringifyArray();
    }
}
```

---

## 📚 Concepts Covered

* Array manipulation using `splice()`
* Converting arrays to strings using `JSON.stringify()`
* DOM element selection and content update
* User input validation

---

## 🚀 Future Improvements

* Support adding multiple items at once
* Handle invalid input more gracefully
* Display array elements in a more readable format
* Allow undo/redo operations

---

## 👩‍💻 Author

Created as a practice project to strengthen **JavaScript array manipulation** and **DOM interaction** skills.

---

⭐ If you find this project useful, feel free to star the repository!
