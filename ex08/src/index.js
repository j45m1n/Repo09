function logicalOrOperator(num) {

    if (num > 20 ||  num < 30) {

        return "Out";
    }
    return "In";
}
logicalOrOperator(9);
logicalOrOperator(20);

module.exports = logicalOrOperator;