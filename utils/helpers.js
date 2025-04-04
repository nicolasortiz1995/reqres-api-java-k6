export function getRandomUserId(min = 1, max = 12) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
