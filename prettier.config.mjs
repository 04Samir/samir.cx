/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import('prettier').Config}
 */
export default {
    printWidth: 100,
    htmlWhitespaceSensitivity: 'strict',
    importOrder: [
        '^next(-.*|/.*)?$', // Next.js imports and related packages
        '^react(-.*|/.*)?$', // React imports and related packages
        '<THIRD_PARTY_MODULES>', // Other third-party packages
        '^(?:@/|[./])', // Local and relative imports
    ],
    importOrderSeparation: true,
    importOrderSortSpecifiers: true,
    singleQuote: true,
    tabWidth: 4,
    useTabs: false,
    plugins: ['@trivago/prettier-plugin-sort-imports', 'prettier-plugin-tailwindcss'],
};
