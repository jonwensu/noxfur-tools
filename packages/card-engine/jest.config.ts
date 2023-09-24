import type { Config } from "@jest/types";
import { pathsToModuleNameMapper } from "ts-jest";
import tsConfig from "./tsconfig.json";

const config: Config.InitialOptions = {
  verbose: true,
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  preset: "ts-jest",
  moduleNameMapper: pathsToModuleNameMapper(tsConfig.compilerOptions.paths, {
    prefix: "<rootDir>/",
  }),
  testResultsProcessor: "jest-sonar-reporter",
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.{js,jsx,ts,tsx}"],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: -10,
    },
  },
};

export default config;
