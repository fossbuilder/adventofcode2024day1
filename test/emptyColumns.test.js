

const { Readable } = require('stream');
const {totalDistanceFromStream} = require("../src/adv2024d1.js");

let input;

beforeEach(() => {
    input = new Readable({
        read() {
            this.push("   \n");
            this.push("   \n");
            this.push("   \n");
            this.push(null);
        }
    });
});

test('Test totalDistance error with empty columns.', () => {
    return totalDistanceFromStream(input).catch((error) => {
        expect(error).toBe("Each row must contain 2 columns.");
    });
});
