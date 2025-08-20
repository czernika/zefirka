// @ts-check

import tseslint from 'typescript-eslint'

export default tseslint.config(
    {
        ignores: ['node_modules/', 'dist/', 'generated/', '.turbo/']
    },

    tseslint.configs.recommended,

    {
        languageOptions: {
            parserOptions: {
                tsconfigRootDir: './'
            },
            sourceType: 'module'
        }
    },
);
