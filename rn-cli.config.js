const blacklist = require('metro').createBlacklist;
module.export = {
  resolver: {
    blacklistRE: blacklist( [
      /node_modules/jest-haste-map/build/
    ])
  }
}
