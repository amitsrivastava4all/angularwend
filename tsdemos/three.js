var arr = [10, 20, 30];
var tup = [1001, "Ram"];
var a = "Hello";
// Enum
var Days;
(function (Days) {
    Days[Days["SUNDAY"] = 1] = "SUNDAY";
    Days[Days["MONDAY"] = 2] = "MONDAY";
    Days[Days["TUESDAY"] = 3] = "TUESDAY";
})(Days || (Days = {}));
;
var day = Days.MONDAY;
console.log('Day is ', day);
switch (day) {
    case Days.SUNDAY:
        console.log('Funday');
        break;
    case Days.MONDAY:
        console.log('Working day');
        break;
    case Days.TUESDAY:
        console.log('Meeting Day');
        break;
    default:
        console.log('Invalid Day');
}
