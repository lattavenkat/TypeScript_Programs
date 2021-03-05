console.log("ITERATE,MANIPULATE AND PRINT TUPLE");
var tuple1 = ["milk", "deodorant", 32,92.4];

// push element into the tuple
tuple1.push("bread", "umbrella", 28.7888888);
tuple1.push("bread crumps", "cardboard sheet", 2);
for (var i:number = 0; i < tuple1.length; i++) {
console.log("TUPLE ELEMENT: " +tuple1[i]);
 }

console.log("POPPED ELEMENT IS: " +tuple1.pop() );
console.log("AFTER SPLICED " +tuple1.splice(2));
