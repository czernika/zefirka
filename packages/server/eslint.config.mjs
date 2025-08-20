// @ts-check

import tseslint from 'typescript-eslint'
import globals from 'globals'

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
            sourceType: 'module',
            globals: {
                ...globals.node
            }
        }
    },
);
