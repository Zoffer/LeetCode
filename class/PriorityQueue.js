export default class PriorityQueue {
    constructor(compare) {
        this.tree = [null];
        this.compare = compare;
    }
    get size() {
        return this.tree.length - 1;
    }
    offer(item) {
        this.tree.push(item);
        this.up();
    }
    poll() {
        if (!this.size) return;
        const result = this.tree[1];
        const bottom = this.tree.pop();
        if (this.size) {
            this.tree[1] = bottom;
            this.down();
        }
        return result;
    }
    up(i = this.size) {
        const tree = this.tree;
        while (i > 1) {
            const father = i >> 1;
            if (this.compare(tree[father], tree[i]) <= 0) break;
            [tree[i], tree[father], i] = [tree[father], tree[i], father];
        }
    }
    down(i = 1) {
        const tree = this.tree;
        while ((i << 1) < tree.length) {
            let child = i << 1;
            if (
                child + 1 < tree.length &&
                this.compare(tree[child], tree[child + 1]) > 0
            ) {
                child += 1;
            }
            if (this.compare(tree[i], tree[child]) <= 0) break;
            [tree[i], tree[child], i] = [tree[child], tree[i], child];
        }
    }
}