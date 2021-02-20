var students = [];

function Student(firstName, lastName, img, major, bio){
  this.firstName = firstName;
  this.lastName = lastName;
  this.img = img;
  this.major = major;
  this.bio = bio;
  this.newStudent = function () {
    return "<div class='studentForm'>" + "<div class='fullName'>" 
    + this.firstName + " " + this.lastName + " " + "<div class='far fa-user' style='font-size: 1.6em'></div>" + "</div>" 
    + this.img + "<br>" + "<div class='fieldOfStudy'>Field of study: " 
    + this.major + "</div>" + "<br>" + "<div class='bio'>" 
    + this.bio + "</div>" + "</div>";
  }
}

function newStudent() {
   output = "";
   for(var i = 0; i < students.length; i++) {
      output += students[i].newStudent();
   }
   document.getElementById("output").innerHTML = output;
}

function pushStudent() {
  var student =  new Student(
    document.getElementById("firstName").value, 
    document.getElementById("lastName").value, 
    document.getElementById("img").value,
    document.getElementById("major").value,
    document.getElementById("bio").value
  );
  students.push(student);
  newStudent();

  console.log(student);
  console.log(students);
}


