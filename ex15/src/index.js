function myDoWhile() {
     var i = 0;
     var myNumbers = "";
     do {
        if (i === 9) {
             myNumbers += i;
             i++;
        } else {
             myNumbers += i + ",";
             i++
        }
     } while (i < 10);
     return myNumbers
}
myDoWhile();

console.log(myDoWhile());

module.exports = myDoWhile;