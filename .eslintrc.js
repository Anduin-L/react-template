module.exports =  {
	parser:  '@typescript-eslint/parser',  // Specifies the ESLint parser
	parserOptions: {
		ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
		sourceType: 'module' // Allows for the use of imports
	},
	extends:  [
		// 'airbnb',  // Uses airbnb, it including the react rule(eslint-plugin-react/eslint-plugin-jsx-a11y)
		// 'plugin:@typescript-eslint/recommended', // Optional enable, will more stricter
		'plugin:import/typescript', // Use prettier/react to pretty react syntax
		'plugin:promise/recommended',
		// 'plugin:prettier/recommended',
		// 'prettier/@typescript-eslint'
	],
	settings: {
		'import/parsers': {
			'@typescript-eslint/parser': ['.ts', '.tsx']
		},
		'import/resolver': {
			// use <root>/path/to/folder/tsconfig.json
			typescript: {
				directory: './tsconfig.json'
			}
		}
	},
	env: {
		browser: true // enable all browser global variables
	},
	plugins: ['@typescript-eslint', 'react-hooks', 'promise'],
	rules:  {
		// Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
		// e.g. '@typescript-eslint/explicit-function-return-type': 'off',
		'no-useless-constructor': 0,
		// 'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx', '.ts', '.tsx'] }],
		'react/jsx-one-expression-per-line': 0,
		'react-hooks/rules-of-hooks': 'error',

		/**
		 * @description rules of @typescript-eslint
		 */
		'@typescript-eslint/prefer-interface': 'off', // also want to use 'type'
		'@typescript-eslint/explicit-function-return-type': 'off', // annoying to force return type
		'@typescript-eslint/indent': 'off' // avoid conflict with airbn

		/**
		 * @description rules of eslint-plugin-prettier
		 */
		// 'prettier/prettier': [
		//   error, {
		//     singleQuote: true,
		//     semi: false
		//   }
		// ]
	},
};
