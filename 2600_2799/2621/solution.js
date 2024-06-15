
/**
 * @param {number} millis
 */
async function sleep(millis) {
    const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    await wait(millis);
}

/**
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */
