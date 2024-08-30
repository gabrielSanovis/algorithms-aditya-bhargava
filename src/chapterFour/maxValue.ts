const maxValue = (list: number[]): number => {
    if (list.length === 0) {
        return 0;
    }

    const restList = Array.from(list)
    restList.splice(0, 1);

    const currentMaxValue = maxValue(restList)
    return list[0] > currentMaxValue ? list[0] : currentMaxValue
}

console.log(`MAIOR VALOR NA LISTA ${maxValue([2, 4, 40, 10, 30, 39, 19, 10])}`);