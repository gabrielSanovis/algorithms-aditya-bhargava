const quicksort = (list: number[]): number[] => {
    let leftList: number[] = [];
    let rightList: number[] = [];
    let middle: number = list[Math.floor(list.length / 2)];
    
    if (list.length < 2) {
        return list;
    };

    list.splice(Math.floor(list.length / 2), 1);

    for(let value of list) {
        if (value > middle) {
            rightList.push(value);
        } else {
            leftList.push(value);
        };
    }

    return [...quicksort(leftList), middle, ...quicksort(rightList)]
};

console.log(quicksort([33, 15, 10])); 