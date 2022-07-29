/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { FacetB } from "../FacetB";

export class FacetB__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<FacetB> {
    return super.deploy(overrides || {}) as Promise<FacetB>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): FacetB {
    return super.attach(address) as FacetB;
  }
  connect(signer: Signer): FacetB__factory {
    return super.connect(signer) as FacetB__factory;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): FacetB {
    return new Contract(address, _abi, signerOrProvider) as FacetB;
  }
}

const _abi = [
  {
    inputs: [],
    name: "getCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "incrementCount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_count",
        type: "uint256",
      },
    ],
    name: "setCount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610238806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c8063a87d942c14610046578063d14e62b814610060578063e5071b8e14610075575b600080fd5b61004e61007d565b60405190815260200160405180910390f35b61007361006e36600461016b565b6100b7565b005b6100736100ed565b60006100b06040518060400160405280601081526020016f119858d95d108e8819d95d10dbdd5b9d60821b815250610104565b5060045490565b6100e86040518060400160405280601081526020016f119858d95d108e881cd95d10dbdd5b9d60821b815250610104565b600455565b600480549060006100fd836101d9565b9190505550565b610147816040516024016101189190610184565b60408051601f198184030181529190526020810180516001600160e01b031663104c13eb60e21b17905261014a565b50565b80516a636f6e736f6c652e6c6f67602083016000808483855afa5050505050565b60006020828403121561017d57600080fd5b5035919050565b600060208083528351808285015260005b818110156101b157858101830151858201604001528201610195565b818111156101c3576000604083870101525b50601f01601f1916929092016040019392505050565b60006000198214156101fb57634e487b7160e01b600052601160045260246000fd5b506001019056fea2646970667358221220fe87f4e46eb0728fb314c8842be8146d240de79153bdf1f14006a5d186be109864736f6c63430008070033";
