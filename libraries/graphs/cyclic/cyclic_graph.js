const hasCycle = function(head) {
    if (!head || !head.next) return null
    let slowPtr = head, fastPtr = head
    while(fastPtr && fastPtr.next){
        slowPtr = slowPtr.next
        fastPtr = fastPtr.next.next
        if (fastPtr == slowPtr){
            return fastPtr
        }
    }
    return false
};

const detectCycleStart = function(head){
    let intersection = hasCycle(head)
    if(!intersection) return null
    let slowPtr = head
    while(slowPtr !== intersection){
        slowPtr = slowPtr.next
        intersection = intersection.next
    }
    return intersection
}

module.exports = {
    hasCycle,
    detectCycleStart
}