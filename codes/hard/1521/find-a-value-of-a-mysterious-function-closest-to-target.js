/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
var closestToTarget = function (arr, target) {
    const st = new SegmentTree(arr);
    const n = arr.length;
    let min = Infinity;
    let ahead = 0, behind = 0;
    while (ahead < n) {
        const ans = st.search(behind, ahead);
        if (ans === target) return 0;
        if (ans > target) {
            ahead++;
        } else {
            behind++;
            if (ahead < behind) ahead = behind;
        }
        min = Math.min(Math.abs(ans - target), min);
    }
    return min;
};

class SegmentTree {
    constructor(arr) {
        this.tree = [-1];
        this.arr = arr;
        this.build(0, arr.length - 1);
    }
    build(l, r, i = 1) {
        if (l === r) return this.arr[l];
        const mid = (l + r) >> 1;
        const leftVal = this.build(l, mid, i << 1);
        const rightVal = this.build(mid + 1, r, (i << 1) + 1);
        this.tree[i] = {
            start: l,
            end: r,
            val: leftVal & rightVal
        };
        return this.tree[i].val;
    }
    search(l, r, i = 1) {
        if (l === r) return this.arr[l];
        let { start, end, val } = this.tree[i];
        if (start === l && end === r) return val;
        const mid = (start + end) >> 1;
        if (r <= mid) return this.search(l, r, (i << 1));
        if (mid < l) return this.search(l, r, (i << 1) + 1);
        const leftVal = this.search(l, mid, (i << 1));
        const rightVal = this.search(mid + 1, r, (i << 1) + 1);
        return leftVal & rightVal;
    }
}

export default closestToTarget;