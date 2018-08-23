const tokenC          = artifacts.require('./ReliefERC20')

let AuthToken

const deployA = (deployer)=>{
  return new Promise(async function(resolve, reject) {
    try{
      await deployer.deploy(tokenC,{privateFor: ["LufUMmRvJlOV/et8Y1o9ptEa2aUpjoyL7d/Gzf7tN2E="]})
      AuthToken = await tokenC.deployed();
      console.log(`ReliefERC20 address ${tokenC.address}`);
      resolve(tokenC.address);
    }catch(e){
      console.log(e);
      reject(e);
    }
  });
}


module.exports = async function(deployer) {
  await deployA(deployer);
};
