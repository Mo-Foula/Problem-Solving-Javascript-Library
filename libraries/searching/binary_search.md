## Implemented functions

### **First true**
Assuming we have a problem that can be summed up to having many solutions (in integers) these solutions are as following:

  0   |   1   |   2   |   3   |   4   |   5   |   6 
:---: | :---: | :---: | :---: | :---: | :---: | :---:
False | False | True |  True |  True |  True |  True |  True

The minimum solution here is 2 since 2 or any larger number will provide a valid soltuion, these type of questions are very common as they are always searching for the minimum solution, this algorithm is called **first true** as it searches for first true in O(log(Size) * validation function complexity)

In many cases the validation function complexity is O(N) which sums up to having the solution in O( N Log (Size)) for simplicity lets call it O(N Log(N)) which is good enough in many cases

The biggest benefit of this algorithm is that validation functions in most cases are very simple to be implemented which makes the problem easy over all (validation function + first true function)

Example:
```
/*
Validation function parameters should be as following:
params: Object that has whatever parameters the function needs
k: the solution that is generated from FirstTrueBS function and is passed to validation function

Node that: FirstTrueBS passes the params object to the validation function
*/

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

const validationFunction = function (params, k) {
    const { time, totalTrips } = params;
    let doneTrips = 0
    for (const tripTime of time) {
        doneTrips += Math.floor(k / tripTime)
        if (doneTrips >= totalTrips) return true
    }
    return doneTrips >= totalTrips
}

var minimumTime = function (time, totalTrips) {
    // F F F F S S S S
    // First true
    return firstTrueBS(10e16, validationFunction, { time, totalTrips })
};
```