module.exports = {
  moduleFileExtensions: ["ts", "js", "json", "tsx"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  testMatch: ["<rootDir>/**/__tests__/*.test.ts"],
  testEnvironment: "node",
};
