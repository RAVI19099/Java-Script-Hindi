var i  = 10;
function outter(){
    var j = 20;
    //console.log(i,j)
    var inner = function(){
        var k =30;
        console.log(i,j,k);
        //1.
        k++;
        //2
        j++;
        //3
        i++;
    }
    return inner;
}
var inner = outter();
inner();
//4
var inner = outter();
inner();