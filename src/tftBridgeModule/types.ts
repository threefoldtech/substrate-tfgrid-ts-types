// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Bytes, Struct, Vec, u32, u64 } from '@polkadot/types';
import type { AccountId, BalanceOf, BlockNumber } from '@polkadot/types/interfaces/runtime';

/** @name Burn */
export interface Burn extends Struct {
  readonly target: AccountId;
  readonly amount: BalanceOf;
  readonly block: BlockNumber;
  readonly message: Bytes;
}

/** @name BurnTransaction */
export interface BurnTransaction extends Struct {
  readonly block: BlockNumber;
  readonly amount: u64;
  readonly target: Bytes;
  readonly signatures: Vec<StellarSignature>;
  readonly sequence_number: u64;
}

/** @name MintTransaction */
export interface MintTransaction extends Struct {
  readonly amount: u64;
  readonly target: AccountId;
  readonly block: BlockNumber;
  readonly votes: u32;
}

/** @name RefundTransaction */
export interface RefundTransaction extends Struct {
  readonly block: BlockNumber;
  readonly amount: u64;
  readonly target: Bytes;
  readonly tx_hash: Bytes;
  readonly signatures: Vec<StellarSignature>;
  readonly sequence_number: u64;
}

/** @name StellarSignature */
export interface StellarSignature extends Struct {
  readonly signature: Bytes;
  readonly stellar_pubkey: Bytes;
}

export type PHANTOM_TFTBRIDGEMODULE = 'tftBridgeModule';
