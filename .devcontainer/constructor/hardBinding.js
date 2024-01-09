var raj  = {
    name:'raj',
    greet:function(){
        console.log("hello",this)
    }
}
 //raj.greet();
 var localAsk = raj.greet;
 localAsk();//it will give the window obj 
 //but we raj  obj so we use local binding