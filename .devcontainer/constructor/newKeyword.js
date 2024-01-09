function vihicle(name){
    this.name=name;
    console.log(this);

}
new vihicle("car")
function Student(name){
    this.name = name ;
    console.log(this) ;
}
var student1 = new Student("Raj") ;
console.log(student1.name);
console.log(this);