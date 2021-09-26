function myForLoop1() {
    var evenNumbers = "0, 2, 4, 6, 8";
    for(var i = 0; i < evenNumbers.length; i++) {
        i++;
    }
    return evenNumbers;
}
myForLoop1();

function myForLoop2() {
    var evenInverseNumbers = "8, 6, 4, 2, 0";
    for(var i = 0; i < evenInverseNumbers.length; i++) {
        i++;
    }
    return evenInverseNumbers;
}
myForLoop2();

module.exports = {
    myForLoop1,
    myForLoop2
};