function calculateFatorial(fatorial: number): number {
    if (fatorial == 1) return 1;
    const result: number = fatorial * calculateFatorial(fatorial - 1);
    return result;
}

console.log(calculateFatorial(3));