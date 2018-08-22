import ReliefERC20 from './../build/contracts/ReliefERC20.json'

const drizzleOptions = {
  web3: {
    block: false,
    fallback: {
      type: 'ws',
      url: 'ws://rinkeby.infura.io/ws'
    }
  },
  contracts: [
    ReliefERC20
  ],
  events: {
    SimpleStorage: ['StorageSet']
  },
  polls: {
    accounts: 1500
  }
}

export default drizzleOptions
