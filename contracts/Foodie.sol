// SPDX-License-Identifier: DEats
pragma solidity >=0.6.0;
 
import "openzeppelin-solidity/contracts/token/ERC20/ERC20.sol";
 
contract FoodieToken is ERC20 {
    address owner;
    constructor() ERC20("Foodie", "FOD") public {
        _mint(msg.sender, 21000000);
        owner = msg.sender;
    }
        
    function returnOwner() public view returns(address _owner){
        return owner;
    }
}