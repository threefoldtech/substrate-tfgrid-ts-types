// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

import type { Bytes, Compact, Option, Vec, bool, u32, u64 } from '@polkadot/types';
import type { AnyNumber } from '@polkadot/types/types';
import type { MemberCount, ProposalIndex } from '@polkadot/types/interfaces/collective';
import type { Proposal } from '@polkadot/types/interfaces/democracy';
import type { Extrinsic } from '@polkadot/types/interfaces/extrinsics';
import type { GrandpaEquivocationProof, KeyOwnerProof } from '@polkadot/types/interfaces/grandpa';
import type { AccountId, Balance, BalanceOf, BlockNumber, Call, ChangesTrieConfiguration, Hash, Header, KeyValue, LookupSource, Moment, Perbill, Weight } from '@polkadot/types/interfaces/runtime';
import type { Period, Priority } from '@polkadot/types/interfaces/scheduler';
import type { Keys } from '@polkadot/types/interfaces/session';
import type { Key } from '@polkadot/types/interfaces/system';
import type { Consumption } from 'substrate-tfgrid-ts-types/src/smartContractModule';
import type { CertificationCodeType, CertificationType, Interface, Location, Policy, PublicConfig, PublicIP, Resources, StorageVersion, U16F16 } from 'substrate-tfgrid-ts-types/src/tfgridModule';
import type { ApiTypes, SubmittableExtrinsic } from '@polkadot/api/types';

