# Election Data Fetcher

This Node.js script is designed to continuously fetch simplified election data from the Brazilian Superior Electoral Court (TSE) for the 2022 election and log the current vote count and percentage for a specific candidate.

## Description

The script is set up to query an endpoint provided by the TSE for the latest vote count data every 20 seconds. If the script encounters an error when fetching the data (such as a network issue or if the data source is temporarily unavailable), it retries after an additional 5 seconds.

## Features

- Fetch election data from TSE's official results API.
- Retry mechanism on fetch error with increasing intervals.
- Clean up the candidate data by removing unnecessary fields.
- Calculate the 'meta' (target) number of votes based on the percentage.
- Log the current percentage of votes, total votes, target votes, votes remaining until the target, current time, and comparison with official time reported in the data.

## Prerequisites

Before running this script, you will need to have the following installed:
- [Node.js](https://nodejs.org/)
- NPM packages: `node-fetch` and `moment`. You can install them using npm:

```sh
npm install node-fetch moment
```

## Usage

To run the script, use the following command:

```sh
node index.js
```

## Notes

- The script is hardcoded to fetch data for a candidate with the number "13".
- The `console.table` function is used to log a table of candidate data to the console for easy viewing.
- Election data URL in the code is hardcoded and might need to be updated according to the TSE API changes.

## Disclaimer

This script is for educational purposes only and should not be used for any official data reporting. The data comes directly from the TSE's official results API, and this script does not modify or interpret the data.

## Contributing

If you find a bug or have a suggestion for improvement, please open an issue or a pull request.

## License

This script is open source and is provided under the MIT License.

---

This README file is a brief introduction to the script. For detailed usage and more information on the data provided by the TSE, please refer to the [official TSE website](https://www.tse.jus.br/).