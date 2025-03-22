/**
 * Test case: Too few columns in the input stream.
 *
 *
 */


const { Readable } = require('stream');
const {totalDistanceFromStream} = require("../src/adv2024d1.js");

let input;

beforeEach(() => {
    input = new Readable({
        read() {
            this.push("1\n");
            this.push(null);
        }
    });
});

test('Test totalDistanceFromStream with too few columns in stream.', () => {
    return totalDistanceFromStream(input).catch((error) => {
        expect(error).toBe("Each row must contain 2 columns.");
    });
});
