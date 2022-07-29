// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "hardhat/console.sol";
import "./Storage.sol";
contract FacetA is Storage{
    function getValue() external view returns(string memory){
        console.log("Hello from facet getValue");
        return val;
    }
    function setValue(string memory _val) public {
        console.log("Hello from facet setValue");
        val = _val;
    }
    fallback() external payable {
        console.log("Hello from Facet fallback");
    }
}
