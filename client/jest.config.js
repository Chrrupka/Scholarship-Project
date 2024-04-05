module.exports = {
    clearMocks: true,
    coverageDirectory: "coverage",
    moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
    testEnvironment: "jsdom",
    testMatch: [
        "**/__tests__/**/*.[jt]s?(x)",
        "**/?(*.)+(spec|test).[tj]s?(x)"
    ],
    moduleNameMapper: {
        "^@components/(.*)$": "<rootDir>/src/components/$1",
    },

    // setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],

    transform: {
        "^.+\\.(js|jsx)$": "babel-jest"
    },

    verbose: true,
};
