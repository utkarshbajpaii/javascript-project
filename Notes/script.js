const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

function showNotes() {
    notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes();

function update() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}

createBtn.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "images/delete.png";
    inputBox.appendChild(img);
    notesContainer.appendChild(inputBox);
    update(); // Update localStorage after adding a new note
});

notesContainer.addEventListener("click", function (e) {
    if (e.target.tagName === 'IMG') {
        e.target.parentElement.remove();
        update();
    } else if (e.target.tagName === "P") {
        notes = document.querySelectorAll(".input-box"); // Use querySelectorAll to get all notes
        notes.forEach(note => {
            note.onkeyup = function () {
                update();
            }
        });
    }
});
