const path = require('path');

module.exports = {
    stories: ['../stories/**/*.stories.js', '../stories/**/*.stories.tsx'],
    addons: [
        '@storybook/addon-actions',
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@snek-at/storybook-addon-chakra-ui'
    ],
    presets: [path.resolve(__dirname, './next-preset.js')],
};
