module.exports = function reverse(n) {
    n = n.toString();
    let x = n.split("").reverse().join("");
    return parseInt(x);
};
