var Restaurant = artifacts.require("DEats");
var Foodies = artifacts.require("FoodieToken");

module.exports = function(deployer) {
 
  deployer.then(async () => {

    const RestInst = await deployer.deploy(Restaurant);
    const FoodiesInst = await deployer.deploy(Foodies);
    
    //const repTokenInst = await deployer.deploy(ReputationToken);
    console.log('FoodieToken contract deployed at', FoodiesInst.address);

    //const modTokenInst = await deployer.deploy(ModeratorToken);
    console.log('RestInst contract deployed at', RestInst.address);
  })
};

// FoodieToken contract deployed at 0xF105D6Ae15962a4016263f42B60E9d86541249a6
//  RestInst contract deployed at 0x11357a34B07996578600D3d5e3FD6114747bc8B5