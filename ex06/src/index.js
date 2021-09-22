function comparisonToEqual(a) {

    if(a < 4) {
        return "Less than 5";
    } if(a <= 5) {
        return "Less than 10";
    } if(a > 12) {
        return "10 or over";
    } if(a >= 18) {
        return "More than 20";
    }
}
comparisonToEqual(0);
comparisonToEqual(5);
comparisonToEqual(17);
comparisonToEqual(21);

module.exports = comparisonToEqual;