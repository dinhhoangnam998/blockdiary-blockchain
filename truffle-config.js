require('dotenv').config()
const HDWalletProvider = require('@truffle/hdwallet-provider');

module.exports = {
  networks: {
    development: {
      provider: () => new HDWalletProvider(process.env.LOCAL_PRIVATE_KEY, process.env.LOCAL_PROVIDER),
      network_id: "*",
    },
    ropsten: {
      provider: () => new HDWalletProvider(process.env.ROPSTEN_PRIVATE_KEY, process.env.ROPSTEN_PROVIDER),
      network_id: 3,
    },
  },
  mocha: {
  },
  compilers: {
    solc: {
      version: "0.6.4",
    }
  }
}
