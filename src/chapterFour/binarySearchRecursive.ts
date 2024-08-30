namespace ChapterFour {
    const binarySearchRecursive = (list: number[], target: number, min: number, max: number): number => {
        if (min > max) return -1;

        const middle = Math.floor((min + max) / 2);
        const kick = list[middle];

        if (kick === target) {
            return middle;
        } else if (kick > target) {
            return binarySearchRecursive(list, target, min, middle - 1)
        }
        return binarySearchRecursive(list, target, middle + 1, max)

    };

    const list: number[] = [4, 7, 8, 10, 13, 14, 16, 17, 18]

    console.log(binarySearchRecursive(list, 8, 0, list.length))
}