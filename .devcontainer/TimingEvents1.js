//function sayHello(){
    //console.log("hello");
  //}
 // setTimeout(sayHello,1000);
  
  //for repeatelly we use setInterval
  
  //setInterval(sayHello,1000)
  //this goes infinite times we need to stop 
  //by clear intervval
  var sec = 1;
  function sayHello(){
    console.log("hello",sec);
    sec++;
    if(sec==6){
        //stop
        clearInterval(id);
    }

  }
  var id =  setInterval(sayHello,1000)