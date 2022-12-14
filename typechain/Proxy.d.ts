/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface ProxyInterface extends ethers.utils.Interface {
  functions: {
    "initializor1(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "initializor1",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "initializor1",
    data: BytesLike
  ): Result;

  events: {};
}

export class Proxy extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: ProxyInterface;

  functions: {
    initializor1(
      _facet1: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "initializor1(address)"(
      _facet1: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  initializor1(
    _facet1: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "initializor1(address)"(
    _facet1: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    initializor1(_facet1: string, overrides?: CallOverrides): Promise<void>;

    "initializor1(address)"(
      _facet1: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    initializor1(_facet1: string, overrides?: Overrides): Promise<BigNumber>;

    "initializor1(address)"(
      _facet1: string,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    initializor1(
      _facet1: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "initializor1(address)"(
      _facet1: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
