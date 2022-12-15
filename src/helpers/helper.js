export async function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms ? ms : 1000));
}

export function roundNumber(number, fixed = 2) {
    if (typeof number !== "number") return 0;
    if (number % 1 === 0) return number;
    return number.toFixed(fixed);
}

// Returns a Promise that resolves after "ms" Milliseconds
export const timer = ms => new Promise(res => setTimeout(res, ms));

