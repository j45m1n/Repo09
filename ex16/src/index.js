function checkSign(num) {

    return (num === 10) ? "positive"
    : (num === -12) ? "negative"
    : "zero"; 
}

module.exports = checkSign;
