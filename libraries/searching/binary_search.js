const calculateMid = function(left, right){
    return left + Math.floor((right - left)/2)
}

const firstTrueBS = function(size, validationFunction, params){
    let left = 0, right = size-1, mid = 0
    let soln = mid
    while(left <= right){
        mid = calculateMid(left, right)
        const calculation = validationFunction(params, mid)
        if(calculation){
            right = mid - 1
            soln = mid
        } else {
            left = mid + 1
        }
    }
    return soln
}

const LastTrueBS = function(size, validationFunction, params){
    let left = 0, right = size-1, mid = 0
    let soln = mid
    while(left <= right){
        mid = calculateMid(left, right)
        const calculation = validationFunction(params, mid)
        if(calculation){
            right = mid - 1
        } else {
            soln = mid
            left = mid + 1
        }
    }
    return soln
}

module.exports = {
    firstTrueBS,
    LastTrueBS
}