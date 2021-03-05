abstract class abscar{
    carname:String;
    carcolor:String;
    enginecapacity:number;
    noofcylinders:number;

    constructor(carname:String,carcolor:String, enginecapacity:number,noofcylinders:number){
        this.carname=carname;
        this.carcolor=carcolor;
        this.enginecapacity=enginecapacity;
        this.noofcylinders=noofcylinders;
    }
    abstract startCar();
    abstract stopCar();
}
class suv extends abscar{
    carname:String;
    carcolor:String;
    enginecapacity:number;
    noofcylinders:number;
    Manufacturer:String;
    Price:number;
    constructor(carname:String,carcolor:String, enginecapacity:number,noofcylinders:number,Manufacturer:String,Price:number){
        super(carname,carcolor,enginecapacity,noofcylinders);
        this.Manufacturer=Manufacturer;
        this.Price=Price;
    }
    startCar(){
        console.log(this.carname + " is Ready to Start..");
    }
    stopCar(){
        console.log(this.carname + " is Halted..");
    }
    display(){
        console.log("Car Name : " +this.carname);
        console.log("Car Color : " +this.carcolor);
        console.log("Engine Capacity : " +this.enginecapacity);
        console.log("No of Cylinders : " +this.enginecapacity);
        console.log("Manufacturer : " +this.Manufacturer);
        console.log("Price : "+this.Price);
    }
}
class HatchBack extends abscar{
    carname:String;
    carcolor:String;
    enginecapacity:number;
    noofcylinders:number;
    Manufacturer:String;
    Price:number;
    constructor(carname:String,carcolor:String, enginecapacity:number,noofcylinders:number,Manufacturer:String,Price:number){
        super(carname,carcolor,enginecapacity,noofcylinders);
        this.Manufacturer=Manufacturer;
        this.Price=Price;
    }
    startCar(){
        console.log(this.carname + " is Ready to Start..");
    }
    stopCar(){
        console.log(this.carname + " is Halted..");
    }
    display(){
        console.log("Car Name : " +this.carname);
        console.log("Car Color : " +this.carcolor);
        console.log("Engine Capacity : " +this.enginecapacity);
        console.log("No of Cylinders : " +this.noofcylinders);
        console.log("Manufacturer : " +this.Manufacturer);
        console.log("Price : "+this.Price);
    }
}
class Sedan extends abscar{
    carname:String;
    carcolor:String;
    enginecapacity:number;
    noofcylinders:number;
    Manufacturer:String;
    Price:number;
    constructor(carname:String,carcolor:String, enginecapacity:number,noofcylinders:number,Manufacturer:String,Price:number){
        super(carname,carcolor,enginecapacity,noofcylinders);
        this.Manufacturer=Manufacturer;
        this.Price=Price;
    }
    startCar(){
        console.log(this.carname + " is Ready to Start..");
    }
    stopCar(){
        console.log(this.carname + " is Halted..");
    }
    display(){
        console.log("Car Name : " +this.carname);
        console.log("Car Color : " +this.carcolor);
        console.log("Engine Capacity : " +this.enginecapacity);
        console.log("No of Cylinders : " +this.noofcylinders);
        console.log("Manufacturer : " +this.Manufacturer);
        console.log("Price : "+this.Price);
    }
}
let suvobj:suv=new suv("Ferrari","Black",9,6,"Ferrari",9.6);
console.log("SUV CAR DETAILS");
suvobj.display();
suvobj.startCar();
suvobj.stopCar();
console.log();
let hatchobj:HatchBack=new HatchBack("Mustang","Red",58,3,"Ford",5.67);
console.log("HATCHBACK CAR DETAILS");
hatchobj.display();
hatchobj.startCar();
hatchobj.stopCar();
let sedanobj:Sedan=new Sedan("Chevrolet","Red",190,8,"Chevrolet motors",19.9);
console.log("SEDAN CAR DETAILS");
sedanobj.display();
sedanobj.startCar();
sedanobj.stopCar();