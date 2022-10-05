console.log("welcome to note app");

// if user add , add it to the local storage

const addBtn = document.getElementById('addBtn');
addBtn.addEventListener("click", function (e) {

    const addTxt = document.getElementById("addTxt");
    const notes = localStorage.getItem("notes");

    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }

    if (addTxt.value !== "") {
        notesObj.push(addTxt.value);
        localStorage.setItem("notes", JSON.stringify(notesObj));
        addTxt.value = "";
    }
    // console.log(notesObj);

    showNotes();
})

function showNotes() {
    const notes = localStorage.getItem("notes");
    // console.log(notes)
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach((element, index) => {
        html += `        
          <div class="card p-3 m-2" style="width: 18rem;"
            <div class="card-body">
              <h5 class="card-title">${element}</h5>
              <button id="delete-btn-${index}" class="btn btn-danger mt-2" onclick="deleteNote(this.id);">Delete note </button>
              
        
            </div>
          </div>`
    });


    let noteElm = document.getElementById("notes");
    if (notes.length !== 0) {
        noteElm.innerHTML = html;
    }
}

function deleteNote(noteId) {
    const deleteId = document.getElementById(noteId)
    const temp = noteId.split("-")
    index = temp[temp.length - 1]

    const notes = localStorage.getItem("notes");
    const notesObj = JSON.parse(notes);

    notesObj.splice(index, 1)
    localStorage.setItem("notes", JSON.stringify(notesObj));

    showNotes()
}


  //  <i class="ion-edit" id="edit-btn"-${index}"></i>
// function editNote(){
//     const editId = document.getElementById("edit-btn")
//     editId.addEventListener("click",function(){
        
//     })
// }