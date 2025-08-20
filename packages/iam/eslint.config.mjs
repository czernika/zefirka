// @ts-check

import tseslint from 'typescript-eslint'

export default tseslint.config(
    {
        ignores: ['node_modules/', 'dist/', 'generated/']
    },

    tseslint.configs.recommended,

    {
        languageOptions: {
            sourceType: 'module'
        }
    },
);
