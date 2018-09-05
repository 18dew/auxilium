const TruffleWalletProvider = require('truffle-wallet-provider');
const { rinkebyWallet , liveWallet , infuraKey } = require('./wallets');
const Web3 = require('Web3');
module.exports = {
  migrations_directory: "./migrations",
  networks: {
    test: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    },
    kalido: {
      provider: () => {
        return new TruffleWalletProvider(rinkebyWallet, 'https://a0bk0tc49c:t0tPLJxdmTuXZstNlk1cHBlG1xnXuzy5rsfi2JASrKA@a0v3lrej1d-a0hn3b8wbi-rpc.ap-southeast-2.kaleido.io');
      },
      network_id: "929910069", // Match any network id
      gasPrice: 0,
      gas: 4500000
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
    },
  },
  solc: {
    optimizer: {
      enabled: true,
      runs: 500
    }
  }
};
/*
  TEMP Keys
 UID : a0jd3u3v09
 PWD : SHN6dvSaupczf1Io6sxu_NR8HeJnv7zFc5rfihrP8HQ

 UID : a0bk0tc49c
 PWD : t0tPLJxdmTuXZstNlk1cHBlG1xnXuzy5rsfi2JASrKA

CRED : a0bk0tc49c:t0tPLJxdmTuXZstNlk1cHBlG1xnXuzy5rsfi2JASrKA

UID : a0axzj8674
PWD : PQVSrqmny7YpQhPZnAtRwdmaajilKYN-hx12YxPAiwc

a0axzj8674:PQVSrqmny7YpQhPZnAtRwdmaajilKYN-hx12YxPAiwc
https://a0axzj8674:PQVSrqmny7YpQhPZnAtRwdmaajilKYN-hx12YxPAiwc@a0v3lrej1d-a0r0khhm6k-rpc.ap-southeast-2.kaleido.io
https://a0bk0tc49c:t0tPLJxdmTuXZstNlk1cHBlG1xnXuzy5rsfi2JASrKA@a0v3lrej1d-a0hn3b8wbi-rpc.ap-southeast-2.kaleido.io

api a0b7flse27-NrR6TFmhh4szfTSRP5pxJazxXhB4kLNgecS3fGxv61U=
*/
