function processData(input) {
    const stack = [];
    // ordered list is for keeping track of what the biggest element is the quickest
    let orderedList = [];

    // parse the string
    const inputs = [];
    let current = "";
    for (let i = 0; i < input.length; i++) {
        const char = input.charAt(i);
        if (char !== '\n') {
            current += char;
        } else {
            inputs.push(current);
            current = "";
        }
    }
    inputs.push(current);
    
    inputs.forEach((string, index) => {
        if (index === 0) return;
        const queryType = string.charAt(0);
        switch (queryType) {
            case '1' :
                const number = getNumber(string);
                stack.push(number);
                orderedInsert(orderedList, Number.parseInt(number, 10));
                break;
            case '2' :
                const popped = stack.pop();
                orderedList = remove(orderedList, Number.parseInt(popped, 10));
                break;
            case '3':
                console.log(orderedList[orderedList.length - 1]);
                break;
            default:
                console.error('Input bad.');
        }
    })
}

function remove(array, number) {
    const index = array.findIndex(element => number === element);
    const end = array.slice(index + 1, array.length);
    array = array.slice(0, index);
    array = array.concat(end);
    return array;
}

// gets the second (space separated) item out of string
// created with the intention of using with processData to get the number after a query
function getNumber(string) {
    return string.slice(2);
}

function orderedInsert(array, element) {
    const index = array.findIndex(number => number > element);
    if (index === -1) {
        array.push(element)
        return;
    };
    array.splice(index, 0, element);
}

const input = "10\n1 97\n2\n1 20\n2\n1 26\n1 20\n2\n3\n1 91\n3";
processData(input);