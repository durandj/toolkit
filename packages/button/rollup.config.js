import path from "path";

import minifyHTML from "rollup-plugin-minify-html-literals";
import { terser } from "rollup-plugin-terser";
import typescript from "rollup-plugin-typescript2";

import resolve from "@rollup/plugin-node-resolve";

const srcDir = "src";
const buildDir = path.join("build", "es");

const config = {
    input: path.join(srcDir, "index.ts"),

    output: {
        file: path.join(buildDir, "tk-button.es.js"),
        format: "es",
    },

    preserveEntrySignatures: false,

    // TODO(durandj): remove shady DOM polyfill to reduce bundle size
    // https://lit-element.polymer-project.org/guide/build#compile-out-the-shady-render-module
    plugins: [
        resolve(),
        typescript({
            tsconfigOverride: {
                compilerOptions: {
                    composite: false,
                    declaration: false,
                },
                exclude: ["./src/**/*.story.ts"],
            },
        }),
        minifyHTML(),
    ],
};

if (process.env.NODE_ENV !== "development") {
    config.plugins.push(terser());
}

export default config;
