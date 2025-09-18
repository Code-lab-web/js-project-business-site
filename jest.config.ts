import type {Config} from 'jest';

const config: Config = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  testPathIgnorePatterns: [
    "/node_modules/",
    "/.idx/"
  ],
  watchPathIgnorePatterns: [
    "/.idx/"
  ],
  modulePathIgnorePatterns: [
    "/.idx/"
  ]
};

export default config;
