function vehicle(numWheels,price){
    this.numWheels = numWheels;
    this.price = price
    //adding bebhaviour
    this.getprice = function(){
        return price;
    }
}
var vehicle1 = new vehicle(2,1000);
var vehicle2 = new vehicle(3,4000);
