// jest.config.js
module.exports = {
  testEnvironment: "jsdom",

  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
  },

  moduleFileExtensions: ["js", "jsx"],

  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],

  testMatch: [
    "**/__tests__/**/*.?(js|jsx)",
    "**/?(*.)+(test).?(js|jsx)",
  ],
};