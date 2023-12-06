function c(){
 console.log("inside c");
}
function b(){
   c();
   console.log("inside b");
}
function a(){
    b();
    console.log("inside a");
}
a();
console.log("globally");