# adventofcode2024day1
This project was written as solution to https://adventofcode.com/2024/day/1.

It is a simple CLI program written for Node.js.

See [Usage](#Usage) for a description of how to run the program.

## Download
Run the following command to clone the project repository locally:
```
git clone https://github.com/fossbuilder/adventofcode2024day1.git
```
*or*

Download a ZIP copy of the repository from [github.com](https://github.com/fossbuilder/adventofcode2024day1/archive/refs/heads/main.zip).
## Requirements
This project requires [Node.js](https://nodejs.org/en) version 23.7.0. Follow the installation instructions.
\
If you have [Node.js](https://nodejs.org/en) 23.7.0 or higher installed on your system, proceed to [Installation](#Installation).
## Installation
In the project folder, run:
```
npm install
```
The following dependencies will be installed automatically:
- args-parser v1.3.0
- csv-parser v3.2.0
- jest v9.7.0

## Usage
1) Download the **input file** from [Advent of Code 2024, Day 1](https://adventofcode.com/2024/day/1/input.).
2) On a command line, run node with the `cli.js` script, passing in the path to the input file using the *--filepath* argument.
#### Example
```
node cli.js --filepath=./data.csv
```
The program will output to the console the sum of the distances as specified in  [Advent of Code 2024, Day 1](https://adventofcode.com/2024/day/1/input.).
## Testing
Unit testing is done with [Jest](https://jestjs.io) v9.7.0.

To execute unit tests:
```
npm run test
```
A **coverage report** will be created in the generated `./coverage` folder. Open `./coverage/index.html` to view the **coverage report**.
## License
This project is published under the [GPLv3 license](https://www.gnu.org/licenses/gpl-3.0.en.html#license-text).

*This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.
This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.
You should have received a copy of the GNU General Public License along with this program. If not, see <https://www.gnu.org/licenses/>.*
	
<sub>Copyright © 2025 Philip Foss</sub>
