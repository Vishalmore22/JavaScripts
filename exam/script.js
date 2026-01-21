const noteContainer = document.getElementById("note-container");
const addNoteButton = document.getElementById("add-note-button");
const titleInput = document.getElementById("title");
const discriptionInput = document.getElementById("discription");

let isUpdate = false;
let updateIndex = 0;
let notes = [];

const addNote = () => {
    const title = titleInput.value;
    const discription = discriptionInput.value;

    notes.push({
        title: title,
        discription: discription
    })

    localStorage.setItem("notes-array", JSON.stringify(notes));

    displayNote();

    titleInput.value = "";
    discriptionInput.value = "";
};
const displayNote = () => {
    noteContainer.innerHTML = "";
    let data = localStorage.getItem("notes-array");
    if (data == null) {
        data = "[]";
    }
    notes = JSON.parse(data);
    notes.forEach((note, i) => {
        const div = document.createElement("div");
        div.className = "card w-25 m-2";
        div.innerHTML = `<div class="card-body">
        <h5 class="card-title">${note.title}</h5>
        <p class="card-text">
           ${note.discription}
        </p>
        <button onclick="startUpdate(${i})" class="btn btn-warning">    
            Edit 
        </button>
        <button onclick="deleteNote(${i})" class="btn btn-danger">
            Delete
        </button>
        </div>`;
        noteContainer.appendChild(div);
    })
}
const deleteNote = (i) => {
    notes.splice(i, 1);
    localStorage.setItem("notes-array", JSON.stringify(notes));
    displayNote();
}
const startUpdate = (i) => {
    isUpdate = true;
    updateIndex = i;
    titleInput.value = notes[i].title;
    discriptionInput.value = notes[i].discription;
    addNoteButton.textContent = "Update Note";
}

const updateNote = () => {
    notes[updateIndex].title = titleInput.value;
    notes[updateIndex].discription = discriptionInput.value;
    localStorage.setItem("notes-array", JSON.stringify(notes));
    displayNote();
    isUpdate = false;
    titleInput.value = "";
    discriptionInput.value = "";
    addNoteButton.textContent = "Add Note"
}

displayNote();

const handleUpdateAndINsert = () => {
    if (isUpdate) {
        updateNote();
    } else {
        addNote();
    }
}

addNoteButton.addEventListener("click", handleUpdateAndINsert);
