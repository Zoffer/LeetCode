import PriorityQueue from "./PriorityQueue";

for (let i = 0; i < 10; i++) {
    const pq = new PriorityQueue((a, b) => a - b);
    const list = [];
    for (let j = 0; j < 5; j++) {
        const tmp_list = [];
        let random = Math.random() * 20;
        while (--random >= 0) {
            tmp_list.push((Math.random() - 0.5) * 1000 | 0);
        }
        random = 1 + Math.random() * 20 | 0;
        test(`ADD: ${tmp_list}\nGET: ${random} items`, () => {
            for (const n of tmp_list) {
                pq.offer(n);
                list.push(n);
            }
            list.sort((a, b) => b - a);
            while (--random >= 0) {
                expect(pq.poll()).toBe(list.pop());
            }
        });
    }
}
