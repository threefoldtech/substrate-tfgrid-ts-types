// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Bytes, Enum, Option, Struct, U8aFixed, Vec, u32, u64 } from '@polkadot/types';
import type { AccountId, Balance, BlockNumber, MultiAddress } from '@polkadot/types/interfaces/runtime';

/** @name Address */
export interface Address extends MultiAddress {}

/** @name BalanceOf */
export interface BalanceOf extends Balance {}

/** @name CertificationCodes */
export interface CertificationCodes extends Struct {
  readonly version: u32;
  readonly id: u32;
  readonly name: Bytes;
  readonly description: Bytes;
  readonly certification_code_type: CertificationCodeType;
}

/** @name CertificationCodeType */
export interface CertificationCodeType extends Enum {
  readonly isFarm: boolean;
  readonly isEntity: boolean;
}

/** @name CertificationType */
export interface CertificationType extends Enum {
  readonly isNone: boolean;
  readonly isSilver: boolean;
  readonly isGold: boolean;
}

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

/** @name Contract */
export interface Contract extends Struct {
  readonly version: u32;
  readonly contract_id: u64;
  readonly twin_id: u32;
  readonly node_id: AccountId;
  readonly data: Bytes;
  readonly deployment_hash: Bytes;
  readonly public_ips: u32;
  readonly state: ContractState;
  readonly last_updated: u64;
  readonly previous_nu_reported: u64;
  readonly public_ips_list: Vec<PublicIP>;
  readonly amount_unbilled: u64;
}

/** @name ContractState */
export interface ContractState extends Enum {
  readonly isCreated: boolean;
  readonly isDeleted: boolean;
  readonly isOutOfFunds: boolean;
}

/** @name Entity */
export interface Entity extends Struct {
  readonly version: u32;
  readonly id: u32;
  readonly name: Bytes;
  readonly country_id: u32;
  readonly city_id: u32;
  readonly address: AccountId;
}

/** @name EntityProof */
export interface EntityProof extends Struct {
  readonly entity_id: u32;
  readonly signature: Bytes;
}

/** @name Farm */
export interface Farm extends Struct {
  readonly version: u32;
  readonly id: u32;
  readonly name: Bytes;
  readonly twin_id: u32;
  readonly pricing_policy_id: u32;
  readonly certification_type: CertificationType;
  readonly country_id: u32;
  readonly city_id: u32;
  readonly public_ips: Vec<PublicIP>;
}

/** @name Location */
export interface Location extends Struct {
  readonly longitude: Bytes;
  readonly latitude: Bytes;
}

/** @name LookupSource */
export interface LookupSource extends MultiAddress {}

/** @name Node */
export interface Node extends Struct {
  readonly version: u32;
  readonly id: u32;
  readonly farm_id: u32;
  readonly twin_id: u32;
  readonly resources: Resources;
  readonly location: Location;
  readonly country_id: u32;
  readonly city_id: u32;
  readonly address: AccountId;
  readonly role: Role;
  readonly public_config: Option<PublicConfig>;
}

/** @name PricingPolicy */
export interface PricingPolicy extends Struct {
  readonly version: u32;
  readonly id: u32;
  readonly name: Bytes;
  readonly unit: Unit;
  readonly su: u32;
  readonly cu: u32;
  readonly nu: u32;
  readonly ipu: u32;
}

/** @name Public */
export interface Public extends U8aFixed {}

/** @name PublicConfig */
export interface PublicConfig extends Struct {
  readonly ipv4: Bytes;
  readonly ipv6: Bytes;
  readonly gw4: Bytes;
  readonly gw6: Bytes;
}

/** @name PublicIP */
export interface PublicIP extends Struct {
  readonly ip: Bytes;
  readonly gateway: Bytes;
  readonly contract_id: u64;
}

/** @name Resources */
export interface Resources extends Struct {
  readonly hru: u64;
  readonly sru: u64;
  readonly cru: u64;
  readonly mru: u64;
}

/** @name Role */
export interface Role extends Enum {
  readonly isNode: boolean;
  readonly isGateway: boolean;
}

/** @name StellarTransaction */
export interface StellarTransaction extends Struct {
  readonly amount: Balance;
  readonly target: MultiAddress;
}

/** @name Twin */
export interface Twin extends Struct {
  readonly version: u32;
  readonly id: u32;
  readonly address: AccountId;
  readonly ip: Bytes;
  readonly entities: Vec<EntityProof>;
}

/** @name U16F16 */
export interface U16F16 extends U8aFixed {}

/** @name Unit */
export interface Unit extends Enum {
  readonly isBytes: boolean;
  readonly isKilobytes: boolean;
  readonly isMegabytes: boolean;
  readonly isGigabytes: boolean;
}

/** @name VestingInfo */
export interface VestingInfo extends Struct {
  readonly locked: Balance;
  readonly perBlock: Balance;
  readonly startingBlock: BlockNumber;
  readonly tft_price: U16F16;
  readonly lastReleasedBlock: BlockNumber;
}

export type PHANTOM_TFGRIDMODULE = 'tfgridModule';
