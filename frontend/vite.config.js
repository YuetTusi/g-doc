import { join } from 'path';
import { defineConfig } from 'vite';
import solid from 'vite-plugin-solid';

// https://vitejs.dev/config/
export default defineConfig({
	base: './',
	resolve: {
		alias: {
			'@': join(__dirname, './src')
		},
		extensions: ['.json', '.js', '.mjs', '.ts', '.tsx']
	},
	plugins: [solid()]
});
