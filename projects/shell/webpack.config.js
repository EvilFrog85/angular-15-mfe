const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
    name: 'mfeShell',

    remotes: {
        /*
        "mfeNews": "http://localhost:4201/remoteEntry.js",
        "mfeUserTable": "http://localhost:4202/remoteEntry.js",
        */
    },

    shared: {
        ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
    }
});
