var areacalculation = /** @class */ (function () {
    function areacalculation() {
    }
    areacalculation.prototype.square = function (x) {
        var res = x * x;
        console.log("AREA OF SQAURE" + res.toFixed(2));
    };
    areacalculation.prototype.rectangle = function (a, b, c) {
        var res = 2 * (a * b + b * c + a * c);
        console.log("AREA OF RECTANGLE" + res.toFixed(2));
    };
    areacalculation.prototype.triangle = function (b, h, s1, s2, s3, H) {
        var res = b * h + (s1 + s2 + s3) * H;
        console.log("SURFACE AREA OF TRIANGLE" + res.toFixed(2));
    };
    return areacalculation;
}());
var obj = new areacalculation();
console.log("AREA CALCULATION");
var res1 = obj.square(9.9);
var res2 = obj.rectangle(10.8, 10.4, 7.5);
var res3 = obj.triangle(45, 45.6, 30, 30, 30, 54);
