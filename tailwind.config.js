/* eslint-disable @typescript-eslint/no-require-imports */
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./projects/**/*.{html,ts}', './src/**/*.{html,ts}'],
	presets: [require('./projects/components/preset')],
};
