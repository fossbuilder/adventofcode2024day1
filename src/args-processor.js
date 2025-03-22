/**
 * @module args-processor
 *
 * @file Processes a dictionary of args. Intended to be used with the args-parser module.
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
 * */


module.exports = {processArgs};

/**
 * Processes a Dictionary, allowing the supported options.
 *
 * @param args Dictionary containing the supported options (--help and --filepath). Required.
 *             If args is empty, warns:
 *                  "No options specified. Select --help for details."
 *
 *             in the console.
 *             If args contains '--help' (but no --filepath) logs:
 *                  "--filepath      path of  file to be processed."
 *                  "                Format is specified at https://adventofcode.com/2024/day/1"
 *                  "                Example: node cli.js --filepath=./data.csv"
 *                  ""
 *                  "--help          print node command line options"
 *                  "                (currently set)" to the console."
 *             to the console.
 *
 * @param filepath Function that gets called when the --filepath option is included in args.
 *                 Takes a string specifying the path to the input file.
 *                 Required.
 *
 * @see https://adventofcode.com/2024/day/1
 * @link https://adventofcode.com/2024/day/1
 *
 */
function processArgs(args, filepath) {
    if(Object.keys(args).length === 0) {
        no_options();
        return;
    }

    if (args['help']) {
        help();
        return;
    }

    const inputFilePath = args['filepath']
    if (!inputFilePath || typeof inputFilePath!=='string' || inputFilePath==="") {
        no_options();
        return
    }

    filepath(inputFilePath);
}

/**
 * @private
 */
function no_options() {
    console.warn("No options specified. Select --help for details.");
}

/**
 * @private
 */
function help() {
    console.log(""+
        "--filepath\t\tpath of file to be processed.\n" +
        "\t\t\tFile format is specified at https://adventofcode.com/2024/day/1\n" +
        "\t\t\tExample: node cli.js --filepath=./data.csv"+
        "\n" +
        "--help\t\t\tprint node command line options\n" +
        "\t\t\t(currently set)"
    );
}
