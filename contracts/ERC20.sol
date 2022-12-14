pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract ERC20Token is ERC20 {
    address public owner;
    constructor(uint256 initialSupply,string memory name, string memory symbol) ERC20(name, symbol) {
        _mint(msg.sender, initialSupply**18);
        owner = msg.sender;
    }
}