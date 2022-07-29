// const { expect } = require("chai");
// const { poll } = require("ethers/lib/utils");
// const { waffle,ethers } = require("hardhat");
// const { userInfo } = require("os");
// const provider = waffle.provider;
// const web3 = require("web3");

// describe('ERC20 Deployment', () =>{

//     const [owner, accountOne] = provider.getWallets();

//     beforeEach( async () =>{
//         ERC20token = await ethers.getContractFactory("ERC20Token");
//         greeter = await ERC20token.deploy(1,"Foxoin","FXN");
//     });    
//     it('Return symbol of ERC20', async () =>{
//         let message =await greeter.symbol();
//         let owner =await greeter.owner();
//         console.log("Owner of the ERC token: " +owner)
        
//     });
// })