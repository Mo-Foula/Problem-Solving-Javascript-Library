
const copyArray = function (array) {
    return [...array]
}

const replacePartOfArrayWithAnotherArray = function ({ array, newArray, firstIndexOfNewArray, lastIndexOfNewArray, firstIndexOfOldArray, lastIndexOfOldArray }) {
    // Last index is not included
    if (!firstIndexOfNewArray) firstIndexOfNewArray = 0
    if (!lastIndexOfNewArray) lastIndexOfNewArray = newArray.length

    // Create the two halves of the array surrounding the updated array
    const firstPart = array.slice(0, firstIndexOfOldArray)
    const lastPart = array.slice(lastIndexOfOldArray + 1, array.length)

    // Concatenate the three arrays together
    const tempArray = [].concat(firstPart, newArray.slice(firstIndexOfNewArray, lastIndexOfNewArray), lastPart)

    return tempArray
}

/*
@param arrays: array of arrays that will be concatenated
*/
const concatArrays = function (arrays) {

    // [].concat.apply([], [array1, array2, ...])
    return [].concat.apply([], arrays)
}


module.exports = {
    copyArray,
    replacePartOfArrayWithAnotherArray,
    concatArrays,
}