var notes = [];

function Note(title, date, priority, noteDetails){
  this.title = title;
  this.date = date;
  this.priority = priority;
  this.noteDetails = noteDetails;
  this.newNote = function () {
    return "<div id='notes' style='background-color:"+ this.priority + ";'>" 
    + "<div class='title'>" + this.title + "</div>" 
    + "<div class='date'>" + this.date + "</div>" 
    + "<br>" 
    + "<div class='details'>" + this.noteDetails + "</div>" 
    + "</div>";
    console.log(document.getElementById("priority").value);
  }
}

function newNote() {
   output = "";
   for(var i = 0; i < notes.length; i++) {
      output += notes[i].newNote();
   }
   document.getElementById("output").innerHTML = output;
}

function pushNote() {
  var note =  new Note(
    document.getElementById("title").value, 
    document.getElementById("date").value,
    document.getElementById("priority").value,
    document.getElementById("noteDetails").value
    
  );


  notes.push(note);
  newNote();

  console.log(note);
  console.log(notes);
}



