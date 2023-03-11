
// This function changes each node in the tree according to the function sent
const mutateNodes = function(node, mutationFunction) {
    if (!node) return
    mutationFunction(node)
    if (node.left) node.left = makeNodesWithVal(node.left, mutationFunction)
    if (node.right) node.right = makeNodesWithVal(node.right, mutationFunction)
    return node
}

module.exports = {
    mutateNodes
}