/**
 * Test case: Happy path. Valid input stream and data.
 *
 *
 */


const {totalDistanceFromStream} = require('../src/adv2024d1.js');
const { Readable } = require('stream');
const processor = require("../src/args-processor");

let input;

beforeAll(() => {
    input = new Readable({
        read() {
            this.push("1   30\n40   2\n10   3\n");
            this.push(null);
        }
    });
});

test('Test totalDistanceFromStream with valid data.', () => {
    return totalDistanceFromStream(input).then((result) => {
        expect(result).toBe(18);
    });
});

test('Test args-processor with filepath arg.', () => {
    const processor = require('../src/args-processor');
    const inputPath = jest.fn();
    processor.processArgs({'filepath':'data.csv'}, inputPath)
    expect(inputPath).toHaveBeenCalledWith('data.csv');
});

test('Test args-processor with help arg.', () => {
    const spy = jest.spyOn(console, 'log');
    processor.processArgs({'help': true}, null)
    expect(spy).toHaveBeenCalledWith("--filepath\t\tpath of file to be processed.\n" +
        "\t\t\tFile format is specified at https://adventofcode.com/2024/day/1\n" +
        "\t\t\tExample: node cli.js --filepath=./data.csv"+
        "\n" +
        "--help\t\t\tprint node command line options\n" +
        "\t\t\t(currently set)");
});


test('Test args-processor with no args.', () => {
    const spy = jest.spyOn(console, 'warn');
    processor.processArgs({}, null)
    expect(spy).toHaveBeenCalledWith("No options specified. Select --help for details.");
});

test('Test args-processor with bad filepath.', () => {
    const spy = jest.spyOn(console, 'warn');
    processor.processArgs({'filepath': 89765}, null)
    expect(spy).toHaveBeenCalledWith("No options specified. Select --help for details.");
});

afterEach(() => {
    jest.restoreAllMocks();
});

