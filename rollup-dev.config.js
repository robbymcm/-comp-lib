import serve from "rollup-plugin-serve";
import livereload from "rollup-plugin-livereload";
import babel from '@rollup/plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';
import scss from 'rollup-plugin-scss';
import postcss from 'rollup-plugin-postcss';
const path = require('path');

export default {
    input: "./index.js",
    output: {
        name: 'App',
        file: "dist/bundle.js",
        format: "iife",
        sourcemap: true,
        external: [/\.css$/],
    },
    plugins: [
        typescript({ tsconfig: './tsconfig.json' }),
        nodeResolve({
            extensions: [".js"],
        }),
        replace({
            'process.env.NODE_ENV': JSON.stringify('development'),
            preventAssignment: false
        }),
        babel({
            presets: ["@babel/preset-react"],
        }),
        commonjs(),
        serve({
            open: true,
            verbose: true,
            contentBase: ["", "public"],
            host: "localhost",
            port: 3000,
        }),
        livereload({ watch: "dist" }),
        postcss(),
    ]
};