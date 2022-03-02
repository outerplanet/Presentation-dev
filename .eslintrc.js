module.exports = {
	env: {
		browser: true,
		es2021: true
	},
	extends: [
		'react-app',
		'react-app/jest',
		'plugin:react/recommended',
		'airbnb',
		'airbnb-typescript'
	],
	ignorePatterns: ['build'],
	overrides: [
		{
			files: [
				'.eslintrc.js*',
				'src/index.tsx',
				'src/react-app-env.d.ts',
				'**/use[A-Z]*.tsx'
			],
			rules: {
				'filename-rules/match': 0
			}
		},
		{
			files: ['*.ts'],
			rules: {
				'import/prefer-default-export': 0
			}
		}
	],
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: 'latest',
		project: './tsconfig.eslint.json',
		sourceType: 'module'
	},
	plugins: [
		'filename-rules',
		'react',
		'sort-destructure-keys',
		'typescript-sort-keys'
	],
	rules: {
		'@typescript-eslint/brace-style': [1, 'stroustrup'],
		'@typescript-eslint/comma-dangle': [1, 'never'],
		'@typescript-eslint/indent': [1, 'tab', { SwitchCase: 1 }],
		'@typescript-eslint/no-base-to-string': 2,
		'@typescript-eslint/no-loop-func': 0,
		'@typescript-eslint/no-unused-expressions': [2, {
			allowShortCircuit: true,
			allowTaggedTemplates: false,
			allowTernary: true,
			enforceForJSX: true
		}],
		'@typescript-eslint/no-use-before-define': 0,
		'arrow-parens': [1, 'as-needed'],
		'consistent-return': 0,
		'filename-rules/match': [1, {
			'.js': 'camelCase',
			'.jsx': 'PascalCase',
			'.ts': 'camelCase',
			'.tsx': 'PascalCase'
		}],
		'function-paren-newline': [1, 'consistent'],
		'guard-for-in': 0,
		'import/no-cycle': 0,
		'import/order': [1, {
			alphabetize: {
				caseInsensitive: true,
				order: 'asc'
			},
			'newlines-between': 'never'
		}],
		'jsx-a11y/click-events-have-key-events': 0,
		'jsx-a11y/label-has-associated-control': 0,
		'jsx-a11y/no-static-element-interactions': 0,
		'max-len': 0,
		'no-inner-declarations': 0,
		'no-nested-ternary': 0,
		'no-param-reassign': 0,
		'no-plusplus': 0,
		'no-promise-executor-return': 0,
		'no-restricted-syntax': 0,
		'no-return-assign': 0,
		'no-tabs': 0,
		'no-unreachable': 2,
		'no-unsafe-optional-chaining': [2, { disallowArithmeticOperators: false }],
		'object-curly-newline': [1, { consistent: true }],
		'prefer-const': [1, {
			destructuring: 'all',
			ignoreReadBeforeAssign: false
		}],
		'prefer-template': 0,
		'react/button-has-type': 0,
		'react/display-name': 1,
		'react/function-component-definition': [1, {
			namedComponents: 'function-declaration',
			unnamedComponents: 'function-expression'
		}],
		'react/jsx-filename-extension': [1, { extensions: ['.jsx', '.tsx'] }],
		'react/jsx-indent': [1, 'tab'],
		'react/jsx-indent-props': [1, 'tab'],
		'react/jsx-key': 2,
		'react/jsx-no-bind': 0,
		'react/jsx-no-useless-fragment': 0,
		'react/jsx-props-no-spreading': 0,
		'react/no-array-index-key': 0,
		'react/react-in-jsx-scope': 0,
		'react/require-default-props': 0,
		'require-await': 2,
		'sort-destructure-keys/sort-destructure-keys': 1,
		'sort-imports': [1, {
			ignoreCase: true,
			ignoreDeclarationSort: true
		}],
		'sort-keys': [1, 'asc', { caseSensitive: true }],
		'typescript-sort-keys/interface': 1,
		'typescript-sort-keys/string-enum': 1,
		yoda: 1
	}
};
