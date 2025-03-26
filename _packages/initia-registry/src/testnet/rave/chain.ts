import { Chain } from "@initia/initia-registry-types";
const info: Chain = {
  $schema: "../../chain.schema.json",
  chain_name: "rave",
  pretty_name: "Rave",
  chain_id: "rave-test4",
  evm_chain_id: 1858718473518386,
  bech32_prefix: "init",
  network_type: "testnet",
  apis: {
    rpc: [
      {
        address: "https://rpc-test-initia.rave.trade",
      },
    ],
    rest: [
      {
        address: "https://rest-test-initia.rave.trade",
      },
    ],
    "json-rpc": [
      {
        address: "https://json-rpc-test-initia.rave.trade",
      },
    ],
    "json-rpc-websocket": [
      {
        address: "wss://json-rpc-ws-test-initia.rave.trade",
      },
    ],
  },
  key_algos: ["secp256k1"],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: "evm/Bdb128Cf29d40738875297E90aa42772D354c137",
        fixed_min_gas_price: 1000000000,
        low_gas_price: 1000000000,
        average_gas_price: 1500000000,
        high_gas_price: 2000000000,
      },
    ],
  },
  images: [
    {
      png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/images/rave.png",
    },
  ],
  logo_URIs: {
    png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/images/rave.png",
  },
  metadata: {
    op_bridge_id: "610",
    op_denoms: ["uinit"],
    executor_uri: "https://executor-uri-test-initia.rave.trade",
    ibc_channels: [
      {
        chain_id: "initiation-2",
        port_id: "transfer",
        channel_id: "channel-0",
        version: "ics20-1",
      },
      {
        chain_id: "initiation-2",
        port_id: "nft-transfer",
        channel_id: "channel-1",
        version: "ics721-1",
      },
    ],
    assetlist:
      "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/rave/assetlist.json",
    minitia: {
      type: "minievm",
      version: "v0.5.5",
    },
  },
};
export default info;
