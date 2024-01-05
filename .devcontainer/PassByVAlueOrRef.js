function f(a,b,c){
     a= 5;
     b.push("yy");
     c["demo"]=2;
    

}
var x = 4;
var y = ["dd","mm"];
var z = {demo:1}
f(x,y,z);
console.log(x,y,z);