
// This function changes each node in the tree according to the function sent
const mutateNodes = function(node, mutationFunction) {
    if (!node) return
    mutationFunction(node)
    if (node.left) node.left = makeNodesWithVal(node.left, mutationFunction)
    if (node.right) node.right = makeNodesWithVal(node.right, mutationFunction)
    return node
}

const iterativeDfs = function(node) {
    var stack = [node];
    while (stack.length > 0) {
        var current = stack.pop();
        if (current.right)
            stack.push(current.right);
        if (current.left)
            stack.push(current.left);
    }
}

module.exports = {
    mutateNodes,
    IterativeDfs
}