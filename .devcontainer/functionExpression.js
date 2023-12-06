// 1.Name Function Expression 
var factorial = function fact(n){
    var ans = 1;
    for(var i = 1;i<=n;i++){
        ans = ans*i;
    }
    return ans;
}
console.log(factorial(5));
console.log(factorial);
// *******Without Name Exprission*****//
var factorial2 = function(n){
    var ans = 1;
    for(var i = 1;i<=n;i++){
        ans = ans*i;
    }
    return ans;
}
console.log(factorial2(5));
 console.log(factorial2);
//  We Use Name Function Expression B'coz It  Helps Us When We use recuurssion Algo 
// we Can Use Name inside Function So Use Name Function Expression 