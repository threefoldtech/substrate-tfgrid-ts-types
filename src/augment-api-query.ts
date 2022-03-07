// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

import type { Bytes, Option, Vec, bool, u32, u64 } from '@polkadot/types';
import type { AnyNumber, ITuple, Observable } from '@polkadot/types/types';
import type { UncleEntryItem } from '@polkadot/types/interfaces/authorship';
import type { AccountData, BalanceLock } from '@polkadot/types/interfaces/balances';
import type { Votes } from '@polkadot/types/interfaces/collective';
import type { Proposal } from '@polkadot/types/interfaces/democracy';
import type { SetId, StoredPendingChange, StoredState } from '@polkadot/types/interfaces/grandpa';
import type { AccountId, Balance, BlockNumber, Hash, KeyTypeId, Moment, Releases, ValidatorId } from '@polkadot/types/interfaces/runtime';
import type { Scheduled, TaskAddress } from '@polkadot/types/interfaces/scheduler';
import type { Keys, SessionIndex } from '@polkadot/types/interfaces/session';
import type { AccountInfo, DigestOf, EventIndex, EventRecord, LastRuntimeUpgradeInfo, Phase } from '@polkadot/types/interfaces/system';
import type { Multiplier } from '@polkadot/types/interfaces/txpayment';
import type { Contract, ContractBillingInformation } from 'substrate-tfgrid-ts-types/src/smartContractModule';
import type { CertificationCodes, CertificationType, Entity, Farm, FarmingPolicy, Node, PricingPolicy, StorageVersion, TermsAndConditions, Twin, U16F16 } from 'substrate-tfgrid-ts-types/src/tfgridModule';
import type { Burn, BurnTransaction, MintTransaction, RefundTransaction } from 'substrate-tfgrid-ts-types/src/tftBridgeModule';
import type { ApiTypes } from '@polkadot/api/types';

