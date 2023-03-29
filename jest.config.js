module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  extensionsToTreatAsEsm: [".ts"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  testMatch: ["<rootDir>/**/__tests__/**/*.test.(ts|tsx)"],
  transform: {
    "^.+\\.(ts)$": "ts-jest",
  },
};
