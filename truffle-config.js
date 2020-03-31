const HDWalletProvider = require('@truffle/hdwallet-provider');

// TODO: move to .env
const localPrivateKey = '42e6b866ddfd14d8d9d98999315ef9483d9ce65f25a0f2d108d8255518dfd3ca';
const privateKey = '6A6CFFD6BED34FB3BB6EEBD27F6786690912EAF9FC75B1CD28533BAB951D059C';
const localProvider = 'HTTP://127.0.0.1:8545';
const provider = `https://ropsten.infura.io/v3/fb1c2f2f566443d08c59aae698c78839`;

module.exports = {
  networks: {
    development: {
      provider: () => new HDWalletProvider(localPrivateKey, localProvider),
      network_id: "*",       // Any network (default: none)
    },
    ropsten: {
      provider: () => new HDWalletProvider(privateKey, provider),
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
