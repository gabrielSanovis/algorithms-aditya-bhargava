namespace ChapterTwo {
    const list = [4, 7, 8, 10, 13, 14, 16, 17, 18];
    const target = 8;

    function binarySearch(list: Array<number>, target: number) {
        let min = 0;
        let max = list.length;
        let steps = 0;

        while (min <= max) {
            steps++;
            let middle = Math.floor((min + max) / 2);
            let kick = list[middle];

            if (kick === target) {
                console.log(`steps quantity: ${steps}`)
                return middle;
            } else if (kick > target) {
                max = middle - 1;
            } else {
                min = middle + 1;
            }
        }

        throw new Error(`Not found target. steps: ${steps}`);
    };

    const value = binarySearch(list, target);

    console.log(`find value: ${value}`);
}