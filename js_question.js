Q1;
const obj = { a: "one", b: "two", a: "three" };
console.log(obj);

// When duplicate keys are there  in a JavaScript object, the last assigned value for the same key is retained.

const a = {};
const b = { key: "b" };
const c = { key: "c" };

a[b] = 123;
a[c] = 456;

console.log(a[b]);

// This operation overwrite the previous value because both b and c are coerced to string like "[object Object]"

const user = { name: "Lydia", age: 21 };
const admin = { admin: true, ...user };
console.log(admin);

// because of spread operator 

const shape = {
  radius: 10,
  diameter() {
    console.log(this.radius * 2);
  },
  perimeter: () => 2 * Math.PI * this.radius,
};
console.log(shape.diameter());  //o/p:20
console.log(shape.perimeter());  //o/p:NaN

// because this.radius in perimeter is undefined as it does not belong to the same block it belongs to outside block

function test() {
    console.log(a);
    console.log(b);
   
    var  a = 10;
    let b = 20;
}
test();

//  of hoisting , b is hoisted but not initialised as let and const can be hoisted but not initialized and  a is type of var so it will be hoisted and initialized with undefined because hoisting moved variables to top of the scope during comilation phase before code is executed.


var x = 10;
if (true) {
  var x = 20;
  console.log(x);
}
console.log(x);

let y = 10;
if (true) {
  let y = 20;
  console.log(y);
}
console.log(y);

// because redeclaratiojn can be done in var but not in const and let