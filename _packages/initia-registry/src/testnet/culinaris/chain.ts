import { Chain } from "@initia/initia-registry-types";
const info: Chain = {
  $schema: "../../chain.schema.json",
  chain_name: "culinaris",
  chain_id: "culinaris-2",
  evm_chain_id: 2906125577721809,
  pretty_name: "Battle for Blockchain",
  status: "live",
  network_type: "testnet",
  bech32_prefix: "init",
  daemon_name: "minitiad",
  node_home: "$HOME/.minitia",
  key_algos: ["initia_ethsecp256k1", "secp256k1"],
  slip44: 60,
  website: "https://battleforblockchain.com",
  fees: {
    fee_tokens: [
      {
        denom:
          "l2/83db4af0de8965c851672915eaa857f0911385f7d71f9da1decb2504d3d3ffdd",
        fixed_min_gas_price: 0.015,
        low_gas_price: 0.015,
        average_gas_price: 0.015,
        high_gas_price: 0.04,
      },
    ],
  },
  codebase: {},
  apis: {
    rpc: [
      {
        address: "https://rpc.culinaris-2.initia.tech",
      },
    ],
    rest: [
      {
        address: "https://rest.culinaris-2.initia.tech",
      },
    ],
    grpc: [
      {
        address: "grpc.culinaris-2.initia.tech:443",
      },
    ],
    "json-rpc": [
      {
        address: "https://json-rpc.culinaris-2.initia.tech",
      },
    ],
    "json-rpc-websocket": [
      {
        address: "https://json-rpc-websocket.culinaris-2.initia.tech",
      },
    ],
  },
  explorers: [
    {
      kind: "initia scan",
      url: "https://scan.testnet.initia.xyz/culinaris-2",
      tx_page: "https://scan.testnet.initia.xyz/culinaris-2/txs/${txHash}",
      account_page:
        "https://scan.testnet.initia.xyz/culinaris-2/accounts/${accountAddress}",
    },
  ],
  images: [
    {
      png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/images/culinaris.png",
    },
  ],
  logo_URIs: {
    png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/images/culinaris.png",
  },
  metadata: {
    op_bridge_id: "314",
    op_denoms: ["uinit"],
    executor_uri:
      "https://maze-api-opinit-b53886e8-ebca-41a5-8dd7-64884b25fb2c.ane1-prod-nocsm.newmetric.xyz",
    ibc_channels: [
      {
        chain_id: "initiation-2",
        port_id: "transfer",
        channel_id: "channel-2",
        version: "ics20-1",
      },
    ],
    assetlist:
      "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/culinaris/assetlist.json",
    minitia: {
      type: "minievm",
      version: "v0.6.9",
    },
  },
};
export default info;
