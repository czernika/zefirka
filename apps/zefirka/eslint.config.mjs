// @ts-check

import tseslint from 'typescript-eslint'
import globals from 'globals'
import pluginVue from 'eslint-plugin-vue'

export default tseslint.config(
    {
        ignores: ['node_modules/', 'dist/', 'generated/', '.turbo/']
    },

    tseslint.configs.recommended,

    {
        languageOptions: {
            parserOptions: {
                parser: tseslint.parser,
                tsconfigRootDir: './'
            },
            sourceType: 'module',
            globals: {
                ...globals['shared-node-browser'],
            }
        },
    },

    {
        files: ['src/**/*.vue'],
        extends: [
            ...pluginVue.configs['flat/recommended'],
        ],
    },
)
