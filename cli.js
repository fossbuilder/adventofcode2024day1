/**
 * Implements the solution for the code challenge at https://adventofcode.com/2024/day/1.
 * Use your own data from https://adventofcode.com/2024/day/1/input.
 * Save to a file and pass in to --filepath.
 *
 * Takes --filepath option.
 *
 * Outputs the sum to console.info.
 *
 * @example node cli.js --filepath=/data.csv
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

const args = require('args-parser')(process.argv);
const processor = require('./src/args-processor');

processor.processArgs(args,
    (inputFilePath) => {
        const fs = require("fs");
        const {totalDistanceFromStream} = require("./src/adv2024d1.js");
        try {
            const stream = fs.createReadStream(inputFilePath)
            totalDistanceFromStream(stream)
                .then((result) => {
                    console.log("%d", result);
                })
                .catch((error) => {
                    console.error(error);
                });
        } catch (error) {
            console.error(error);
        }
    });
