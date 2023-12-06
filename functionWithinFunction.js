function outer(){
    let out = 10 
     function inner(){
         console.log(out);
     }
     inner();
 }
 outer();