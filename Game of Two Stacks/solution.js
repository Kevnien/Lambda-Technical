function twoStacks(x, a, b) {
    const stackA = a.reverse();
    const stackB = b.reverse();
    let sum = 0;
    let count = 0;

    for (;;) {
        const currentA = stackA.pop();
        const currentB = stackB.pop();
        if (currentA < currentB) {
            const newSum = sum + currentA;
            if (newSum > x) {
                return count;
            } 
            sum = newSum;
            count++;
            stackB.push(currentB);
        } else {
            const newSum = sum + currentB;
            if (newSum > x) {
                return count;
            }
            sum = newSum;
            count++;
            stackA.push(currentA);
        }
    }
}

console.log(twoStacks(10, [4,2,4,6,1], [2,1,8,5]));