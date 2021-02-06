const fs = require("fs");
const path = require("path");

// const TSConfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

const packagesPath = path.join(__dirname, "..", "packages");

module.exports = {
    stories: [
        "../packages/**/*.story.@(js|jsx|ts|tsx)",
    ],
    addons: [
        "@storybook/addon-controls",
        "@storybook/addon-links",
        "@storybook/addon-essentials",
    ],
    webpackFinal: async (config, { configType }) => {
        // configType: "DEVELOPMENT" | "PRODUCTION"

        config.module.rules.push({
            test: /\.s[ac]ss$/i,
            use: [
                "style-loader",
                "css-loader",
                "resolve-url-loader",
                {
                    loader: "sass-loader",
                    options: {
                        sassOptions: {
                            includePaths: [
                                path.join(packagesPath, "theme-base", "node_modules"),
                            ],
                        },
                    },
                },
            ],
        });

        fs.readdirSync(packagesPath).forEach((packageName) => {
            console.log(packageName);
            const packageDir = path.join(packagesPath, packageName);
            const packageJSON = JSON.parse(fs.readFileSync(path.join(packageDir, "package.json")));

            config.resolve.alias[packageJSON.name] = packageDir;
        });

        return config;
    },
};
