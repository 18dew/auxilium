const TruffleWalletProvider = require('truffle-wallet-provider');
const { rinkebyWallet , liveWallet , infuraKey } = require('./wallets');

module.exports = {
  migrations_directory: "./migrations",
  networks: {
    test: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    }
  },
  solc: {
    optimizer: {
      enabled: true,
      runs: 500
    }
  }
};
