function isBalanced(s) {
    const stack = [];
    for (let i = 0; i < s.length; i++) {
        const char = s.charAt(i);
        switch (char) {
            case '(':
                stack.push(')');
                break;
            case '{':
                stack.push('}');
                break;
            case '[':
                stack.push(']');
                break;
            default:
                if (stack.pop() !== char) return 'NO';
        }
    }
    return 'YES';
}

console.log(isBalanced('{[()]}'));
console.log(isBalanced('{[(])}'));
console.log(isBalanced('{{[[(())]]}}'));