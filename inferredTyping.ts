console.log("INFERRED TYPING");
function multiply(x:number,y:number):number{
    return x*y;
}
//let result:String=multiply(5,6); Throws error
let result:number=multiply(10,5);
console.log(result);
