export function isNumberInList(number: number, list: number[]): boolean {
    return list.includes(number);
}

export function isAnyBigger(arr: number[], threshold: number): boolean {
    return arr.some((num) => num > threshold);
}

export function isAnySmaller(arr: number[], threshold: number): boolean {
    return arr.some((num) => num < threshold);
}