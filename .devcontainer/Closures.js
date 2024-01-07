// simpale way 
//var i = 10;
//function outter(){
    //var j  =  20;
   // console.log(i,j);
   // function inner (){
   //     var k = 30;
   //     console.log(j,k);
   // }
   // inner();
//}
//outter();

// Other Way To Create Same 

 var i  = 10;
 function outter(){
    var j = 20;
    console.log(i,j);
    var inner = function(){
         var k = 30;
        console.log(j,k)
    }
    return inner;
 }
 var inner = outter(); 
 inner();