import commonjs from '@rollup/plugin-commonjs';
import html from '@rollup/plugin-html';
import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import typescript from '@rollup/plugin-typescript';
import fs from 'fs';
import path from 'path';
import livereload from 'rollup-plugin-livereload';
import serve from 'rollup-plugin-serve';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const isProduction = process.env.NODE_ENV === 'production';

export default {
	input: 'src/index.tsx',
	output: {
		file: 'dist/bundle.js',
		format: 'esm',
	},
	plugins: [
		resolve(),
		commonjs(),
		typescript(),
		replace({
			preventAssignment: true,
			'process.env.NODE_ENV': JSON.stringify(isProduction ? 'production' : 'development'),
			process: JSON.stringify({
				env: {
					NODE_ENV: isProduction ? 'production' : 'development',
				},
			}),
		}),
		html({
			template: () => {
				const htmlTemplatePath = path.resolve(__dirname, './public/index.html');
				return fs.readFileSync(htmlTemplatePath, 'utf8');
			},
		}),

		serve({
			open: true,
			contentBase: ['dist'],
			port: 3000,
		}),
		livereload({
			watch: 'dist',
		}),
	],
};
