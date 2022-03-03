/* eslint-disable @typescript-eslint/camelcase */

export default {
  types: {
    "Contract": {
      "version": " u32",
      "state": "ContractState",
      "contract_id": "u64",
      "twin_id": "u32",
      "contract_type": "ContractData"
    },
    "ContractData": {
      "_enum": {
        "NodeContract": "NodeContract",
        "NameContract": "NameContract"
      }
    },
    "NodeContract": {
      "node_id": "u32",
      "deployment_data": "Vec<u8>",
      "deployment_hash": "Vec<u8>",
      "public_ips": "u32",
      "public_ips_list": "Vec<PublicIP>"
    },
    "NameContract": {
      "name": "Vec<u8>"
    },
    "Consumption": {
      "contract_id": "u64",
      "timestamp": "u64",
      "cru": "u64",
      "sru": "u64",
      "hru": "u64",
      "mru": "u64",
      "nru": "u64",
    },
    "ContractBillingInformation": {
      "previous_nu_reported": "u64",
      "last_updated": "u64",
      "amount_unbilled": "u64"
    },
    "ContractState": {
      "_enum": {
        "Created": null,
        "Deleted": "Cause",
        "Killed": null
      }
    },
    "Cause": {
      "_enum": [
        "CanceledByUser",
        "OutOfFunds"
      ]
    },
    "DiscountLevel": {
      "_enum": [
        "None",
        "Default",
        "Bronze",
        "Silver",
        "Gold"
      ]
    },
    "ContractBill": {
      "contract_id": "u64",
      "timestamp": "u64",
      "discount_level": "DiscountLevel",
      "amount_billed": "u128"
    },
  }      
};
