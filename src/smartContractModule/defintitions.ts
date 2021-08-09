/* eslint-disable @typescript-eslint/camelcase */

export default {
  types: {
    "NodeContract": {
      "version": "u32",
      "contract_id": "u64",
      "twin_id": "u32",
      "node_id": "u32",
      "deploy_mentdata": "Vec<u8>",
      "deployment_hash": "Vec<u8>",
      "public_ips": "u32",
      "state": "ContractState",
      "public_ips_list": "Vec<PublicIP>"
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
      "_enum": [
        "Created",
        "Deleted",
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
  }      
};
