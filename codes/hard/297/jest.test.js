import {serialize, deserialize} from "./serialize-and-deserialize-binary-tree"

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

const testcase = [
    {
        val: 1,
        left: new TreeNode(2),
        right: {
            val: 3,
            left: new TreeNode(4),
            right: new TreeNode(5)
        }
    }
];

for (let node of testcase) {
    test(`${node}`, () => {
        const new_node = deserialize(serialize(node));
        expect(new_node).toEqual(node);
    });
}