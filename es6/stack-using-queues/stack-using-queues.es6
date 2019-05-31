class MyStack {
    constructor() {
        this.queue = [];
    }

    push(x) {
        this.queue.push(x);
    }

    pop() {
        const queue = this.queue;

        return queue.splice(queue.length -1, 1)[0];
    }

    top() {
        const queue = this.queue;

        return queue[queue.length -1];
    }

    empty() {
        const queue = this.queue;

        return queue.length === 0  ? true : false;
    }
}