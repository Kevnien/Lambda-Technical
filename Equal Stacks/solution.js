function equalStacks(h1, h2, h3) {
    // stacks come in with the top of the stack on the first index
    h1 = h1.reverse();
    h2 = h2.reverse();
    h3 = h3.reverse();

    const sum = stack => {
        return stack.reduce((accu, curr) => accu + curr, 0);
    }
    const heights = [sum(h1), sum(h2), sum(h3)];
    while (heights[0] !== heights[1] || heights[0] !== heights[2]) {
        if (heights[0] > heights[1]) {
            if (heights[0] > heights[2]) {
                heights[0] -= h1.pop();
            } else {
                heights[2] -= h3.pop();
            }
        } else {
            if (heights[1] > heights[2]) {
                heights[1] -= h2.pop();
            } else {
                heights[2] -= h3.pop();
            }
        }
    }
    return heights[0];
}

const h1 = [3,2,1,1,1];
const h2 = [4,3,2];
const h3 = [1,1,4,1];

console.log(equalStacks(h1, h2, h3));