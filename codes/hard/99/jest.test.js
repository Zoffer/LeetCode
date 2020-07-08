import TreeNode from "../../../class/TreeNode";
import fn from "./recover-binary-search-tree";
const testcase = [
    [
        [1, 3, null, null, 2],
        [3, 1, null, null, 2]
    ],
    [
        [3, 1, 4, null, null, 2],
        [2, 1, 4, null, null, 3]
    ]
];
for (let [tree1, tree2] of testcase) {
    test(`${tree1}`, () => {
        let root = TreeNode.decode(tree1);
        fn(root);
        expect(TreeNode.encode(root)).toEqual(tree2);
    });
}