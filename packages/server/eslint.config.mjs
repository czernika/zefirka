// @ts-check

import tseslint from 'typescript-eslint'
import globals from 'globals'
import stylistic from '@stylistic/eslint-plugin'

export default tseslint.config(
    {
        ignores: ['node_modules/', 'dist/', 'generated/', '.turbo/'],
    },

    tseslint.configs.recommended,

    stylistic.configs.customize({
        indent: 4,
        semi: false,
        severity: 'warn',
    }),

    {
        languageOptions: {
            parserOptions: {
                tsconfigRootDir: './',
            },
            sourceType: 'module',
            globals: {
                ...globals.node,
            },
        },
    },

    {
        rules: {
            '@typescript-eslint/no-explicit-any': 'off',
        },
    },
)
