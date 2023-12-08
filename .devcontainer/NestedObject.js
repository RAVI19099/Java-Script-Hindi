var student = {
    name:"Ravi",
    age:26,
    address:{
        city:"delhi",
        pinCode:312204
    }
};
console.log(student.address["city"]);
for(var demo in student){
    console.log(demo,student["demo"]);
}

