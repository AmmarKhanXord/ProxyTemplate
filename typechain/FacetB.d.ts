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

interface FacetBInterface extends ethers.utils.Interface {
  functions: {
    "getCount()": FunctionFragment;
    "incrementCount()": FunctionFragment;
    "setCount(uint256)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "getCount", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "incrementCount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setCount",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "getCount", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "incrementCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setCount", data: BytesLike): Result;

  events: {};
}

export class FacetB extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: FacetBInterface;

  functions: {
    getCount(overrides?: CallOverrides): Promise<[BigNumber]>;

    "getCount()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    incrementCount(overrides?: Overrides): Promise<ContractTransaction>;

    "incrementCount()"(overrides?: Overrides): Promise<ContractTransaction>;

    setCount(
      _count: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setCount(uint256)"(
      _count: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  getCount(overrides?: CallOverrides): Promise<BigNumber>;

  "getCount()"(overrides?: CallOverrides): Promise<BigNumber>;

  incrementCount(overrides?: Overrides): Promise<ContractTransaction>;

  "incrementCount()"(overrides?: Overrides): Promise<ContractTransaction>;

  setCount(
    _count: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setCount(uint256)"(
    _count: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    getCount(overrides?: CallOverrides): Promise<BigNumber>;

    "getCount()"(overrides?: CallOverrides): Promise<BigNumber>;

    incrementCount(overrides?: CallOverrides): Promise<void>;

    "incrementCount()"(overrides?: CallOverrides): Promise<void>;

    setCount(_count: BigNumberish, overrides?: CallOverrides): Promise<void>;

    "setCount(uint256)"(
      _count: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    getCount(overrides?: CallOverrides): Promise<BigNumber>;

    "getCount()"(overrides?: CallOverrides): Promise<BigNumber>;

    incrementCount(overrides?: Overrides): Promise<BigNumber>;

    "incrementCount()"(overrides?: Overrides): Promise<BigNumber>;

    setCount(_count: BigNumberish, overrides?: Overrides): Promise<BigNumber>;

    "setCount(uint256)"(
      _count: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getCount()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    incrementCount(overrides?: Overrides): Promise<PopulatedTransaction>;

    "incrementCount()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    setCount(
      _count: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setCount(uint256)"(
      _count: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
