/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */
export default {
	embeddedLanguageFormatting: 'auto',
	singleAttributePerLine: false,
	vueIndentScriptAndStyle: false,
	arrowParens: 'always',
	bracketSpacing: true,
	bracketSameLine: false,
	endOfLine: 'auto',
	htmlWhitespaceSensitivity: 'css',
	insertPragma: false,
	jsxSingleQuote: false,
	printWidth: 140,
	proseWrap: 'always',
	quoteProps: 'consistent',
	requirePragma: false,
	semi: true,
	singleQuote: true,
	tabWidth: 2,
	useTabs: true,
	trailingComma: 'all',

	// Prettier plugins
	plugins: ['prettier-plugin-packagejson', 'prettier-plugin-astro', 'prettier-plugin-tailwindcss', '@ianvs/prettier-plugin-sort-imports'],
	importOrder: [
		'.css$',
		'.scss$',
		'',
		'<TYPES>',
		'<TYPES>^[.]',
		'',
		'<BUILTIN_MODULES>',
		'',
		'^(astro$)|^(astro:(.*)$)',
		'^@astrojs/(.*)$',
		'<THIRD_PARTY_MODULES>',
		'',
		'^astro-pure/(.*)$',
		'^@(.*)$',
		'',
		'^~(.*)$',
		'',
		'^[./]',
	],
	importOrderParserPlugins: ['astro', 'typescript', 'jsx', 'decorators-legacy'],
	tailwindFunctions: ['tailwind-merge', 'clsx'],
	overrides: [
		{
			files: '*.astro',
			options: {
				parser: 'astro',
			},
		},
	],
};
