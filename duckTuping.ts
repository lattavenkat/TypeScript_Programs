class houseA{
    bgcolor:String="RED";
    
   }
   class houseB{
   bgcolor:String="blue";
   buildOf(){
      let wtyp:string ="WOOD";    
       console.log(wtyp);
    }
   }
   class houseC{
   bgcolor:String="green";
   builodOf(){
        let wtyp:string ="METAL";    
       console.log(wtyp);
    }
   }
   let myob1:houseA=new houseB();
   let myob2:houseB=new houseB();
   let myob3:houseA=new houseC();
   console.log(myob1.bgcolor);
   myob2.buildOf();
   