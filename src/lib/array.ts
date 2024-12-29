/**
 * Create an array of numbers from: start <=, < end
 * @param end
 * @param startAt
 * @param step
 */
export function range(
    startAt: number = 0,
    end: number,
    step: number = 1
) {
    if (startAt < end) {
        // step should be positive
        return [...Array(end - startAt).keys()]
            .map(i => i + startAt + step);
    }
    if (startAt > end) {
        // step should be negative
        return [...Array(startAt - end).keys()]
            .map(i => i - startAt - step);
    }
    return []
}