import { AssetList } from "@initia/initia-registry-types";
const info: AssetList = {
  $schema: "../../assetlist.schema.json",
  chain_name: "initia",
  assets: [
    {
      description: "The native token of Initia",
      denom_units: [
        {
          denom: "uinit",
          exponent: 0,
        },
        {
          denom: "INIT",
          exponent: 6,
        },
      ],
      base: "uinit",
      display: "INIT",
      name: "Initia Native Token",
      symbol: "INIT",
      coingecko_id: "",
      images: [
        {
          png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/images/INIT.png",
        },
      ],
      logo_URIs: {
        png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/images/INIT.png",
      },
    },
    {
      description: "Circle’s USD Coin on Initia",
      denom_units: [
        {
          denom:
            "ibc/6490A7EAB61059BFC1CDDEB05917DD70BDF3A611654162A1A47DB930D40D8AF4",
          exponent: 0,
        },
        {
          denom: "USDC",
          exponent: 6,
        },
      ],
      base: "ibc/6490A7EAB61059BFC1CDDEB05917DD70BDF3A611654162A1A47DB930D40D8AF4",
      display: "USDC",
      name: "USD Coin",
      symbol: "USDC",
      coingecko_id: "",
      traces: [
        {
          type: "ibc",
          counterparty: {
            chain_name: "noble",
            base_denom: "uusdc",
            channel_id: "channel-129",
          },
          chain: {
            channel_id: "channel-3",
            path: "transfer/channel-3/uusdc",
          },
        },
      ],
      images: [
        {
          png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/images/USDC.png",
        },
      ],
      logo_URIs: {
        png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/images/USDC.png",
      },
    },
    {
      description: "Milkyway’s liquid staked TIA on Initia",
      denom_units: [
        {
          denom:
            "ibc/16065EE5282C5217685C8F084FC44864C25C706AC37356B0D62811D50B96920F",
          exponent: 0,
        },
        {
          denom: "milkTIA",
          exponent: 6,
        },
      ],
      base: "ibc/16065EE5282C5217685C8F084FC44864C25C706AC37356B0D62811D50B96920F",
      display: "milkTIA",
      name: "milkTIA",
      symbol: "milkTIA",
      coingecko_id: "",
      traces: [
        {
          type: "ibc",
          counterparty: {
            chain_name: "osmosis",
            base_denom:
              "factory/osmo1f5vfcph2dvfeqcqkhetwv75fda69z7e5c2dldm3kvgj23crkv6wqcn47a0/umilkTIA",
            channel_id: "channel-100108",
          },
          chain: {
            channel_id: "channel-0",
            path: "transfer/channel-0/factory/osmo1f5vfcph2dvfeqcqkhetwv75fda69z7e5c2dldm3kvgj23crkv6wqcn47a0/umilkTIA",
          },
        },
      ],
      images: [
        {
          png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/images/milkTIA.png",
        },
      ],
      logo_URIs: {
        png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/images/milkTIA.png",
      },
    },
    {
      description: "The native token of Celestia on Initia via IBC",
      denom_units: [
        {
          denom:
            "ibc/DA9AC2708B4DAA46D24E73241373CDCC850BC6446E8E0906A4062152B649DDD3",
          exponent: 0,
        },
        {
          denom: "TIA",
          exponent: 6,
        },
      ],
      base: "ibc/DA9AC2708B4DAA46D24E73241373CDCC850BC6446E8E0906A4062152B649DDD3",
      display: "TIA",
      name: "Celestia",
      symbol: "TIA",
      coingecko_id: "",
      traces: [
        {
          type: "ibc",
          counterparty: {
            chain_name: "celestia",
            base_denom: "utia",
            channel_id: "channel-78",
          },
          chain: {
            channel_id: "channel-10",
            path: "transfer/channel-10/utia",
          },
        },
      ],
      images: [
        {
          png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/images/TIA.png",
        },
      ],
      logo_URIs: {
        png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/images/TIA.png",
      },
    },
    {
      description: "ETH token",
      denom_units: [
        {
          denom:
            "move/c3b42c557c243205835971567f9516c78208f342023cf1c0c15ed8f3d3a6a271",
          exponent: 0,
        },
        {
          denom: "ETH",
          exponent: 6,
        },
      ],
      base: "move/c3b42c557c243205835971567f9516c78208f342023cf1c0c15ed8f3d3a6a271",
      display: "ETH",
      name: "ETH Token",
      symbol: "ETH",
      coingecko_id: "",
      traces: [],
      images: [
        {
          png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/images/ETH.png",
        },
      ],
      logo_URIs: {
        png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/images/ETH.png",
      },
    },
  ],
};
export default info;
