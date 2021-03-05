var car = /** @class */ (function () {
    function car(carColor, engineCapacity, noofCylinders) {
        this.carColor = carColor;
        this.engineCapacity = engineCapacity;
        this.noofCylinders = noofCylinders;
    }
    car.prototype.startCar = function () {
        console.log("Inside car start method");
    };
    car.prototype.stopCar = function () {
        console.log("Inside car stop method");
    };
    car.prototype.accelerateCar = function () {
        console.log("Inside accelerate method");
    };
    car.prototype.openCarLock = function () {
        console.log("car lock is open");
    };
    car.prototype.closeCarLock = function () {
        console.log("car lock is close");
    };
    car.prototype.disp = function () {
        console.log("carcolor : " + this.carColor);
        console.log("Engine : " + this.engineCapacity);
        console.log("Cylinder : " + this.noofCylinders);
    };
    return car;
}());
var ob = new car("RED", 1000, 4);
ob.startCar();
ob.stopCar();
ob.openCarLock();
ob.closeCarLock;
ob.accelerateCar();
ob.disp();
