/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testPathIgnorePatterns: ["/dist/"],
  transform: {
    '<regex_match_files>': [
      'ts-jest',
      {
        // ts-jest configuration goes here
      },
    ],
  },
};