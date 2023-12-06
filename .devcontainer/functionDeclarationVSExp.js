
console.log(factorial(5));
console.log(factorial);
var factorial = function fact(n){
    var ans = 1;
    for(var i = 1;i<=n;i++){
        ans = ans*i;
    }
    return ans;
}
// console.log(factorial(5));
// console.log(factorial);

// *****Insted Of Above Thing IF We Use Fun Decl*****//
console.log(fact(5));
function fact(n){
    var ans = 1;
    for(var i = 1;i<=n;i++){
        ans = ans*i;
    }
    return ans;
}