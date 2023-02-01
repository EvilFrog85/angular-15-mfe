const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

    name: 'mfeNews',

    exposes: {
        './Module': './projects/mfe-news/src/app/news/news.module.ts',
        './Component': './projects/mfe-news/src/app/news/news.component.ts',
    },

    shared: {
        ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
    }
});
