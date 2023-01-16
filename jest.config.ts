import type { Config } from "@jest/types";

const jestConfig: Config.InitialOptions = {
  preset: "ts-jest",
  verbose: true,
  collectCoverage: true,
  resetMocks: true,
  collectCoverageFrom: ["<rootDir>/src/**/*.ts"],
  coverageDirectory: "coverage",
  coverageReporters: ["json", "lcov", "text-summary"],
  testEnvironment: "node",
  testMatch: ["**/*.test.ts"],
  coverageThreshold: {
    global: {
      statements: 80,
      branches: 70,
      functions: 80,
      lines: 80,
    },
  },
};

export default jestConfig;
