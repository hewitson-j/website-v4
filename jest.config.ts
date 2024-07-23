export default {
    testEnvironment: "jsdom",
    transform: {
      "^.+\\.tsx?$": "ts-jest",
    },
    moduleNameMapper: {
        "\\.(css|less|sass|scss|jpg|jpeg|png)$": "identity-obj-proxy"},
    setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  };