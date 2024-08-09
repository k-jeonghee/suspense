import commonjs from '@rollup/plugin-commonjs';
import html from '@rollup/plugin-html';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
	input: 'src/index.ts',
	output: {
		file: 'dist/bundle.js',
		format: 'esm',
	},
	plugins: [
		resolve(),
		commonjs(),
		typescript(),
		html({
			template: () => {
				const htmlTemplatePath = path.resolve(__dirname, './public/index.html');
				return fs.readFileSync(htmlTemplatePath, 'utf8');
			},
		}),
	],
};
