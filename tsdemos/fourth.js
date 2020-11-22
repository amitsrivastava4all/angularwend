function add(x, y) {
    return x + y;
}
function show() {
    console.log('I am Show ');
}
var z = add(10, 20);
console.log('Z is ', z);
var a;
var e;
//e = add;
e = show;
console.log(typeof e);
