export default {
    'packages/server/**/*.ts': [
        'bunx eslint -c packages/server/eslint.config.mjs . --fix',
    ],
    'packages/iam/**/*.ts': [
        'bunx eslint -c packages/iam/eslint.config.mjs . --fix',
    ],
    'packages/platform/**/*.{ts,vue}': [
        'bunx eslint -c packages/platform/eslint.config.mjs . --fix',
    ],
    'apps/zefirka/**/*.{ts,vue}': [
        'bunx eslint -c apps/zefirka/eslint.config.mjs . --fix',
    ],
}
