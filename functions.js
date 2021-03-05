//FUNCTION WITH DEFAULT PARAMETER
console.log("FUNCTION WITH DEFAULT PARAMETER");
function defaultparams(firstname, lastname) {
    if (lastname === void 0) { lastname = "Smith"; }
    return lastname + ' ' + firstname + '!';
}
console.log(defaultparams('William'));
console.log(defaultparams('Davis'));
console.log(defaultparams('Brown', 'Welcome'));
//FUNCTION WITH OPTIONAL PARAMETER
console.log("FUNCTION WITH OPTIONAL PARAMETER");
function optionalparams(firstname, lastname) {
    return lastname + ' ' + firstname + '!';
}
console.log(optionalparams('Hello', 'William'));
console.log(optionalparams('name'));
console.log(optionalparams('Hello', 'Brown'));
//FUNCTION WITH REST PARAMETER
console.log("FUNCTION WITH REST PARAMETER");
function restparam(firstname) {
    var lastname = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        lastname[_i - 1] = arguments[_i];
    }
    return firstname + " " + lastname.join(", ") + "!";
}
console.log(restparam("Hello", "William", "Smith"));
console.log(restparam("Hello"));
console.log(optionalparams('Hello', 'Brown'));
