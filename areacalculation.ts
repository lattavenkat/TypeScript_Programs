class areacalculation{
    
    public square(x:number){
        var res:number=x*x;
        console.log("AREA OF SQAURE"+res.toFixed(2));
    }
    public  rectangle(a:number,b:number,c:number){
        var res:number=2*(a*b + b*c + a*c);
        console.log("AREA OF RECTANGLE"+res.toFixed(2));
    }
    public triangle(b:number,h:number,s1:number,s2:number,s3:number,H:number){
         var res:number=b*h+(s1+s2+s3)*H;
          console.log("SURFACE AREA OF TRIANGLE"+res.toFixed(2));
      }
}
let obj:areacalculation= new areacalculation();
console.log("AREA CALCULATION");
let res1=obj.square(9.9);
let res2=obj.rectangle(10.8,10.4,7.5);
let res3=obj.triangle(45,45.6,30,30,30,54);

