/**
 * Test case: input stream contains rows with different numbers of columns.
 * e.g. first row has two columns, but the second row only has one column.
 *
 */


const { Readable } = require('stream');
const {totalDistanceFromStream} = require("../src/adv2024d1.js");

let input;

beforeEach(() => {
    input = new Readable({
        read() {
            this.push("1   2\n3\n");
            this.push(null);
        }
    });
});

test('Test totalDistance with mismatched columns.', () => {
    return totalDistanceFromStream(input).catch((error) => {
        expect(error).toBe("Each row must contain 2 columns.");
    });
});

