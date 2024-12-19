var popupoverlay = document.querySelector(".popup-overlay");
var popupbox = document.querySelector(".popup-box");
var addpopupbutton = document.getElementById("add-popup-button");

addpopupbutton.addEventListener("click", function () {
    popupoverlay.style.display = "block";
    popupbox.style.display = "block";
});

// Select cancel button
var cancelbutton = document.getElementById("cancel-popup");

cancelbutton.addEventListener("click", function (event) {
    event.preventDefault();
    popupoverlay.style.display = "none";
    popupbox.style.display = "none";
});

// Select container and input fields
var container = document.querySelector(".container");
var addbook = document.getElementById("add-book");
var booktitleinput = document.getElementById("book-title-input");
var bookauthorinput = document.getElementById("book-author-input");
var bookdescriptioninput = document.getElementById("book-description-input");

// Add book to the container
addbook.addEventListener("click", function (event) {
    event.preventDefault();

    // Create a new book container
    var div = document.createElement("div");
    div.setAttribute("class", "book-container");
    div.innerHTML = `
        <h2>${booktitleinput.value}</h2>
        <h5>${bookauthorinput.value}</h5>
        <p>${bookdescriptioninput.value}</p>
        <button onclick="deletebook(event)">Delete</button>
    `;

    // Append the new book to the container
    container.append(div);

    // Hide popup
    popupoverlay.style.display = "none";
    popupbox.style.display = "none";

    // Clear input fields
    booktitleinput.value = "";
    bookauthorinput.value = "";
    bookdescriptioninput.value = "";
});

// Function to delete a book
function deletebook(event) {
    event.target.parentElement.remove();
}
