export default {
    'packages/auth/**/*.ts': [
        'bunx eslint -c packages/auth/eslint.config.mjs . --fix',
    ],
    'packages/iam/**/*.ts': [
        'bunx eslint -c packages/iam/eslint.config.mjs . --fix',
    ],
    'packages/platform/**/*.{ts,vue}': [
        'bunx eslint -c packages/platform/eslint.config.mjs . --fix',
    ],
}
