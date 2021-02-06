const path = require("path");

module.exports = {
    extends: [
        "@theisleoffavalon/eslint-config-tk",
    ],
    parserOptions: {
        project: path.resolve(__dirname, "tsconfig.json"),
    },
};
