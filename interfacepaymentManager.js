var upiPaymentImpl = /** @class */ (function () {
    function upiPaymentImpl() {
    }
    upiPaymentImpl.prototype.doPayment = function (paymentapp, paymentcreds) {
        return paymentcreds + " RS in " + paymentapp + " is being processed";
    };
    upiPaymentImpl.prototype.getPaymentStatus = function (refNumber) {
        return "Payment Made Successful for " + refNumber + " reference number ";
    };
    return upiPaymentImpl;
}());
var creditCardPaymentImpl = /** @class */ (function () {
    function creditCardPaymentImpl() {
    }
    creditCardPaymentImpl.prototype.doPayment = function (paymentapp, paymentcreds) {
        return paymentcreds + " RS in " + paymentapp + " is being processed";
    };
    creditCardPaymentImpl.prototype.getPaymentStatus = function (refNumber) {
        return "Payment Made Successful for " + refNumber + " reference number ";
    };
    return creditCardPaymentImpl;
}());
var myob = new upiPaymentImpl();
console.log("UPIPAYMENT IMPLEMENTATION");
console.log(myob.doPayment("Phonepe", 100000));
console.log(myob.getPaymentStatus("7656789876"));
var myobj2 = new creditCardPaymentImpl();
console.log("CREDITCARDPAYMENT IMPLEMENTATION");
console.log(myobj2.doPayment("Yono SBI", 50000));
console.log(myobj2.getPaymentStatus("923456789123"));
