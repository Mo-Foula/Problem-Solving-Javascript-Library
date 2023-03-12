
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

module.exports = {
    copyArray,
    replacePartOfArrayWithAnotherArray,
}