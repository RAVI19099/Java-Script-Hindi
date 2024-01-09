//# basically  explicit bind mean  to say  that it coonect the obj we that we need
const john = {
    name:"ravi"
}
 function ask(){
    console.log(this,this.name);
 }
 //now if we call simply ask fun 
 ask();//it will  return window obj but we need it returns john obj
 ask.call(john);//it tells ask  fun to call john obj  in ask fun it is explicit binding 