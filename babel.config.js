module.exports = {
    presets: [['@babel/preset-env', { bugfixes: true }], '@babel/preset-typescript', '@babel/preset-react'],
    plugins: [
        'babel-plugin-styled-components',
        ['@babel/plugin-transform-runtime', { corejs: 3, version: '^7.10.2' }],
        '@babel/plugin-proposal-export-namespace-from',
        '@babel/plugin-proposal-export-default-from',
    ],
};
