const globals = require('globals');

module.exports = [
    {
        files: ['**/*.js'],
        languageOptions: {
            ecmaVersion: 2021,
            sourceType: 'commonjs',
            globals: {
                ...globals.browser,
                ...globals.node,
                ...globals.jest,
            },
        },
        rules: {
            'no-unused-vars': 'warn',
            'no-console': 'off',
            semi: ['error', 'always'],
            quotes: ['error', 'single'],
            indent: ['error', 4],
            'no-multiple-empty-lines': ['error', { max: 1 }],
            eqeqeq: 'error',
        },
    },
    {
        ignores: ['node_modules/', 'dist/', 'coverage/'],
    },
];
