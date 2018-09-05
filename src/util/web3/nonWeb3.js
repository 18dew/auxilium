import Web3 from 'web3'
 let base = new Promise(function(resolve, reject) {
  // Wait for loading completion to avoid race conditions with web3 injection timing.
  window.addEventListener('load', function(dispatch) {
    // Checking if Web3 has been injected by the browser (Mist/MetaMask)
    if (typeof window.web3 === 'undefined') {
      var web3;
       // Fallback to localhost if no web3 injection.
      var provider = new Web3.providers.WebsocketProvider('ws://rinkeby.infura.io/ws')
      web3 = new Web3(provider)
      var pvk = "0xE492164A9FE6E9D4A3E4FD595D8D2ABE1DC0E1B35C4476C850FD5C4A516D1BDF";
      web3.eth.accounts.wallet.add(pvk);
      web3.eth.defaultAccount = web3.eth.accounts.wallet[0].address
      window.web3 = web3;
       console.log('No web3 instance injected, using Local web3.');
    }
     // TODO: Write code to inject wallet in here such that non metamask users can join in [ 1st level is sorted ] [ second problem is on ]
  })
})

var nonWeb3 = async function(){
  await base();
}
console.log(nonWeb3);
 export default nonWeb3()
