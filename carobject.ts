class car{
    carColor:String;
    engineCapacity:number;
    noofCylinders:number;
    constructor(carColor:String,engineCapacity:number,noofCylinders:number){
        this.carColor=carColor;
        this.engineCapacity=engineCapacity;
        this.noofCylinders=noofCylinders;
    }
    startCar(){
        console.log("Inside car start method");
    }
    stopCar(){
console.log("Inside car stop method");
    }
    accelerateCar(){
console.log("Inside accelerate method");
    }
    openCarLock(){
console.log("car lock is open");
    }
    closeCarLock(){
console.log("car lock is close");
    }

    disp(){
        console.log("carcolor : " +this.carColor);
        console.log("Engine : "+this.engineCapacity);
        console.log("Cylinder : "+this.noofCylinders);
    }
}
let ob:car=new car("RED",1000,4);
    ob.startCar();
    ob.stopCar();
    ob.openCarLock();
    ob.closeCarLock
    ob.accelerateCar();
    ob.disp();
