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
    uniqueName: "donor",
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

        name: "donor",
        filename: "donorRemoteEntry.js",
        exposes: {
           './entity1Module': './apps/donor/src/app/entity1/entity1.module.ts',
           './entity2Module': './apps/donor/src/app/entity2/entity2.module.ts',
           './entity3Module': './apps/donor/src/app/entity3/entity3.module.ts',
           './entity4Module': './apps/donor/src/app/entity4/entity4.module.ts',
           './entity5Module': './apps/donor/src/app/entity5/entity5.module.ts',
        },

        // For remotes (please adjust)
        // name: "donor",
        // filename: "remoteEntry.js",
        // exposes: {
        //     './Component': './apps/donor/src/app/app.component.ts',
        // },        
        
        // For hosts (please adjust)
        // remotes: {
        //     "recipient": "http://localhost:4200/remoteEntry.js",

        // },

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
