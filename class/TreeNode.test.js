import TreeNode from "./TreeNode";

const tn = (...args) => new TreeNode(...args);

const testcase = [
    [
        [],
        null
    ],
    [
        [1, 2, 3, null, null, 4, 5],
        {
            val: 1,
            left: tn(2),
            right: {
                val: 3,
                left: tn(4),
                right: tn(5)
            }
        }
    ],
    [
        [1, 2, 3, 4, 5, 6],
        {
            val: 1,
            left: {
                val: 2,
                left: tn(4),
                right: tn(5)
            },
            right: {
                val: 3,
                left: tn(6),
                right: null,
            }
        }
    ],
    [
        [1, null, 2, null, 3, null, 4, null, 5, null, 6],
        {
            val: 1,
            left: null,
            right: {
                val: 2,
                left: null,
                right: {
                    val: 3,
                    left: null,
                    right: {
                        val: 4,
                        left: null,
                        right: {
                            val: 5,
                            left: null,
                            right: tn(6)
                        }
                    }
                }
            }
        }
    ],
    [
        [1, 2, null, 3, null, 4, null, 5, null, 6],
        {
            val: 1,
            left: {
                val: 2,
                left: {
                    val: 3,
                    left: {
                        val: 4,
                        left: {
                            val: 5,
                            left: tn(6),
                            right: null
                        },
                        right: null
                    },
                    right: null
                },
                right: null
            },
            right: null
        }
    ]
]

for (let [list, root] of testcase) {
    test(JSON.stringify(list), () => {
        expect(TreeNode.decode(list)).toEqual(root);
        expect(TreeNode.encode(root)).toEqual(list);
    });
}