const addNote = document.getElementById("add");
const upfateList = () => {
  const textareaData = document.querySelectorAll("textarea");
  const notes = [];
  textareaData.forEach((note) => {
    return notes.push(note.value);
  });
  localStorage.setItem("notes", JSON.stringify(notes));
};
const addNewNote = (text = "") => {
  const note = document.createElement("div");
  note.classList.add("note");
  const htmlData = `  
    <div class="operation">
      <button class="edit green">
        <i class="fa fa-edit" aria-hidden="true"></i>
      </button>
      <button class="delet red">
        <i class="fa fa-trash" aria-hidden="true"></i>
      </button>
    </div>
    <div class="main ${text ? "" : "hidden"}"></div>
    <textarea name="" id="" cols="30" rows="10" class ="${text ? "hidden" : ""}" ></textarea>
 `;
  note.insertAdjacentHTML("afterbegin", htmlData);

  const editButton = note.querySelector(".edit");
  const deleButton = note.querySelector(".delet");
  const mainDiv = note.querySelector(".main");
  const textarea = note.querySelector("textarea");

  deleButton.addEventListener("click", () => {
    note.remove();
    upfateList();
  });
  textarea.value = text;
  mainDiv.innerHTML = text;
  editButton.addEventListener("click", () => {
    mainDiv.classList.toggle("hidden");
    textarea.classList.toggle("hidden");
  });
  textarea.addEventListener("change", (event) => {
    const vlaue = event.target.value;
    mainDiv.innerHTML = vlaue;
    upfateList();
  });
  document.getElementById("note-container").appendChild(note);
};

const notes = JSON.parse(localStorage.getItem("notes"));
if (notes) {
  notes.forEach((note) => addNewNote(note));
}

addNote.addEventListener("click", () => addNewNote());
