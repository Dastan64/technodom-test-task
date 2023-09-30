module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    parser: '@typescript-eslint/parser',
    plugins: ['react-refresh', 'typescript-sort-keys',
        'sort-destructure-keys'],
    rules: {
        'react-refresh/only-export-components': [
            'warn',
            { allowConstantExport: true },
        ],
        'typescript-sort-keys/interface': 'error',
        'typescript-sort-keys/string-enum': 'error',
        'sort-destructure-keys/sort-destructure-keys': [2, { 'caseSensitive': false }]
    },
}
