const TruffleWalletProvider = require('truffle-wallet-provider');
const { rinkebyWallet , liveWallet , infuraKey } = require('./wallets');

module.exports = {
  migrations_directory: "./migrations",
  networks: {
    test: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      provider: () => {
        return new TruffleWalletProvider(rinkebyWallet, 'https://rinkeby.infura.io/' + infuraKey.key);
      },
      from: rinkebyWallet.getAddressString(),
      gasPrice: 25000000000,//25 Gwei
      network_id: 'rinkeby',
    },
    live: {
      provider: () => {
        return new TruffleWalletProvider(liveWallet, 'https://main.infura.io/' + infuraKey.key);
      },
      from: liveWallet.getAddressString(),
      gasPrice: 25000000000,//25 Gwei
      network_id: 'main',
    },  },
  solc: {
    optimizer: {
      enabled: true,
      runs: 500
    }
  }
};
