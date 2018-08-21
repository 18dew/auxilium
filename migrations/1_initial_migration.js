var reliefC = artifacts.require("./reliefContract.sol");

module.exports = function(deployer) {
  deployer.deploy(reliefC);
};
