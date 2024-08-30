const sum = (numbers: number[]): number => {
    if (numbers.length === 0) {
        return 0;
    }

    const restNumbers = Array.from(numbers);
    restNumbers.splice(0, 1)

    return numbers[0] + sum(restNumbers);
};

console.log(sum([1, 2, 8, 52, 87, 4, 3, 12]))
