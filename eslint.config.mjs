import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginAstro from 'eslint-plugin-astro';
import prettierRecommended from 'eslint-plugin-prettier/recommended';
import tsEslint from 'typescript-eslint';

import eslint from '@eslint/js';

export default tsEslint.config(
	eslint.configs.recommended,
	...tsEslint.configs.recommended,
	prettierRecommended,
	eslintConfigPrettier,
	...eslintPluginAstro.configs.recommended,
	{
		ignores: ['public/scripts/*', 'scripts/*', '.astro/', '**/node_modules/', '**/dist/', '**/build/', 'src/env.d.ts', '**/Tabs.astro'],
		rules: {
			'prettier/prettier': 'error',
			'@typescript-eslint/interface-name-prefix': 'off',
			'@typescript-eslint/explicit-function-return-type': 'off',
			'@typescript-eslint/explicit-module-boundary-types': 'off',
			'@typescript-eslint/no-explicit-any': ['error', { ignoreRestArgs: false }],
			'@typescript-eslint/no-unused-vars': [
				'error',
				{
					argsIgnorePattern: '^_',
					caughtErrorsIgnorePattern: '^_',
					destructuredArrayIgnorePattern: '^_',
					varsIgnorePattern: '^_',
				},
			],
			'no-console': ['error', { allow: ['trace', 'error'] }],
			'no-alert': 'error',
			'@typescript-eslint/naming-convention': [
				'warn',
				{
					selector: 'function',
					format: ['camelCase', 'PascalCase'],
				},
				// variables, CONSTANTS,
				{
					selector: 'variable',
					format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
					filter: {
						regex: '^_+$',
						match: true,
					},
				},
				{
					selector: 'parameter',
					format: ['camelCase', 'PascalCase'],
					leadingUnderscore: 'allow',
					filter: {
						regex: '^_+$',
						match: false,
					},
				},
				{
					selector: 'memberLike',
					format: null,
				},
				{
					selector: 'memberLike',
					modifiers: ['static'],
					format: ['camelCase', 'PascalCase'],
					leadingUnderscore: 'allow',
				},
				{
					selector: 'memberLike',
					modifiers: ['private'],
					format: ['camelCase'],
					leadingUnderscore: 'allow',
				},
				{
					selector: 'typeLike',
					format: ['PascalCase'],
				},
				{
					selector: 'enumMember',
					format: ['PascalCase'],
				},
				// disallow I prefix for interfaces
				{
					selector: 'interface',
					format: ['PascalCase'],
					// custom: { regex: '^I[A-Z]', match: false },
				},
				// force use is/should/has for boolean variables
				{
					selector: 'variable',
					types: ['boolean'],
					format: ['PascalCase'],
					prefix: ['is', 'should', 'has', 'can', 'did', 'will', 'enable', 'loading'],
				},
			],
		},
	},
);
