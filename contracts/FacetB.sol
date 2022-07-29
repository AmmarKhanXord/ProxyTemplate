// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "./Storage.sol";
import "hardhat/console.sol";

contract FacetB  is Storage{

    function getCount() external view returns (uint) {
        console.log("FacetB: getCount");
        return count;
    }

    function setCount(uint _count) public {
        console.log("FacetB: setCount");
        count = _count;
    }
    function incrementCount() external {
        count++;
    }
}
