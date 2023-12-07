var student = {
    "name":"Ravi",
    RollNo:132,
    marks:300
};

// first way to iterating
for(var prop in student){
    console.log(prop,student["prop"]);
}
//Another way to iterating
var keys = Object.keys(student);
// One More
var keys = Object.getOwnPropertyNames(student);