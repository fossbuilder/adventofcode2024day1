/**
 *  Test case: input columns contain strings instead of numbers.
 *
 *
 */


const { Readable } = require('stream');
const {totalDistanceFromStream} = require("../src/adv2024d1.js");

let input;

beforeEach(() => {
    input = new Readable({
        read() {
            this.push("aaa   bbb\nccc   2\n");
            this.push(null);
        }
    });
});

test('Test totalDistanceFromStream with strings instead of numbers.', () => {
    return totalDistanceFromStream(input).catch((error) => {
        expect(error).toBe("Arrays must contain only numbers.");
    });
});


