const selectionOrder = (_arr: Array<number>): Array<number> => {
    const newArray: Array<number> = [];
    const arr = Array.from(_arr);
    for (const _value of _arr) {
        const index = findSmaller(arr);
        newArray.push(arr[index]);
        arr.splice(index, 1)
    }
    return newArray;
};

const findSmaller = (arr: Array<number>): number => {
    let lowIndex = 0;
    let lowValue = arr[lowIndex];
    for (let index = 0; index < arr.length; index++) {
        const currentValue = arr[index];
        if (currentValue < lowValue) {
            lowIndex = index;
            lowValue = currentValue;
        }
    }
    return lowIndex;
}

console.log(selectionOrder([5, 3, 6, 2, 10]))