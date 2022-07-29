// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "hardhat/console.sol";
import "./Storage.sol";
contract Proxy is Storage{
    function initializor1(address _facet1) public{
        facet1 = _facet1;
    }    
    fallback() external payable {
        console.log("Proxy: Fallback called");
        assembly {    
            let _target := sload(1)
            // let _target2 := sload(2)`
            calldatacopy(0, 0, calldatasize())            
            let result := delegatecall(gas(), _target,0, calldatasize(), 0, 0)
            returndatacopy(0, 0, returndatasize())
            switch result
                case 0 {
                    revert(0, returndatasize())
                }
                default {
                    return(0,returndatasize())
                }
        }
    }
    receive() external payable {}
}