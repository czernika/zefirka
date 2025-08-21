// @ts-check

import tseslint from 'typescript-eslint'
import globals from 'globals'
import pluginVue from 'eslint-plugin-vue'
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
                parser: tseslint.parser,
                tsconfigRootDir: './',
            },
            sourceType: 'module',
            globals: {
                ...globals['shared-node-browser'],
            },
        },
    },

    {
        files: ['src/**/*.vue'],
        extends: [
            ...pluginVue.configs['flat/recommended'],
        ],
        rules: {
            'vue/html-indent': ['warn', 4],
            'vue/multi-word-component-names': 'off',
        },
    },
)
