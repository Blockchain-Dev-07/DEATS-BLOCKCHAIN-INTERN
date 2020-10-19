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


  //   //approve
  //   await FoodiesInst.approve(FoodiesInst.address,100000);
  //   await FoodiesInst.approve(RestInst.address,100000);
  //   await FoodiesInst.approveContract(RestInst.address,10000);

  //   await FoodiesInst.approve('0x8c3cc2BdF41bc801787701E4f7D2f498d7a495986',10000);
  //   await FoodiesInst.approve('0x8414C8978a322454588E3f62334f1Ea7310c9683',10000);
  //   await FoodiesInst.approve('0xa3c74466C50aE137C077d20C37668A86d848112c',10000); 
  //   // await FoodiesInst.approve('0x6c18fe1BA1D29738eDccC077Cfe88A9Dec5454c7',10000);
  //   // await FoodiesInst.approve('0x8CcaA58a3eB7b5C54C37f22Cf2B56EE083F7C4C7',10000);
  //   // await FoodiesInst.approve('0x101512Dc72AED894c81D877817e8776Dd19EdEBD',10000);
  //   // await FoodiesInst.approve('0x5a0A3eeC3783e3120DFA4c86Cf26A632d033FaCa',10000);

  //  //transfer
  //  await FoodiesInst.transfer('0x8c3cc2BdF41bc801787701E4f7D2f498d7a49598',1000);
  //  await FoodiesInst.transfer('0x8414C8978a322454588E3f62334f1Ea7310c9683',1000);
  //  await FoodiesInst.transfer('0xa3c74466C50aE137C077d20C37668A86d848112c',1000);
  // //  await FoodiesInst.transfer('0x6c18fe1BA1D29738eDccC077Cfe88A9Dec5454c7',1000);
  // //   await FoodiesInst.transfer('0x8CcaA58a3eB7b5C54C37f22Cf2B56EE083F7C4C7',1000);
  // //   await FoodiesInst.transfer('0x101512Dc72AED894c81D877817e8776Dd19EdEBD',1000);
  // //   await FoodiesInst.transfer('0x5a0A3eeC3783e3120DFA4c86Cf26A632d033FaCa',1000);

  


  })
};

// FoodieToken contract deployed at 0xF105D6Ae15962a4016263f42B60E9d86541249a6
//  RestInst contract deployed at 0x11357a34B07996578600D3d5e3FD6114747bc8B5