// @ts-check

import tseslint from 'typescript-eslint'
import globals from 'globals'
import pluginVue from 'eslint-plugin-vue'

export default tseslint.config(
    {
        ignores: ['node_modules/', 'dist/', 'generated/']
    },

    tseslint.configs.recommended,

    {
        languageOptions: {
            sourceType: 'module',
            globals: {
                ...globals.browser,
            }
        },
    },

    // Правила ТОЛЬКО для Vue файлов
    {
        files: ['**/*.vue'],
        ...pluginVue.configs['flat/recommended'],

        rules: {
            'vue/multi-word-component-names': 'error'
        }
    },
)
