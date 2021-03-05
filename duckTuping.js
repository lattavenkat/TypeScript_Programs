var houseA = /** @class */ (function () {
    function houseA() {
        this.bgcolor = "RED";
    }
    return houseA;
}());
var houseB = /** @class */ (function () {
    function houseB() {
        this.bgcolor = "blue";
    }
    houseB.prototype.buildOf = function () {
        var wtyp = "WOOD";
        console.log(wtyp);
    };
    return houseB;
}());
var houseC = /** @class */ (function () {
    function houseC() {
        this.bgcolor = "green";
    }
    houseC.prototype.builodOf = function () {
        var wtyp = "METAL";
        console.log(wtyp);
    };
    return houseC;
}());
var myob1 = new houseB();
var myob2 = new houseB();
var myob3 = new houseC();
console.log(myob1.bgcolor);
myob2.buildOf();
