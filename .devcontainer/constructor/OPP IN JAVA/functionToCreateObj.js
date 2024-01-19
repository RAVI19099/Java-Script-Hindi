//to  ceate instance of obj 
function createStudent(name,rollNo,marks){
var student={};
student.name=name,
student.rollNo=rollNo,
student.marks=marks
return student;
}
var student1 = createStudent("ravi",1996,13);
var student2 = createStudent("chanda",1996,7);
console.log(student1);
console.log(student2);
