function inverseWhile() {
    var i = 5;
    var fiveNumbers = "";
      while(i >= 0) {
        if (i === 0) {
          fiveNumbers += i;
          i--;
        } else {
          fiveNumbers += i + ",";
          i--
        }
    }
    return fiveNumbers;
}
inverseWhile();

console.log(inverseWhile());
module.exports = inverseWhile;