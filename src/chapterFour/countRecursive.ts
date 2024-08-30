const count = (list: number[]): number => {
    if (list.length === 0) {
        return 0;
    };

    list.splice(0, 1)

    return 1 + count(list);
}

console.log(`Tamanho da lista: ${count([1, 2, 3, 4, 5, 16, 7, 8, 9])}`);