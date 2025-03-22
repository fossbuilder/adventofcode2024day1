/**
 * Test case: input stream contains rows with different numbers of columns.
 * e.g. first row has one column, but the second row has two columns.
 *
 */


const { Readable } = require('stream');
const {totalDistanceFromStream} = require("../src/adv2024d1.js");

let input;

beforeEach(() => {
    input = new Readable({
        read() {
            this.push("1\n2   3\n");
            this.push(null);
        }
    });
});

test('Test totalDistance with mismatched columns again.', () => {
    return totalDistanceFromStream(input).catch((error) => {
        expect(error).toBe("Each row must contain 2 columns.");
    });
});
