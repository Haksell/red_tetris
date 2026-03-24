import type { Config } from "jest";

const config: Config = {
  // PDF V.2.5: "Unit tests must cover at least 70% of statements, functions,
  // and lines, and at least 50% of branches."
  coverageThreshold: {
    global: {
      statements: 70,
      functions: 70,
      lines: 70,
      branches: 50,
    },
  },
  projects: [
    {
      displayName: "server",
      testMatch: ["<rootDir>/src/server/**/*.test.ts"],
      transform: { "^.+\\.ts$": "ts-jest" },
      testEnvironment: "node",
    },
    {
      displayName: "client",
      testMatch: ["<rootDir>/src/client/**/*.test.{ts,tsx}"],
      transform: { "^.+\\.tsx?$": "ts-jest" },
      testEnvironment: "jsdom",
      moduleNameMapper: {
        "^@client/(.*)$": "<rootDir>/src/client/$1",
        "^@shared/(.*)$": "<rootDir>/src/shared/$1",
      },
    },
  ],
};

export default config;
