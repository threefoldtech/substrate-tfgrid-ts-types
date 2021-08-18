// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Bytes, Enum, Struct, Vec, u128, u32, u64 } from '@polkadot/types';
import type { PublicIP } from 'substrate-tfgrid-ts-types/src/tfgridModule';

/** @name Consumption */
export interface Consumption extends Struct {
  readonly contract_id: u64;
  readonly timestamp: u64;
  readonly cru: u64;
  readonly sru: u64;
  readonly hru: u64;
  readonly mru: u64;
  readonly nru: u64;
}

/** @name ContractBill */
export interface ContractBill extends Struct {
  readonly contract_id: u64;
  readonly timestamp: u64;
  readonly discount_level: DiscountLevel;
  readonly amount_billed: u128;
}

/** @name ContractBillingInformation */
export interface ContractBillingInformation extends Struct {
  readonly previous_nu_reported: u64;
  readonly last_updated: u64;
  readonly amount_unbilled: u64;
}

/** @name ContractState */
export interface ContractState extends Enum {
  readonly isCreated: boolean;
  readonly isDeleted: boolean;
  readonly isOutOfFunds: boolean;
}

/** @name DiscountLevel */
export interface DiscountLevel extends Enum {
  readonly isNone: boolean;
  readonly isDefault: boolean;
  readonly isBronze: boolean;
  readonly isSilver: boolean;
  readonly isGold: boolean;
}

/** @name NodeContract */
export interface NodeContract extends Struct {
  readonly version: u32;
  readonly contract_id: u64;
  readonly twin_id: u32;
  readonly node_id: u32;
  readonly deploy_mentdata: Bytes;
  readonly deployment_hash: Bytes;
  readonly public_ips: u32;
  readonly state: ContractState;
  readonly public_ips_list: Vec<PublicIP>;
}

export type PHANTOM_SMARTCONTRACTMODULE = 'smartContractModule';
