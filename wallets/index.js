const Wallet = require('ethereumjs-wallet');
const Util = require('ethereumjs-util');

const rinkebyWallet = Wallet.fromV3(require('./rinkeby/wallet.json'), '111');
const liveWallet = Wallet.fromV3(require('./live/wallet.json'), '111');
const infuraKey = require('./infuraKey.json');

module.exports = {
  rinkebyWallet,
  liveWallet,
  infuraKey
};