declare module '@polkadot/api/types/submittable' {
  export interface AugmentedSubmittables<ApiType> {
    authorship: {
      /**
       * Provide a set of uncles.
       **/
      setUncles: AugmentedSubmittable<(newUncles: Vec<Header> | (Header | { parentHash?: any; number?: any; stateRoot?: any; extrinsicsRoot?: any; digest?: any } | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>>;
    };
    balances: {
      /**
       * Exactly as `transfer`, except the origin must be root and the source account may be
       * specified.
       * # <weight>
       * - Same as transfer, but additional read and write because the source account is
       * not assumed to be in the overlay.
       * # </weight>
       **/
      forceTransfer: AugmentedSubmittable<(source: LookupSource | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, dest: LookupSource | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, value: Compact<Balance> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Set the balances of a given account.
       * 
       * This will alter `FreeBalance` and `ReservedBalance` in storage. it will
       * also decrease the total issuance of the system (`TotalIssuance`).
       * If the new free or reserved balance is below the existential deposit,
       * it will reset the account nonce (`frame_system::AccountNonce`).
       * 
       * The dispatch origin for this call is `root`.
       * 
       * # <weight>
       * - Independent of the arguments.
       * - Contains a limited number of reads and writes.
       * ---------------------
       * - Base Weight:
       * - Creating: 27.56 µs
       * - Killing: 35.11 µs
       * - DB Weight: 1 Read, 1 Write to `who`
       * # </weight>
       **/
      setBalance: AugmentedSubmittable<(who: LookupSource | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, newFree: Compact<Balance> | AnyNumber | Uint8Array, newReserved: Compact<Balance> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Transfer some liquid free balance to another account.
       * 
       * `transfer` will set the `FreeBalance` of the sender and receiver.
       * It will decrease the total issuance of the system by the `TransferFee`.
       * If the sender's account is below the existential deposit as a result
       * of the transfer, the account will be reaped.
       * 
       * The dispatch origin for this call must be `Signed` by the transactor.
       * 
       * # <weight>
       * - Dependent on arguments but not critical, given proper implementations for
       * input config types. See related functions below.
       * - It contains a limited number of reads and writes internally and no complex computation.
       * 
       * Related functions:
       * 
       * - `ensure_can_withdraw` is always called internally but has a bounded complexity.
       * - Transferring balances to accounts that did not exist before will cause
       * `T::OnNewAccount::on_new_account` to be called.
       * - Removing enough funds from an account will trigger `T::DustRemoval::on_unbalanced`.
       * - `transfer_keep_alive` works the same way as `transfer`, but has an additional
       * check that the transfer will not kill the origin account.
       * ---------------------------------
       * - Base Weight: 73.64 µs, worst case scenario (account created, account removed)
       * - DB Weight: 1 Read and 1 Write to destination account
       * - Origin account is already in memory, so no DB operations for them.
       * # </weight>
       **/
      transfer: AugmentedSubmittable<(dest: LookupSource | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, value: Compact<Balance> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Same as the [`transfer`] call, but with a check that the transfer will not kill the
       * origin account.
       * 
       * 99% of the time you want [`transfer`] instead.
       * 
       * [`transfer`]: struct.Pallet.html#method.transfer
       * # <weight>
       * - Cheaper than transfer because account cannot be killed.
       * - Base Weight: 51.4 µs
       * - DB Weight: 1 Read and 1 Write to dest (sender is in overlay already)
       * #</weight>
       **/
      transferKeepAlive: AugmentedSubmittable<(dest: LookupSource | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, value: Compact<Balance> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>>;
    };
    burningModule: {
      burnTft: AugmentedSubmittable<(amount: BalanceOf | AnyNumber | Uint8Array, message: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
    };
    council: {
      /**
       * Close a vote that is either approved, disapproved or whose voting period has ended.
       * 
       * May be called by any signed account in order to finish voting and close the proposal.
       * 
       * If called before the end of the voting period it will only close the vote if it is
       * has enough votes to be approved or disapproved.
       * 
       * If called after the end of the voting period abstentions are counted as rejections
       * unless there is a prime member set and the prime member cast an approval.
       * 
       * If the close operation completes successfully with disapproval, the transaction fee will
       * be waived. Otherwise execution of the approved operation will be charged to the caller.
       * 
       * + `proposal_weight_bound`: The maximum amount of weight consumed by executing the closed proposal.
       * + `length_bound`: The upper bound for the length of the proposal in storage. Checked via
       * `storage::read` so it is `size_of::<u32>() == 4` larger than the pure length.
       * 
       * # <weight>
       * ## Weight
       * - `O(B + M + P1 + P2)` where:
       * - `B` is `proposal` size in bytes (length-fee-bounded)
       * - `M` is members-count (code- and governance-bounded)
       * - `P1` is the complexity of `proposal` preimage.
       * - `P2` is proposal-count (code-bounded)
       * - DB:
       * - 2 storage reads (`Members`: codec `O(M)`, `Prime`: codec `O(1)`)
       * - 3 mutations (`Voting`: codec `O(M)`, `ProposalOf`: codec `O(B)`, `Proposals`: codec `O(P2)`)
       * - any mutations done while executing `proposal` (`P1`)
       * - up to 3 events
       * # </weight>
       **/
      close: AugmentedSubmittable<(proposalHash: Hash | string | Uint8Array, index: Compact<ProposalIndex> | AnyNumber | Uint8Array, proposalWeightBound: Compact<Weight> | AnyNumber | Uint8Array, lengthBound: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Disapprove a proposal, close, and remove it from the system, regardless of its current state.
       * 
       * Must be called by the Root origin.
       * 
       * Parameters:
       * * `proposal_hash`: The hash of the proposal that should be disapproved.
       * 
       * # <weight>
       * Complexity: O(P) where P is the number of max proposals
       * DB Weight:
       * * Reads: Proposals
       * * Writes: Voting, Proposals, ProposalOf
       * # </weight>
       **/
      disapproveProposal: AugmentedSubmittable<(proposalHash: Hash | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Dispatch a proposal from a member using the `Member` origin.
       * 
       * Origin must be a member of the collective.
       * 
       * # <weight>
       * ## Weight
       * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching `proposal`
       * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
       * - 1 event
       * # </weight>
       **/
      execute: AugmentedSubmittable<(proposal: Proposal | { callIndex?: any; args?: any } | string | Uint8Array, lengthBound: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Add a new proposal to either be voted on or executed directly.
       * 
       * Requires the sender to be member.
       * 
       * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
       * or put up for voting.
       * 
       * # <weight>
       * ## Weight
       * - `O(B + M + P1)` or `O(B + M + P2)` where:
       * - `B` is `proposal` size in bytes (length-fee-bounded)
       * - `M` is members-count (code- and governance-bounded)
       * - branching is influenced by `threshold` where:
       * - `P1` is proposal execution complexity (`threshold < 2`)
       * - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
       * - DB:
       * - 1 storage read `is_member` (codec `O(M)`)
       * - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
       * - DB accesses influenced by `threshold`:
       * - EITHER storage accesses done by `proposal` (`threshold < 2`)
       * - OR proposal insertion (`threshold <= 2`)
       * - 1 storage mutation `Proposals` (codec `O(P2)`)
       * - 1 storage mutation `ProposalCount` (codec `O(1)`)
       * - 1 storage write `ProposalOf` (codec `O(B)`)
       * - 1 storage write `Voting` (codec `O(M)`)
       * - 1 event
       * # </weight>
       **/
      propose: AugmentedSubmittable<(threshold: Compact<MemberCount> | AnyNumber | Uint8Array, proposal: Proposal | { callIndex?: any; args?: any } | string | Uint8Array, lengthBound: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Set the collective's membership.
       * 
       * - `new_members`: The new member list. Be nice to the chain and provide it sorted.
       * - `prime`: The prime member whose vote sets the default.
       * - `old_count`: The upper bound for the previous number of members in storage.
       * Used for weight estimation.
       * 
       * Requires root origin.
       * 
       * NOTE: Does not enforce the expected `MaxMembers` limit on the amount of members, but
       * the weight estimations rely on it to estimate dispatchable weight.
       * 
       * # <weight>
       * ## Weight
       * - `O(MP + N)` where:
       * - `M` old-members-count (code- and governance-bounded)
       * - `N` new-members-count (code- and governance-bounded)
       * - `P` proposals-count (code-bounded)
       * - DB:
       * - 1 storage mutation (codec `O(M)` read, `O(N)` write) for reading and writing the members
       * - 1 storage read (codec `O(P)`) for reading the proposals
       * - `P` storage mutations (codec `O(M)`) for updating the votes for each proposal
       * - 1 storage write (codec `O(1)`) for deleting the old `prime` and setting the new one
       * # </weight>
       **/
      setMembers: AugmentedSubmittable<(newMembers: Vec<AccountId> | (AccountId | string | Uint8Array)[], prime: Option<AccountId> | null | object | string | Uint8Array, oldCount: MemberCount | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Add an aye or nay vote for the sender to the given proposal.
       * 
       * Requires the sender to be a member.
       * 
       * Transaction fees will be waived if the member is voting on any particular proposal
       * for the first time and the call is successful. Subsequent vote changes will charge a fee.
       * # <weight>
       * ## Weight
       * - `O(M)` where `M` is members-count (code- and governance-bounded)
       * - DB:
       * - 1 storage read `Members` (codec `O(M)`)
       * - 1 storage mutation `Voting` (codec `O(M)`)
       * - 1 event
       * # </weight>
       **/
      vote: AugmentedSubmittable<(proposal: Hash | string | Uint8Array, index: Compact<ProposalIndex> | AnyNumber | Uint8Array, approve: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>>;
    };
    councilMembership: {
      /**
       * Add a member `who` to the set.
       * 
       * May only be called from `T::AddOrigin`.
       **/
      addMember: AugmentedSubmittable<(who: AccountId | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Swap out the sending member for some other key `new`.
       * 
       * May only be called from `Signed` origin of a current member.
       * 
       * Prime membership is passed from the origin account to `new`, if extant.
       **/
      changeKey: AugmentedSubmittable<(updated: AccountId | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Remove the prime member if it exists.
       * 
       * May only be called from `T::PrimeOrigin`.
       **/
      clearPrime: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>>;
      /**
       * Remove a member `who` from the set.
       * 
       * May only be called from `T::RemoveOrigin`.
       **/
      removeMember: AugmentedSubmittable<(who: AccountId | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Change the membership to a new set, disregarding the existing membership. Be nice and
       * pass `members` pre-sorted.
       * 
       * May only be called from `T::ResetOrigin`.
       **/
      resetMembers: AugmentedSubmittable<(members: Vec<AccountId> | (AccountId | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>>;
      /**
       * Set the prime member. Must be a current member.
       * 
       * May only be called from `T::PrimeOrigin`.
       **/
      setPrime: AugmentedSubmittable<(who: AccountId | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Swap out one member `remove` for another `add`.
       * 
       * May only be called from `T::SwapOrigin`.
       * 
       * Prime membership is *not* passed from `remove` to `add`, if extant.
       **/
      swapMember: AugmentedSubmittable<(remove: AccountId | string | Uint8Array, add: AccountId | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
    };
    grandpa: {
      /**
       * Note that the current authority set of the GRANDPA finality gadget has
       * stalled. This will trigger a forced authority set change at the beginning
       * of the next session, to be enacted `delay` blocks after that. The delay
       * should be high enough to safely assume that the block signalling the
       * forced change will not be re-orged (e.g. 1000 blocks). The GRANDPA voters
       * will start the new authority set using the given finalized block as base.
       * Only callable by root.
       **/
      noteStalled: AugmentedSubmittable<(delay: BlockNumber | AnyNumber | Uint8Array, bestFinalizedBlockNumber: BlockNumber | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Report voter equivocation/misbehavior. This method will verify the
       * equivocation proof and validate the given key ownership proof
       * against the extracted offender. If both are valid, the offence
       * will be reported.
       **/
      reportEquivocation: AugmentedSubmittable<(equivocationProof: GrandpaEquivocationProof | { setId?: any; equivocation?: any } | string | Uint8Array, keyOwnerProof: KeyOwnerProof | { session?: any; trieNodes?: any; validatorCount?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Report voter equivocation/misbehavior. This method will verify the
       * equivocation proof and validate the given key ownership proof
       * against the extracted offender. If both are valid, the offence
       * will be reported.
       * 
       * This extrinsic must be called unsigned and it is expected that only
       * block authors will call it (validated in `ValidateUnsigned`), as such
       * if the block author is defined it will be defined as the equivocation
       * reporter.
       **/
      reportEquivocationUnsigned: AugmentedSubmittable<(equivocationProof: GrandpaEquivocationProof | { setId?: any; equivocation?: any } | string | Uint8Array, keyOwnerProof: KeyOwnerProof | { session?: any; trieNodes?: any; validatorCount?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
    };
    runtimeUpgrade: {
      setCode: AugmentedSubmittable<(code: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
    };
    scheduler: {
      /**
       * Cancel an anonymously scheduled task.
       * 
       * # <weight>
       * - S = Number of already scheduled calls
       * - Base Weight: 22.15 + 2.869 * S µs
       * - DB Weight:
       * - Read: Agenda
       * - Write: Agenda, Lookup
       * - Will use base weight of 100 which should be good for up to 30 scheduled calls
       * # </weight>
       **/
      cancel: AugmentedSubmittable<(when: BlockNumber | AnyNumber | Uint8Array, index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Cancel a named scheduled task.
       * 
       * # <weight>
       * - S = Number of already scheduled calls
       * - Base Weight: 24.91 + 2.907 * S µs
       * - DB Weight:
       * - Read: Agenda, Lookup
       * - Write: Agenda, Lookup
       * - Will use base weight of 100 which should be good for up to 30 scheduled calls
       * # </weight>
       **/
      cancelNamed: AugmentedSubmittable<(id: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Anonymously schedule a task.
       * 
       * # <weight>
       * - S = Number of already scheduled calls
       * - Base Weight: 22.29 + .126 * S µs
       * - DB Weight:
       * - Read: Agenda
       * - Write: Agenda
       * - Will use base weight of 25 which should be good for up to 30 scheduled calls
       * # </weight>
       **/
      schedule: AugmentedSubmittable<(when: BlockNumber | AnyNumber | Uint8Array, maybePeriodic: Option<Period> | null | object | string | Uint8Array, priority: Priority | AnyNumber | Uint8Array, call: Call | { callIndex?: any; args?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Anonymously schedule a task after a delay.
       * 
       * # <weight>
       * Same as [`schedule`].
       * # </weight>
       **/
      scheduleAfter: AugmentedSubmittable<(after: BlockNumber | AnyNumber | Uint8Array, maybePeriodic: Option<Period> | null | object | string | Uint8Array, priority: Priority | AnyNumber | Uint8Array, call: Call | { callIndex?: any; args?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Schedule a named task.
       * 
       * # <weight>
       * - S = Number of already scheduled calls
       * - Base Weight: 29.6 + .159 * S µs
       * - DB Weight:
       * - Read: Agenda, Lookup
       * - Write: Agenda, Lookup
       * - Will use base weight of 35 which should be good for more than 30 scheduled calls
       * # </weight>
       **/
      scheduleNamed: AugmentedSubmittable<(id: Bytes | string | Uint8Array, when: BlockNumber | AnyNumber | Uint8Array, maybePeriodic: Option<Period> | null | object | string | Uint8Array, priority: Priority | AnyNumber | Uint8Array, call: Call | { callIndex?: any; args?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Schedule a named task after a delay.
       * 
       * # <weight>
       * Same as [`schedule_named`].
       * # </weight>
       **/
      scheduleNamedAfter: AugmentedSubmittable<(id: Bytes | string | Uint8Array, after: BlockNumber | AnyNumber | Uint8Array, maybePeriodic: Option<Period> | null | object | string | Uint8Array, priority: Priority | AnyNumber | Uint8Array, call: Call | { callIndex?: any; args?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
    };
    session: {
      /**
       * Removes any session key(s) of the function caller.
       * This doesn't take effect until the next session.
       * 
       * The dispatch origin of this function must be signed.
       * 
       * # <weight>
       * - Complexity: `O(1)` in number of key types.
       * Actual cost depends on the number of length of `T::Keys::key_ids()` which is fixed.
       * - DbReads: `T::ValidatorIdOf`, `NextKeys`, `origin account`
       * - DbWrites: `NextKeys`, `origin account`
       * - DbWrites per key id: `KeyOwnder`
       * # </weight>
       **/
      purgeKeys: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>>;
      /**
       * Sets the session key(s) of the function caller to `keys`.
       * Allows an account to set its session key prior to becoming a validator.
       * This doesn't take effect until the next session.
       * 
       * The dispatch origin of this function must be signed.
       * 
       * # <weight>
       * - Complexity: `O(1)`
       * Actual cost depends on the number of length of `T::Keys::key_ids()` which is fixed.
       * - DbReads: `origin account`, `T::ValidatorIdOf`, `NextKeys`
       * - DbWrites: `origin account`, `NextKeys`
       * - DbReads per key id: `KeyOwner`
       * - DbWrites per key id: `KeyOwner`
       * # </weight>
       **/
      setKeys: AugmentedSubmittable<(keys: Keys, proof: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
    };
    smartContractModule: {
      addReports: AugmentedSubmittable<(reports: Vec<Consumption> | (Consumption | { contract_id?: any; timestamp?: any; cru?: any; sru?: any; hru?: any; mru?: any; nru?: any } | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>>;
      cancelContract: AugmentedSubmittable<(contractId: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      createNameContract: AugmentedSubmittable<(name: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      createNodeContract: AugmentedSubmittable<(nodeId: u32 | AnyNumber | Uint8Array, data: Bytes | string | Uint8Array, deploymentHash: Bytes | string | Uint8Array, publicIps: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      updateNodeContract: AugmentedSubmittable<(contractId: u64 | AnyNumber | Uint8Array, data: Bytes | string | Uint8Array, deploymentHash: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
    };
    sudo: {
      /**
       * Authenticates the current sudo key and sets the given AccountId (`new`) as the new sudo key.
       * 
       * The dispatch origin for this call must be _Signed_.
       * 
       * # <weight>
       * - O(1).
       * - Limited storage reads.
       * - One DB change.
       * # </weight>
       **/
      setKey: AugmentedSubmittable<(updated: LookupSource | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Authenticates the sudo key and dispatches a function call with `Root` origin.
       * 
       * The dispatch origin for this call must be _Signed_.
       * 
       * # <weight>
       * - O(1).
       * - Limited storage reads.
       * - One DB write (event).
       * - Weight of derivative `call` execution + 10,000.
       * # </weight>
       **/
      sudo: AugmentedSubmittable<(call: Call | { callIndex?: any; args?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Authenticates the sudo key and dispatches a function call with `Signed` origin from
       * a given account.
       * 
       * The dispatch origin for this call must be _Signed_.
       * 
       * # <weight>
       * - O(1).
       * - Limited storage reads.
       * - One DB write (event).
       * - Weight of derivative `call` execution + 10,000.
       * # </weight>
       **/
      sudoAs: AugmentedSubmittable<(who: LookupSource | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, call: Call | { callIndex?: any; args?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Authenticates the sudo key and dispatches a function call with `Root` origin.
       * This function does not check the weight of the call, and instead allows the
       * Sudo user to specify the weight of the call.
       * 
       * The dispatch origin for this call must be _Signed_.
       * 
       * # <weight>
       * - O(1).
       * - The weight of this call is defined by the caller.
       * # </weight>
       **/
      sudoUncheckedWeight: AugmentedSubmittable<(call: Call | { callIndex?: any; args?: any } | string | Uint8Array, weight: Weight | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>>;
    };
    system: {
      /**
       * A dispatch that will fill the block weight up to the given ratio.
       **/
      fillBlock: AugmentedSubmittable<(ratio: Perbill | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Kill all storage items with a key that starts with the given prefix.
       * 
       * **NOTE:** We rely on the Root origin to provide us the number of subkeys under
       * the prefix we are removing to accurately calculate the weight of this function.
       * 
       * # <weight>
       * - `O(P)` where `P` amount of keys with prefix `prefix`
       * - `P` storage deletions.
       * - Base Weight: 0.834 * P µs
       * - Writes: Number of subkeys + 1
       * # </weight>
       **/
      killPrefix: AugmentedSubmittable<(prefix: Key | string | Uint8Array, subkeys: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Kill some items from storage.
       * 
       * # <weight>
       * - `O(IK)` where `I` length of `keys` and `K` length of one key
       * - `I` storage deletions.
       * - Base Weight: .378 * i µs
       * - Writes: Number of items
       * # </weight>
       **/
      killStorage: AugmentedSubmittable<(keys: Vec<Key> | (Key | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>>;
      /**
       * Make some on-chain remark.
       * 
       * # <weight>
       * - `O(1)`
       * - Base Weight: 0.665 µs, independent of remark length.
       * - No DB operations.
       * # </weight>
       **/
      remark: AugmentedSubmittable<(remark: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Set the new changes trie configuration.
       * 
       * # <weight>
       * - `O(1)`
       * - 1 storage write or delete (codec `O(1)`).
       * - 1 call to `deposit_log`: Uses `append` API, so O(1)
       * - Base Weight: 7.218 µs
       * - DB Weight:
       * - Writes: Changes Trie, System Digest
       * # </weight>
       **/
      setChangesTrieConfig: AugmentedSubmittable<(changesTrieConfig: Option<ChangesTrieConfiguration> | null | object | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Set the new runtime code.
       * 
       * # <weight>
       * - `O(C + S)` where `C` length of `code` and `S` complexity of `can_set_code`
       * - 1 storage write (codec `O(C)`).
       * - 1 call to `can_set_code`: `O(S)` (calls `sp_io::misc::runtime_version` which is expensive).
       * - 1 event.
       * The weight of this function is dependent on the runtime, but generally this is very expensive.
       * We will treat this as a full block.
       * # </weight>
       **/
      setCode: AugmentedSubmittable<(code: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Set the new runtime code without doing any checks of the given `code`.
       * 
       * # <weight>
       * - `O(C)` where `C` length of `code`
       * - 1 storage write (codec `O(C)`).
       * - 1 event.
       * The weight of this function is dependent on the runtime. We will treat this as a full block.
       * # </weight>
       **/
      setCodeWithoutChecks: AugmentedSubmittable<(code: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Set the number of pages in the WebAssembly environment's heap.
       * 
       * # <weight>
       * - `O(1)`
       * - 1 storage write.
       * - Base Weight: 1.405 µs
       * - 1 write to HEAP_PAGES
       * # </weight>
       **/
      setHeapPages: AugmentedSubmittable<(pages: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Set some items of storage.
       * 
       * # <weight>
       * - `O(I)` where `I` length of `items`
       * - `I` storage writes (`O(1)`).
       * - Base Weight: 0.568 * i µs
       * - Writes: Number of items
       * # </weight>
       **/
      setStorage: AugmentedSubmittable<(items: Vec<KeyValue> | (KeyValue)[]) => SubmittableExtrinsic<ApiType>>;
    };
    tfgridModule: {
      addFarmIp: AugmentedSubmittable<(id: u32 | AnyNumber | Uint8Array, ip: Bytes | string | Uint8Array, gateway: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      addNodePublicConfig: AugmentedSubmittable<(farmId: u32 | AnyNumber | Uint8Array, nodeId: u32 | AnyNumber | Uint8Array, publicConfig: PublicConfig | { ipv4?: any; ipv6?: any; gw4?: any; gw6?: any; domain?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      addStellarPayoutV2Address: AugmentedSubmittable<(farmId: u32 | AnyNumber | Uint8Array, stellarAddress: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      addTwinEntity: AugmentedSubmittable<(twinId: u32 | AnyNumber | Uint8Array, entityId: u32 | AnyNumber | Uint8Array, signature: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      createCertificationCode: AugmentedSubmittable<(name: Bytes | string | Uint8Array, description: Bytes | string | Uint8Array, certificationCodeType: CertificationCodeType | 'Farm' | 'Entity' | number | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      createEntity: AugmentedSubmittable<(target: AccountId | string | Uint8Array, name: Bytes | string | Uint8Array, country: Bytes | string | Uint8Array, city: Bytes | string | Uint8Array, signature: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      createFarm: AugmentedSubmittable<(name: Bytes | string | Uint8Array, publicIps: Vec<PublicIP> | (PublicIP | { ip?: any; gateway?: any; contract_id?: any } | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>>;
      createFarmingPolicy: AugmentedSubmittable<(name: Bytes | string | Uint8Array, su: u32 | AnyNumber | Uint8Array, cu: u32 | AnyNumber | Uint8Array, nu: u32 | AnyNumber | Uint8Array, ipv4: u32 | AnyNumber | Uint8Array, certificationType: CertificationType | 'Diy' | 'Certified' | number | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      createNode: AugmentedSubmittable<(farmId: u32 | AnyNumber | Uint8Array, resources: Resources | { hru?: any; sru?: any; cru?: any; mru?: any } | string | Uint8Array, location: Location | { longitude?: any; latitude?: any } | string | Uint8Array, country: Bytes | string | Uint8Array, city: Bytes | string | Uint8Array, interfaces: Vec<Interface> | (Interface | { name?: any; mac?: any; ips?: any } | string | Uint8Array)[], secureBoot: bool | boolean | Uint8Array, virtualized: bool | boolean | Uint8Array, serialNumber: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      createPricingPolicy: AugmentedSubmittable<(name: Bytes | string | Uint8Array, su: Policy | { value?: any; unit?: any } | string | Uint8Array, cu: Policy | { value?: any; unit?: any } | string | Uint8Array, nu: Policy | { value?: any; unit?: any } | string | Uint8Array, ipu: Policy | { value?: any; unit?: any } | string | Uint8Array, uniqueName: Policy | { value?: any; unit?: any } | string | Uint8Array, domainName: Policy | { value?: any; unit?: any } | string | Uint8Array, foundationAccount: AccountId | string | Uint8Array, certifiedSalesAccount: AccountId | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      createTwin: AugmentedSubmittable<(ip: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      deleteEntity: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>>;
      deleteFarm: AugmentedSubmittable<(id: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      deleteNode: AugmentedSubmittable<(id: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      deleteNodeFarm: AugmentedSubmittable<(nodeId: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      deleteTwin: AugmentedSubmittable<(twinId: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      deleteTwinEntity: AugmentedSubmittable<(twinId: u32 | AnyNumber | Uint8Array, entityId: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      removeFarmIp: AugmentedSubmittable<(id: u32 | AnyNumber | Uint8Array, ip: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      reportUptime: AugmentedSubmittable<(uptime: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      setFarmCertification: AugmentedSubmittable<(farmId: u32 | AnyNumber | Uint8Array, certificationType: CertificationType | 'Diy' | 'Certified' | number | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      setNodeCertification: AugmentedSubmittable<(nodeId: u32 | AnyNumber | Uint8Array, certificationType: CertificationType | 'Diy' | 'Certified' | number | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      setStorageVersion: AugmentedSubmittable<(version: StorageVersion | 'V1Struct' | 'V2Struct' | number | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      updateEntity: AugmentedSubmittable<(name: Bytes | string | Uint8Array, country: Bytes | string | Uint8Array, city: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      updateFarm: AugmentedSubmittable<(id: u32 | AnyNumber | Uint8Array, name: Bytes | string | Uint8Array, pricingPolicyId: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      updateNode: AugmentedSubmittable<(nodeId: u32 | AnyNumber | Uint8Array, farmId: u32 | AnyNumber | Uint8Array, resources: Resources | { hru?: any; sru?: any; cru?: any; mru?: any } | string | Uint8Array, location: Location | { longitude?: any; latitude?: any } | string | Uint8Array, country: Bytes | string | Uint8Array, city: Bytes | string | Uint8Array, interfaces: Vec<Interface> | (Interface | { name?: any; mac?: any; ips?: any } | string | Uint8Array)[], secureBoot: bool | boolean | Uint8Array, virtualized: bool | boolean | Uint8Array, serialNumber: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      updatePricingPolicy: AugmentedSubmittable<(id: u32 | AnyNumber | Uint8Array, name: Bytes | string | Uint8Array, su: Policy | { value?: any; unit?: any } | string | Uint8Array, cu: Policy | { value?: any; unit?: any } | string | Uint8Array, nu: Policy | { value?: any; unit?: any } | string | Uint8Array, ipu: Policy | { value?: any; unit?: any } | string | Uint8Array, uniqueName: Policy | { value?: any; unit?: any } | string | Uint8Array, domainName: Policy | { value?: any; unit?: any } | string | Uint8Array, foundationAccount: AccountId | string | Uint8Array, certifiedSalesAccount: AccountId | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      updateTwin: AugmentedSubmittable<(ip: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      userAcceptTc: AugmentedSubmittable<(documentLink: Bytes | string | Uint8Array, documentHash: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
    };
    tfkvStore: {
      /**
       * Read the value stored at a particular key, while removing it from the map.
       * Also emit the read value in an event
       **/
      delete: AugmentedSubmittable<(key: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Set the value stored at a particular key
       **/
      set: AugmentedSubmittable<(key: Bytes | string | Uint8Array, value: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
    };
    tftBridgeModule: {
      addBridgeValidator: AugmentedSubmittable<(target: AccountId | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      createRefundTransactionOrAddSig: AugmentedSubmittable<(txHash: Bytes | string | Uint8Array, target: Bytes | string | Uint8Array, amount: u64 | AnyNumber | Uint8Array, signature: Bytes | string | Uint8Array, stellarPubKey: Bytes | string | Uint8Array, sequenceNumber: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      proposeBurnTransactionOrAddSig: AugmentedSubmittable<(transactionId: u64 | AnyNumber | Uint8Array, target: Bytes | string | Uint8Array, amount: u64 | AnyNumber | Uint8Array, signature: Bytes | string | Uint8Array, stellarPubKey: Bytes | string | Uint8Array, sequenceNumber: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      proposeOrVoteMintTransaction: AugmentedSubmittable<(transaction: Bytes | string | Uint8Array, target: AccountId | string | Uint8Array, amount: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      removeBridgeValidator: AugmentedSubmittable<(target: AccountId | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      setBurnTransactionExecuted: AugmentedSubmittable<(transactionId: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      setDepositFee: AugmentedSubmittable<(amount: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      setFeeAccount: AugmentedSubmittable<(target: AccountId | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      setRefundTransactionExecuted: AugmentedSubmittable<(txHash: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      setWithdrawFee: AugmentedSubmittable<(amount: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      swapToStellar: AugmentedSubmittable<(targetStellarAddress: Bytes | string | Uint8Array, amount: BalanceOf | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>>;
    };
    tftPriceModule: {
      setPrices: AugmentedSubmittable<(price: U16F16 | string | Uint8Array, blockNumber: BlockNumber | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>>;
    };
    timestamp: {
      /**
       * Set the current time.
       * 
       * This call should be invoked exactly once per block. It will panic at the finalization
       * phase, if this call hasn't been invoked by that time.
       * 
       * The timestamp should be greater than the previous one by the amount specified by
       * `MinimumPeriod`.
       * 
       * The dispatch origin for this call must be `Inherent`.
       * 
       * # <weight>
       * - `O(1)` (Note that implementations of `OnTimestampSet` must also be `O(1)`)
       * - 1 storage read and 1 storage mutation (codec `O(1)`). (because of `DidUpdate::take` in `on_finalize`)
       * - 1 event handler `on_timestamp_set`. Must be `O(1)`.
       * # </weight>
       **/
      set: AugmentedSubmittable<(now: Compact<Moment> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>>;
    };
    validator: {
      /**
       * Start participating in consensus
       * Will activate the Validator node account on consensus level
       * A user can only call this if his request to be a validator is approved by the council
       * Should be called when his node is synced and ready to start validating
       **/
      activateValidatorNode: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>>;
      /**
       * Approve validator (council)
       * Approves a validator to be added as a council member and
       * to participate in consensus
       **/
      approveValidator: AugmentedSubmittable<(validatorAccount: AccountId | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Bond an account to to a validator account
       * Just proves that the stash account is indeed under control of the validator account
       **/
      bond: AugmentedSubmittable<(validator: LookupSource | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Change validator node account
       * In case the Validator wishes to change his validator node account
       * he can call this method with the new node validator account
       * this new account will be added as a new consensus validator if he is validating already
       **/
      changeValidatorNodeAccount: AugmentedSubmittable<(newNodeValidatorAccount: AccountId | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Create a request to become a validator
       * Validator account (signer): the account of the validator (this account will be added to the council)
       * Validator node account: the account that will validate on consensus layer
       * Stash account: the "bank" account of the validator (where rewards should be sent to) the stash should be bonded to a validator
       * Description: why someone wants to become a validator
       * Tf Connect ID: the threefold connect ID of the persion who wants to become a validator
       * Info: some public info about the validator (website link, blog link, ..)
       * A user can only have 1 validator request at a time
       **/
      createValidator: AugmentedSubmittable<(validatorNodeAccount: AccountId | string | Uint8Array, stashAccount: AccountId | string | Uint8Array, description: Bytes | string | Uint8Array, tfConnectId: Bytes | string | Uint8Array, info: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      /**
       * Remove validator
       * Removes a validator from:
       * 1. Council
       * 2. Storage
       * 3. Consensus
       * Can only be called by the user or the council
       **/
      removeValidator: AugmentedSubmittable<(validator: AccountId | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
    };
    validatorSet: {
      /**
       * Add a new validator using root/sudo privileges.
       * 
       * New validator's session keys should be set in session module before calling this.
       **/
      addValidator: AugmentedSubmittable<(validatorId: AccountId | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
      forceChangeSession: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>>;
      /**
       * Remove a validator using root/sudo privileges.
       **/
      removeValidator: AugmentedSubmittable<(validatorId: AccountId | string | Uint8Array) => SubmittableExtrinsic<ApiType>>;
    };
  }

  export interface SubmittableExtrinsics<ApiType extends ApiTypes> extends AugmentedSubmittables<ApiType> {
    (extrinsic: Call | Extrinsic | Uint8Array | string): SubmittableExtrinsic<ApiType>;
  }
}
