
// Count from A to B
const countFromAToB = function (a, b) {
    return (n - m + 1) * (n + m) / 2
}

// Count from 1 to N
const countFromOneToN = function (n) {
    return countFromAToB(1,n)
}

module.exports = {
    countFromAToB,
    countFromOneToN
}