module.exports = {
  rootDir: "src",
  testMatch: ["**/tests/*.test.(ts|js)"],
  verbose: false,
  clearMocks: true,
  testEnvironment: "node",
  coveragePathIgnorePatterns: [
    "/node_modules/",
    "/__fixtures__/",
    "/__tests__/",
    "/(__)?mock(s__)?/",
    "/__jest__/",
    ".?.min.js"
  ],
  moduleDirectories: ["node_modules", "src"],
  transform: {
    "^.+\\.(ts)$": "ts-jest"
  },
  moduleFileExtensions: ["js", "json", "ts"]
};
