class Node {
    constructor(value){
        this.value = value
        this.children = []
    }
    set_value(value) {this.value = value}
    set_children(children) {this.children = children}

}

function generateTree(array){

    let tree = []
    let observeTree = []

    for (let i = 0; i < array.length; i++) {
        
        for (let j = 0; j < 2; j++) {
            if (!observeTree.includes(array[i][j])) {
                node = new Node(array[i][j])
                observeTree.push(array[i][j])
                tree.push(node)
            }
        }
        let index1 = observeTree.indexOf(array[i][0])
        let node1 = tree[index1]
        let index2 = observeTree.indexOf(array[i][1])
        let node2 = tree[index2]
        if (!node1.children.includes(node2)) {
            node1.children.push(node2)
        }
        if (!node2.children.includes(node1)) {
            node2.children.push(node1)
        }         
    }
    indexRoot = observeTree.indexOf(1)
    console.log(tree[indexRoot]);
}
generateTree([[4,5],[5,3],[1,5],[2,1]])
