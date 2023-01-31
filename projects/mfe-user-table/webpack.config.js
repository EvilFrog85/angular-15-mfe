const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

    name: 'mfeUserTable',

    exposes: {
        './Module': './projects/mfe-user-table/src/app/user-table/user-table.module.ts'
    },

    shared: {
        ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
    }
});
