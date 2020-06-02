var UploadMusic = artifacts.require("UploadMusic");

module.exports = function(deployer) {
  // deployment steps
  deployer.deploy(UploadMusic);
};