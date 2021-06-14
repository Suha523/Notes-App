let input = document.querySelector("input");
let list = document.getElementById("notesList");
let btn = document.querySelector("button");

let colors = ["bg-success","bg-danger","bg-primary","bg-warning","bg-dark", "bg-info", "bg-secondary"]
let notes = [];


if (localStorage.getItem("notesList")!=null){
    notes = JSON.parse(localStorage.getItem("notesList"));
    showNotes()
}

btn.addEventListener("click",function(){
    addNote();
    showNotes();
});

function addNote(){
  let note = input.value;
  let background = changeBackground()
  let noteObj = {
     text :note,
     bg : colors[background-1],
  }
  console.log(noteObj)
  notes.push(noteObj);
  input.value = ""
  localStorage.setItem("notesList", JSON.stringify(notes));
}

function changeBackground(){
    let r =  Math.ceil(Math.random() * 7) ;
    return r;
}

function showNotes(){
    let data = '';
    notes.forEach((note,index)=>{
        data+=`
        <li class="col-md-4 mb-4">
             <div class="card text-white ${note.bg} mb-3 h-60 rotate  my-font">
                <div class="card-header">
                  <img class="w-25" src="images/pin-clip.png" alt="clip pin">
                  Note ${index}
                  <button class="btn w-25 float-right" onclick="deleteNote(${index})">X</button>
                </div>
                <div class="card-body overflow-auto">
                    <p class="card-text my-font">${note.text}</p>
                </div>
             </div>
        </li>
       `
    });

    list.innerHTML = data;
}

function deleteNote(index){
   notes.splice(index,1);
   localStorage.setItem("notesList", JSON.stringify(notes));
   showNotes();
}




