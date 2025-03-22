/**
 * Test case: Empty input stream.
 *
 *
 */

const { Readable } = require('stream');
const {totalDistanceFromStream} = require("../src/adv2024d1.js");

let input;

beforeAll(() => {
    input = new Readable({
        read() { this.push(null); }
    });
});

test('Test totalDistanceFromStream for error with empty stream.', () => {
    return totalDistanceFromStream(input).catch((error) => {
        expect(error).toBe("Each row must contain 2 columns.");
    });
});

test('Test totalDistanceFromStream for empty result with empty stream.', () => {
    return totalDistanceFromStream(input).then((result) => {
        expect(result).toBe(0);
    });
});