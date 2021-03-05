interface paymentManager
{
    doPayment(paymentapp:string,paymentcreds:number):string;
    getPaymentStatus(refNumber : string):string;
}

class upiPaymentImpl implements paymentManager{
    public doPayment(paymentapp:string,paymentcreds:number):string
    {
        return `${paymentcreds} RS in ${paymentapp} is being processed`;
    }
    public getPaymentStatus(refNumber: string): string {
       return `Payment Made Successful for ${refNumber} reference number `;
    }
}
class creditCardPaymentImpl implements paymentManager{
    doPayment(paymentapp:string,paymentcreds: number): string 
    {
        return `${paymentcreds} RS in ${paymentapp} is being processed`;
    }
    getPaymentStatus(refNumber: string): string {
        return `Payment Made Successful for ${refNumber} reference number `;
    }
}
let myob:upiPaymentImpl =new upiPaymentImpl();
console.log("UPIPAYMENT IMPLEMENTATION")
console.log(myob.doPayment("Phonepe",100000));
console.log(myob.getPaymentStatus("7656789876"));

let myobj2:creditCardPaymentImpl=new creditCardPaymentImpl();
console.log("CREDITCARDPAYMENT IMPLEMENTATION");
console.log(myobj2.doPayment("Yono SBI",50000));
console.log(myobj2.getPaymentStatus("923456789123"));
