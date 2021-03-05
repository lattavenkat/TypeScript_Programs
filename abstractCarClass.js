var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var abscar = /** @class */ (function () {
    function abscar(carname, carcolor, enginecapacity, noofcylinders) {
        this.carname = carname;
        this.carcolor = carcolor;
        this.enginecapacity = enginecapacity;
        this.noofcylinders = noofcylinders;
    }
    return abscar;
}());
var suv = /** @class */ (function (_super) {
    __extends(suv, _super);
    function suv(carname, carcolor, enginecapacity, noofcylinders, Manufacturer, Price) {
        var _this = _super.call(this, carname, carcolor, enginecapacity, noofcylinders) || this;
        _this.Manufacturer = Manufacturer;
        _this.Price = Price;
        return _this;
    }
    suv.prototype.startCar = function () {
        console.log(this.carname + " is Ready to Start..");
    };
    suv.prototype.stopCar = function () {
        console.log(this.carname + " is Halted..");
    };
    suv.prototype.display = function () {
        console.log("Car Name : " + this.carname);
        console.log("Car Color : " + this.carcolor);
        console.log("Engine Capacity : " + this.enginecapacity);
        console.log("No of Cylinders : " + this.enginecapacity);
        console.log("Manufacturer : " + this.Manufacturer);
        console.log("Price : " + this.Price);
    };
    return suv;
}(abscar));
var HatchBack = /** @class */ (function (_super) {
    __extends(HatchBack, _super);
    function HatchBack(carname, carcolor, enginecapacity, noofcylinders, Manufacturer, Price) {
        var _this = _super.call(this, carname, carcolor, enginecapacity, noofcylinders) || this;
        _this.Manufacturer = Manufacturer;
        _this.Price = Price;
        return _this;
    }
    HatchBack.prototype.startCar = function () {
        console.log(this.carname + " is Ready to Start..");
    };
    HatchBack.prototype.stopCar = function () {
        console.log(this.carname + " is Halted..");
    };
    HatchBack.prototype.display = function () {
        console.log("Car Name : " + this.carname);
        console.log("Car Color : " + this.carcolor);
        console.log("Engine Capacity : " + this.enginecapacity);
        console.log("No of Cylinders : " + this.noofcylinders);
        console.log("Manufacturer : " + this.Manufacturer);
        console.log("Price : " + this.Price);
    };
    return HatchBack;
}(abscar));
var Sedan = /** @class */ (function (_super) {
    __extends(Sedan, _super);
    function Sedan(carname, carcolor, enginecapacity, noofcylinders, Manufacturer, Price) {
        var _this = _super.call(this, carname, carcolor, enginecapacity, noofcylinders) || this;
        _this.Manufacturer = Manufacturer;
        _this.Price = Price;
        return _this;
    }
    Sedan.prototype.startCar = function () {
        console.log(this.carname + " is Ready to Start..");
    };
    Sedan.prototype.stopCar = function () {
        console.log(this.carname + " is Halted..");
    };
    Sedan.prototype.display = function () {
        console.log("Car Name : " + this.carname);
        console.log("Car Color : " + this.carcolor);
        console.log("Engine Capacity : " + this.enginecapacity);
        console.log("No of Cylinders : " + this.noofcylinders);
        console.log("Manufacturer : " + this.Manufacturer);
        console.log("Price : " + this.Price);
    };
    return Sedan;
}(abscar));
var suvobj = new suv("Ferrari", "Black", 9, 6, "Ferrari", 9.6);
console.log("SUV CAR DETAILS");
suvobj.display();
suvobj.startCar();
suvobj.stopCar();
console.log();
var hatchobj = new HatchBack("Mustang", "Red", 58, 3, "Ford", 5.67);
console.log("HATCHBACK CAR DETAILS");
hatchobj.display();
hatchobj.startCar();
hatchobj.stopCar();
var sedanobj = new Sedan("Chevrolet", "Red", 190, 8, "Chevrolet motors", 19.9);
console.log("SEDAN CAR DETAILS");
sedanobj.display();
sedanobj.startCar();
sedanobj.stopCar();
