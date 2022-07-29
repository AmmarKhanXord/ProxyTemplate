const { waffle,ethers } = require("hardhat");
const { userInfo } = require("os");
const provider = waffle.provider;
const web3 = require("web3");

describe('Proxy', () =>{

    const [owner, accountOne] = provider.getWallets();

    before(async function () {  
        ProxyCon = await ethers.getContractFactory("Proxy");
        ProxyContract = await ProxyCon.deploy(); 

        // facetA = await ethers.getContractFactory("FacetA");
        // facetAContract = await facetA.deploy();

        facetB = await ethers.getContractFactory("FacetB");
        facetBContract = await facetB.deploy();

        await ProxyContract.initializor1(facetBContract.address);                
        proxy = await facetBContract.attach(ProxyContract.address);
    })

    it('Should return string', async () =>{        
        console.log("Proxy address " + ProxyContract.address)        
        await proxy.setCount(5);
        console.log((await proxy.getCount()).toString());
        await proxy.incrementCount();
        console.log((await proxy.getCount()).toString());
    })   
})