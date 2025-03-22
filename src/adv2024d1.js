/**
 * @module adv2024d1
 *
 * @file Finds the total distance between two lists.
 *
 * Implements the solution for the code challenge at https://adventofcode.com/2024/day/1
 * Use input data at https://adventofcode.com/2024/day/1/input
 *
 * @see https://adventofcode.com/2024/day/1
 * @link https://adventofcode.com/2024/day/1
 *
 *
 * @author Philip Foss
 * @Copyright Copyright © 2025 Philip Foss
 *
 * @license GPLv3 License
 *
 * This program is free software: you can redistribute it and/or modify it under the
 * terms of the GNU General Public License as published by the Free Software Foundation,
 * either version 3 of the License, or (at your option) any later version.
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;
 * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 * You should have received a copy of the GNU General Public License along with this program.
 * If not, see <https://www.gnu.org/licenses/>.
 *
 */


module.exports = { totalDistanceFromStream };

const assert = require("assert");
const csv = require("csv-parser");


/**
 * Sums the distances between the two numeric columns in stream.
 *
 * The stream contains two lists of numbers, the lists are columns separate by four spaces.
 * The algorithm is as follows:
 * 1 - Each row must consist of two columns of numbers.
 * 2 - Order each column in ascending order.
 * 2 - Calculate the absolute distance between row of sorted columns
 * 3 - Sum up the distances for all pairs.
 *
 * @param stream - A Readable containing only pairs of numbers on each line, separated by '    '
 * @returns {Promise<Object>} A Promise that resolves to a single integer,
 *  the sum of the distances between the lists.
 * @throws string 'Each row must contain 2 columns.' for each row that has more or less than two columns.
 * @throws string 'Arrays must contain only numbers.' for each row that contains non-number values.
 */
async function totalDistanceFromStream(stream) {
    const rows = await rowsFromStream(stream);
    const columns = rowsToColumns(rows);
    assert(columns.length === 2, "Expected exactly two columns");
    return totalDistances(columns[0], columns[1]);
}

/**
 * @private
 */
function rowsFromStream(stream) {
    let rows = [];
    return new Promise((resolve, reject) => {
        if (!stream) { reject(new Error('Must pass in a valid stream.')); }
        const csv = require('csv-parser');
        stream.pipe(csv({separator: '   ', headers: false}))
            .on('data', (data)  => {
                rows.push( Object.values(data)
                    .filter((element)=> { return element!==""; }));
            })
            .once('end', () => { resolve(rows); })
            .once('error', (error) => { reject(new Error('Error reading stream.')); });
    });
}

/**
 * @private
 */
function rowsToColumns(rows) {
    const columns = [];
    columns.push([]);
    columns.push([]);

    rows.forEach((row, index) => {
        if (row.length !== 2) {
            console.warn('Each row must contain 2 columns.');
            throw ('Each row must contain 2 columns.');
        }
        columns[0].push(row[0]);
        columns[1].push(row[1]);
    });

    return columns;
}

/**
 * @private
 */
function totalDistances(l, r) {
    assert(l && r);
    assert(Array.isArray(l) && Array.isArray(r));

    let sl    = [];
    l.forEach((col) => {sl.push(parseInt(col))})
    sl.sort();

    let sr   = [];
    r.forEach((col) => {sr.push(parseInt(col))})
    sr.sort();

    let d = distances(sl, sr);
    assert(d);
    return d.reduce((a, b) => a + b, 0);

}

/**
 * @private
 */
function distances(a, b) {
    let safeA = a.filter((element) => { return !Number.isNaN(element) });
    let safeB = b.filter((element) => { return !Number.isNaN(element) });

    if(safeA.length !== a.length || safeB.length !== b.length) {
        console.warn('Arrays must contain only numbers.');
        throw('Arrays must contain only numbers.');
    }

    let distances = [];
    for(let i=0;i<safeA.length;i++) {
        distances.push(Math.abs(safeA[i]-safeB[i]));
    }

    return distances;
}

