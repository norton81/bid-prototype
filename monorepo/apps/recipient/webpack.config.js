const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const share = mf.share;

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, '../../tsconfig.base.json'),
  [/* mapped paths to share */]);

module.exports = {
  output: {
    uniqueName: "recipient",
    publicPath: "auto"
  },
  optimization: {
    runtimeChunk: false
  },   
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    }
  },
  experiments: {
    outputModule: true
  },
  plugins: [
    new ModuleFederationPlugin({
        library: { type: "module" },

        // For remotes (please adjust)
        // name: "recipient",
        // filename: "remoteEntry.js",
        // exposes: {
        //     './Component': './apps/recipient/src/app/app.component.ts',
        // },        
        
        // For hosts (please adjust)
        // remotes: {
        //     "donor": "http://localhost:5000/remoteEntry.js",

        // },
      // For hosts (please adjust)
        remotes: {
          "donor": "http://localhost:5000/donorRemoteEntry.js",
        },
        shared: share({
          "@angular/core": { singleton: true, strictVersion: true, requiredVersion: 'auto' }, 
          "@angular/common": { singleton: true, strictVersion: true, requiredVersion: 'auto' }, 
          "@angular/common/http": { singleton: true, strictVersion: true, requiredVersion: 'auto' }, 
          "@angular/router": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
          "@angular/material": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
          "@angular/forms": { requiredVersion: 'auto', singleton: true },
          "@ngrx/store": { requiredVersion: 'auto', singleton: true },
          "@ngrx/effects": { requiredVersion: 'auto', singleton: true },
          ...sharedMappings.getDescriptors()
        })
        
    }),
    sharedMappings.getPlugin()
  ],
};
