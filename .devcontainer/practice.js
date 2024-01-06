var sec = 1;
function say(){
    console.log("hey",sec);
    sec++;
    if(sec==5){
        clearInterval(id);
    }
}
//setTimeout(say,1000);
//for repetively 
var id=setInterval(say,1000);