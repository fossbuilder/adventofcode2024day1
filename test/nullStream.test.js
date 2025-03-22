/**
 * Test case: no input stream
 *
 *
 */


const {totalDistanceFromStream} = require("../src/adv2024d1.js");

test('Test totalDistanceFromStream with null stream.', async () => {
    await expect(totalDistanceFromStream(null)).rejects.toThrow("Must pass in a valid stream.");
});
