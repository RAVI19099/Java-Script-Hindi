var Student = {name:"Ravi",
RollNo:121,
Marks:360};
console.log(Student);
// dot Notation To Acess Elements
console.log(Student.Marks);
// Sqare Brackets Noataton to Aceass Element
console.log(Student["name"]);
// MAking A Function To Acess Elemrnts
function printProperty(Student,prop){
    console.log(Student[prop]);

}
printProperty(Student,"name");
//To Delete A Property
delete Student.Marks;
console.log(Student);
// Also Do THe Smae With Sqare Noation 