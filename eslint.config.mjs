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
		languageOptions: {
			parserOptions: {
				project: './tsconfig.json',
				tsconfigRootDir: import.meta.dirname,
				sourceType: 'module',
			},
		},
		rules: {
			'prettier/prettier': 'error',
			'@typescript-eslint/interface-name-prefix': 'off',
			'@typescript-eslint/explicit-function-return-type': 'off',
			'@typescript-eslint/explicit-module-boundary-types': 'off',
			'@typescript-eslint/no-empty-object-type': 'off',
			'@typescript-eslint/triple-slash-reference': 'error',
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
			'@typescript-eslint/naming-convention': 'off',
			'@typescript-eslint/no-explicit-any': 'off',
		},
	},
	{
		ignores: ['public/scripts/*', 'scripts/*', '.astro/', '.vercel/', 'node_modules/', 'dist/', 'build/', '**/*.d.ts', '**/Tabs.astro'],
	},
);
