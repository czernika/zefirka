// @ts-check

import tseslint from 'typescript-eslint'
import globals from 'globals'

export default tseslint.config(
    {
        ignores: ['node_modules/', 'dist/', 'generated/']
    },

    tseslint.configs.recommended,

    {
        languageOptions: {
            sourceType: 'module',
            globals: {
                ...globals.node
            }
        }
    },
);
