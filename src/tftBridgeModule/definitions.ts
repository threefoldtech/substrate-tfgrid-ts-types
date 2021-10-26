/* eslint-disable @typescript-eslint/camelcase */

export default {
  types: {
    "MintTransaction": {
      "amount": "u64",
      "target": "AccountId",
      "block": "BlockNumber",
      "votes": "u32"
    },
    "BurnTransaction": {
      "block": "BlockNumber",
      "amount": "u64",
      "target": "Vec<u8>",
      "signatures": "Vec<StellarSignature>",
      "sequence_number": "u64"
    },
    "RefundTransaction": {
      "block": "BlockNumber",
      "amount": "u64",
      "target": "Vec<u8>",
      "tx_hash": "Vec<u8>",
      "signatures": "Vec<StellarSignature>",
      "sequence_number": "u64"
    },
    "StellarSignature": {
      "signature": "Vec<u8>",
      "stellar_pubkey": "Vec<u8>"
    },
    "Burn": {
      "target": "AccountId",
      "amount": "BalanceOf",
      "block": "BlockNumber",
      "message": "Vec<u8>"
    }
  }      
};