declare module '@polkadot/api/types/storage' {
  export interface AugmentedQueries<ApiType> {
    authorship: {
      /**
       * Author of current block.
       **/
      author: AugmentedQuery<ApiType, () => Observable<Option<AccountId>>>;
      /**
       * Whether uncles were already set in this block.
       **/
      didSetUncles: AugmentedQuery<ApiType, () => Observable<bool>>;
      /**
       * Uncles
       **/
      uncles: AugmentedQuery<ApiType, () => Observable<Vec<UncleEntryItem>>>;
    };
    balances: {
      /**
       * The balance of an account.
       * 
       * NOTE: This is only used in the case that this pallet is used to store balances.
       **/
      account: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<AccountData>>;
      /**
       * Any liquidity locks on some account balances.
       * NOTE: Should only be accessed when setting, changing and freeing a lock.
       **/
      locks: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<Vec<BalanceLock>>>;
      /**
       * Storage version of the pallet.
       * 
       * This is set to v2.0.0 for new networks.
       **/
      storageVersion: AugmentedQuery<ApiType, () => Observable<Releases>>;
      /**
       * The total units issued in the system.
       **/
      totalIssuance: AugmentedQuery<ApiType, () => Observable<Balance>>;
    };
    burningModule: {
      burns: AugmentedQuery<ApiType, () => Observable<Vec<Burn>>>;
    };
    council: {
      /**
       * The current members of the collective. This is stored sorted (just by value).
       **/
      members: AugmentedQuery<ApiType, () => Observable<Vec<AccountId>>>;
      /**
       * The prime member that helps determine the default vote behavior in case of absentations.
       **/
      prime: AugmentedQuery<ApiType, () => Observable<Option<AccountId>>>;
      /**
       * Proposals so far.
       **/
      proposalCount: AugmentedQuery<ApiType, () => Observable<u32>>;
      /**
       * Actual proposal for a given hash, if it's current.
       **/
      proposalOf: AugmentedQuery<ApiType, (arg: Hash | string | Uint8Array) => Observable<Option<Proposal>>>;
      /**
       * The hashes of the active proposals.
       **/
      proposals: AugmentedQuery<ApiType, () => Observable<Vec<Hash>>>;
      /**
       * Votes on a given proposal, if it is ongoing.
       **/
      voting: AugmentedQuery<ApiType, (arg: Hash | string | Uint8Array) => Observable<Option<Votes>>>;
    };
    grandpa: {
      /**
       * The number of changes (both in terms of keys and underlying economic responsibilities)
       * in the "set" of Grandpa validators from genesis.
       **/
      currentSetId: AugmentedQuery<ApiType, () => Observable<SetId>>;
      /**
       * next block number where we can force a change.
       **/
      nextForced: AugmentedQuery<ApiType, () => Observable<Option<BlockNumber>>>;
      /**
       * Pending change: (signaled at, scheduled change).
       **/
      pendingChange: AugmentedQuery<ApiType, () => Observable<Option<StoredPendingChange>>>;
      /**
       * A mapping from grandpa set ID to the index of the *most recent* session for which its
       * members were responsible.
       * 
       * TWOX-NOTE: `SetId` is not under user control.
       **/
      setIdSession: AugmentedQuery<ApiType, (arg: SetId | AnyNumber | Uint8Array) => Observable<Option<SessionIndex>>>;
      /**
       * `true` if we are currently stalled.
       **/
      stalled: AugmentedQuery<ApiType, () => Observable<Option<ITuple<[BlockNumber, BlockNumber]>>>>;
      /**
       * State of the current authority set.
       **/
      state: AugmentedQuery<ApiType, () => Observable<StoredState>>;
    };
    randomnessCollectiveFlip: {
      /**
       * Series of block headers from the last 81 blocks that acts as random seed material. This
       * is arranged as a ring buffer with `block_number % 81` being the index into the `Vec` of
       * the oldest hash.
       **/
      randomMaterial: AugmentedQuery<ApiType, () => Observable<Vec<Hash>>>;
    };
    scheduler: {
      /**
       * Items to be executed, indexed by the block number that they should be executed on.
       **/
      agenda: AugmentedQuery<ApiType, (arg: BlockNumber | AnyNumber | Uint8Array) => Observable<Vec<Option<Scheduled>>>>;
      /**
       * Lookup from identity to the block number and index of the task.
       **/
      lookup: AugmentedQuery<ApiType, (arg: Bytes | string | Uint8Array) => Observable<Option<TaskAddress>>>;
      /**
       * Storage version of the pallet.
       * 
       * New networks start with last version.
       **/
      storageVersion: AugmentedQuery<ApiType, () => Observable<Releases>>;
    };
    session: {
      /**
       * Current index of the session.
       **/
      currentIndex: AugmentedQuery<ApiType, () => Observable<SessionIndex>>;
      /**
       * Indices of disabled validators.
       * 
       * The set is cleared when `on_session_ending` returns a new set of identities.
       **/
      disabledValidators: AugmentedQuery<ApiType, () => Observable<Vec<u32>>>;
      /**
       * The owner of a key. The key is the `KeyTypeId` + the encoded key.
       **/
      keyOwner: AugmentedQuery<ApiType, (arg: ITuple<[KeyTypeId, Bytes]> | [KeyTypeId | AnyNumber | Uint8Array, Bytes | string | Uint8Array]) => Observable<Option<ValidatorId>>>;
      /**
       * The next session keys for a validator.
       **/
      nextKeys: AugmentedQuery<ApiType, (arg: ValidatorId | string | Uint8Array) => Observable<Option<Keys>>>;
      /**
       * True if the underlying economic identities or weighting behind the validators
       * has changed in the queued validator set.
       **/
      queuedChanged: AugmentedQuery<ApiType, () => Observable<bool>>;
      /**
       * The queued keys for the next session. When the next session begins, these keys
       * will be used to determine the validator's session keys.
       **/
      queuedKeys: AugmentedQuery<ApiType, () => Observable<Vec<ITuple<[ValidatorId, Keys]>>>>;
      /**
       * The current set of validators.
       **/
      validators: AugmentedQuery<ApiType, () => Observable<Vec<ValidatorId>>>;
    };
    smartContractModule: {
      activeNodeContracts: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Vec<u64>>>;
      contractBillingInformationById: AugmentedQuery<ApiType, (arg: u64 | AnyNumber | Uint8Array) => Observable<ContractBillingInformation>>;
      contractId: AugmentedQuery<ApiType, () => Observable<u64>>;
      contractIdByNameRegistration: AugmentedQuery<ApiType, (arg: Bytes | string | Uint8Array) => Observable<u64>>;
      contractIdByNodeIdAndHash: AugmentedQueryDoubleMap<ApiType, (key1: u32 | AnyNumber | Uint8Array, key2: Bytes | string | Uint8Array) => Observable<u64>>;
      contractLastBilledAt: AugmentedQuery<ApiType, (arg: u64 | AnyNumber | Uint8Array) => Observable<u64>>;
      contracts: AugmentedQuery<ApiType, (arg: u64 | AnyNumber | Uint8Array) => Observable<Contract>>;
      contractsToBillAt: AugmentedQuery<ApiType, (arg: u64 | AnyNumber | Uint8Array) => Observable<Vec<u64>>>;
      /**
       * The current version of the pallet.
       **/
      palletVersion: AugmentedQuery<ApiType, () => Observable<PalletStorageVersion>>;
    };
    sudo: {
      /**
       * The `AccountId` of the sudo key.
       **/
      key: AugmentedQuery<ApiType, () => Observable<AccountId>>;
    };
    system: {
      /**
       * The full account information for a particular account ID.
       **/
      account: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<AccountInfo>>;
      /**
       * Total length (in bytes) for all extrinsics put together, for the current block.
       **/
      allExtrinsicsLen: AugmentedQuery<ApiType, () => Observable<Option<u32>>>;
      /**
       * Map of block numbers to block hashes.
       **/
      blockHash: AugmentedQuery<ApiType, (arg: BlockNumber | AnyNumber | Uint8Array) => Observable<Hash>>;
      /**
       * The current weight for the block.
       **/
      blockWeight: AugmentedQuery<ApiType, () => Observable<ConsumedWeight>>;
      /**
       * Digest of the current block, also part of the block header.
       **/
      digest: AugmentedQuery<ApiType, () => Observable<DigestOf>>;
      /**
       * The number of events in the `Events<T>` list.
       **/
      eventCount: AugmentedQuery<ApiType, () => Observable<EventIndex>>;
      /**
       * Events deposited for the current block.
       **/
      events: AugmentedQuery<ApiType, () => Observable<Vec<EventRecord>>>;
      /**
       * Mapping between a topic (represented by T::Hash) and a vector of indexes
       * of events in the `<Events<T>>` list.
       * 
       * All topic vectors have deterministic storage locations depending on the topic. This
       * allows light-clients to leverage the changes trie storage tracking mechanism and
       * in case of changes fetch the list of events of interest.
       * 
       * The value has the type `(T::BlockNumber, EventIndex)` because if we used only just
       * the `EventIndex` then in case if the topic has the same contents on the next block
       * no notification will be triggered thus the event might be lost.
       **/
      eventTopics: AugmentedQuery<ApiType, (arg: Hash | string | Uint8Array) => Observable<Vec<ITuple<[BlockNumber, EventIndex]>>>>;
      /**
       * The execution phase of the block.
       **/
      executionPhase: AugmentedQuery<ApiType, () => Observable<Option<Phase>>>;
      /**
       * Total extrinsics count for the current block.
       **/
      extrinsicCount: AugmentedQuery<ApiType, () => Observable<Option<u32>>>;
      /**
       * Extrinsics data for the current block (maps an extrinsic's index to its data).
       **/
      extrinsicData: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Bytes>>;
      /**
       * Stores the `spec_version` and `spec_name` of when the last runtime upgrade happened.
       **/
      lastRuntimeUpgrade: AugmentedQuery<ApiType, () => Observable<Option<LastRuntimeUpgradeInfo>>>;
      /**
       * The current block number being processed. Set by `execute_block`.
       **/
      number: AugmentedQuery<ApiType, () => Observable<BlockNumber>>;
      /**
       * Hash of the previous block.
       **/
      parentHash: AugmentedQuery<ApiType, () => Observable<Hash>>;
      /**
       * True if we have upgraded so that AccountInfo contains two types of `RefCount`. False
       * (default) if not.
       **/
      upgradedToDualRefCount: AugmentedQuery<ApiType, () => Observable<bool>>;
      /**
       * True if we have upgraded so that `type RefCount` is `u32`. False (default) if not.
       **/
      upgradedToU32RefCount: AugmentedQuery<ApiType, () => Observable<bool>>;
    };
    tfgridModule: {
      certificationCodeId: AugmentedQuery<ApiType, () => Observable<u32>>;
      certificationCodeIdByName: AugmentedQuery<ApiType, (arg: Bytes | string | Uint8Array) => Observable<u32>>;
      certificationCodes: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<CertificationCodes>>;
      entities: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Entity>>;
      entityId: AugmentedQuery<ApiType, () => Observable<u32>>;
      entityIdByAccountId: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<u32>>;
      entityIdByName: AugmentedQuery<ApiType, (arg: Bytes | string | Uint8Array) => Observable<u32>>;
      farmId: AugmentedQuery<ApiType, () => Observable<u32>>;
      farmIdByName: AugmentedQuery<ApiType, (arg: Bytes | string | Uint8Array) => Observable<u32>>;
      farmingPolicies: AugmentedQuery<ApiType, () => Observable<Vec<FarmingPolicy>>>;
      farmingPolicyId: AugmentedQuery<ApiType, () => Observable<u32>>;
      farmingPolicyIDsByCertificationType: AugmentedQuery<ApiType, (arg: CertificationType | 'Diy' | 'Certified' | number | Uint8Array) => Observable<Vec<u32>>>;
      farmPayoutV2AddressByFarmId: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Bytes>>;
      farms: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Farm>>;
      nodeId: AugmentedQuery<ApiType, () => Observable<u32>>;
      nodeIdByTwinId: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<u32>>;
      nodes: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Node>>;
      /**
       * The current version of the pallet.
       **/
      palletVersion: AugmentedQuery<ApiType, () => Observable<StorageVersion>>;
      pricingPolicies: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<PricingPolicy>>;
      pricingPolicyId: AugmentedQuery<ApiType, () => Observable<u32>>;
      pricingPolicyIdByName: AugmentedQuery<ApiType, (arg: Bytes | string | Uint8Array) => Observable<u32>>;
      twinId: AugmentedQuery<ApiType, () => Observable<u32>>;
      twinIdByAccountId: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<u32>>;
      twins: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Twin>>;
      usersTermsAndConditions: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<Vec<TermsAndConditions>>>;
    };
    tfkvStore: {
      tfkvStore: AugmentedQueryDoubleMap<ApiType, (key1: AccountId | string | Uint8Array, key2: Bytes | string | Uint8Array) => Observable<Bytes>>;
    };
    tftBridgeModule: {
      burnTransactionId: AugmentedQuery<ApiType, () => Observable<u64>>;
      burnTransactions: AugmentedQuery<ApiType, (arg: u64 | AnyNumber | Uint8Array) => Observable<BurnTransaction>>;
      depositFee: AugmentedQuery<ApiType, () => Observable<u64>>;
      executedBurnTransactions: AugmentedQuery<ApiType, (arg: u64 | AnyNumber | Uint8Array) => Observable<BurnTransaction>>;
      executedMintTransactions: AugmentedQuery<ApiType, (arg: Bytes | string | Uint8Array) => Observable<MintTransaction>>;
      executedRefundTransactions: AugmentedQuery<ApiType, (arg: Bytes | string | Uint8Array) => Observable<RefundTransaction>>;
      feeAccount: AugmentedQuery<ApiType, () => Observable<AccountId>>;
      mintTransactions: AugmentedQuery<ApiType, (arg: Bytes | string | Uint8Array) => Observable<MintTransaction>>;
      refundTransactions: AugmentedQuery<ApiType, (arg: Bytes | string | Uint8Array) => Observable<RefundTransaction>>;
      validators: AugmentedQuery<ApiType, () => Observable<Vec<AccountId>>>;
      withdrawFee: AugmentedQuery<ApiType, () => Observable<u64>>;
    };
    tftPriceModule: {
      averageTftPrice: AugmentedQuery<ApiType, () => Observable<U16F16>>;
      bufferRange: AugmentedQuery<ApiType, () => Observable<ITuple<[BufferIndex, BufferIndex]>>>;
      lastBlockSet: AugmentedQuery<ApiType, () => Observable<BlockNumber>>;
      tftPrice: AugmentedQuery<ApiType, () => Observable<U16F16>>;
      tftPriceHistory: AugmentedQuery<ApiType, (arg: BufferIndex | null) => Observable<ValueStruct>>;
    };
    timestamp: {
      /**
       * Did the timestamp get updated in this block?
       **/
      didUpdate: AugmentedQuery<ApiType, () => Observable<bool>>;
      /**
       * Current time for the current block.
       **/
      now: AugmentedQuery<ApiType, () => Observable<Moment>>;
    };
    transactionPayment: {
      nextFeeMultiplier: AugmentedQuery<ApiType, () => Observable<Multiplier>>;
      storageVersion: AugmentedQuery<ApiType, () => Observable<Releases>>;
    };
    validatorSet: {
      flag: AugmentedQuery<ApiType, () => Observable<Option<bool>>>;
      validators: AugmentedQuery<ApiType, () => Observable<Option<Vec<AccountId>>>>;
    };
  }

  export interface QueryableStorage<ApiType extends ApiTypes> extends AugmentedQueries<ApiType> {
  }
}
