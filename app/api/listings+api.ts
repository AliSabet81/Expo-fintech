const API_KEY = process.env.CRYPTO_API_KEY;

export async function GET(request: Request) {
  const url = new URL(request.url);
  const limit = url.searchParams.get("limit") || 5;

  const response = await fetch(
    `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=${limit}&convert=EUR`,
    {
      headers: {
        "X-CMC_PRO_API_KEY": API_KEY!,
      },
    }
  );

  const res = await response.json();
  return Response.json(res.data);
  // return Response.json(data);
}

const data = [
  {
    id: 1,
    name: "Bitcoin",
    symbol: "BTC",
    slug: "bitcoin",
    num_market_pairs: 12000,
    date_added: "2010-07-13T00:00:00.000Z",
    tags: [
      "mineable",
      "pow",
      "sha-256",
      "store-of-value",
      "state-channel",
      "coinbase-ventures-portfolio",
      "three-arrows-capital-portfolio",
      "polychain-capital-portfolio",
      "binance-labs-portfolio",
      "blockchain-capital-portfolio",
      "boostvc-portfolio",
      "cms-holdings-portfolio",
      "dcg-portfolio",
      "dragonfly-capital-portfolio",
      "electric-capital-portfolio",
      "fabric-ventures-portfolio",
      "framework-ventures-portfolio",
      "galaxy-digital-portfolio",
      "huobi-capital-portfolio",
      "alameda-research-portfolio",
      "a16z-portfolio",
      "1confirmation-portfolio",
      "winklevoss-capital-portfolio",
      "usv-portfolio",
      "placeholder-ventures-portfolio",
      "pantera-capital-portfolio",
      "multicoin-capital-portfolio",
      "paradigm-portfolio",
      "bitcoin-ecosystem",
      "ftx-bankruptcy-estate",
      "2017-2018-alt-season",
      "us-strategic-crypto-reserve",
    ],
    max_supply: 21000000,
    circulating_supply: 19842121,
    total_supply: 19842121,
    infinite_supply: false,
    platform: null,
    cmc_rank: 1,
    self_reported_circulating_supply: null,
    self_reported_market_cap: null,
    tvl_ratio: null,
    last_updated: "2025-03-26T06:03:00.000Z",
    quote: {
      EUR: {
        price: 81151.49111525739,
        volume_24h: 26830485419.761623,
        volume_change_24h: -13.3111,
        percent_change_1h: 0.22992835,
        percent_change_24h: 0.95725164,
        percent_change_7d: 5.21225467,
        percent_change_30d: -8.55422326,
        percent_change_60d: -16.12068255,
        percent_change_90d: -10.85807344,
        market_cap: 1610217706039.362,
        market_cap_dominance: 60.5272,
        fully_diluted_market_cap: 1704181313420.4065,
        tvl: null,
        last_updated: "2025-03-26T06:03:02.000Z",
      },
    },
  },
  {
    id: 1027,
    name: "Ethereum",
    symbol: "ETH",
    slug: "ethereum",
    num_market_pairs: 10079,
    date_added: "2015-08-07T00:00:00.000Z",
    tags: [
      "pos",
      "smart-contracts",
      "ethereum-ecosystem",
      "coinbase-ventures-portfolio",
      "three-arrows-capital-portfolio",
      "polychain-capital-portfolio",
      "binance-labs-portfolio",
      "blockchain-capital-portfolio",
      "boostvc-portfolio",
      "cms-holdings-portfolio",
      "dcg-portfolio",
      "dragonfly-capital-portfolio",
      "electric-capital-portfolio",
      "fabric-ventures-portfolio",
      "framework-ventures-portfolio",
      "hashkey-capital-portfolio",
      "kenetic-capital-portfolio",
      "huobi-capital-portfolio",
      "alameda-research-portfolio",
      "a16z-portfolio",
      "1confirmation-portfolio",
      "winklevoss-capital-portfolio",
      "usv-portfolio",
      "placeholder-ventures-portfolio",
      "pantera-capital-portfolio",
      "multicoin-capital-portfolio",
      "paradigm-portfolio",
      "tezos-ecosystem",
      "near-protocol-ecosystem",
      "velas-ecosystem",
      "ethereum-pow-ecosystem",
      "osmosis-ecosystem",
      "layer-1",
      "ftx-bankruptcy-estate",
      "zksync-era-ecosystem",
      "viction-ecosystem",
      "klaytn-ecosystem",
      "sora-ecosystem",
      "rsk-rbtc-ecosystem",
      "starknet-ecosystem",
      "world-liberty-financial-portfolio",
      "us-strategic-crypto-reserve",
    ],
    max_supply: null,
    circulating_supply: 120644368.02054982,
    total_supply: 120644368.02054982,
    infinite_supply: true,
    platform: null,
    cmc_rank: 2,
    self_reported_circulating_supply: null,
    self_reported_market_cap: null,
    tvl_ratio: null,
    last_updated: "2025-03-26T06:03:00.000Z",
    quote: {
      EUR: {
        price: 1908.8068825838511,
        volume_24h: 10370523985.661942,
        volume_change_24h: -17.3333,
        percent_change_1h: 0.31597779,
        percent_change_24h: 0.42233942,
        percent_change_7d: 6.22739446,
        percent_change_30d: -24.43656496,
        percent_change_60d: -37.5969475,
        percent_change_90d: -40.05983906,
        market_cap: 230286800022.60458,
        market_cap_dominance: 8.6545,
        fully_diluted_market_cap: 230286800022.60638,
        tvl: null,
        last_updated: "2025-03-26T06:03:02.000Z",
      },
    },
  },
  {
    id: 825,
    name: "Tether USDt",
    symbol: "USDT",
    slug: "tether",
    num_market_pairs: 121240,
    date_added: "2015-02-25T00:00:00.000Z",
    tags: [
      "stablecoin",
      "asset-backed-stablecoin",
      "waves-ecosystem",
      "bitcoin-cash-ecosystem",
      "tezos-ecosystem",
      "near-protocol-ecosystem",
      "arbitrum-ecosystem",
      "celo-ecosystem",
      "iotex-ecosystem",
      "zilliqa-ecosystem",
      "harmony-ecosystem",
      "moonriver-ecosystem",
      "cronos-ecosystem",
      "injective-ecosystem",
      "oasis-ecosystem",
      "moonbeam-ecosystem",
      "usd-stablecoin",
      "xdc-ecosystem",
      "everscale-ecosystem",
      "velas-ecosystem",
      "doge-chain-ecosystem",
      "ethereum-pow-ecosystem",
      "aptos-ecosystem",
      "sui-ecosystem",
      "optimism-ecosystem",
      "canto-ecosystem",
      "osmosis-ecosystem",
      "zksync-era-ecosystem",
      "pulsechain-ecosystem",
      "sei-ecosystem",
      "toncoin-ecosystem",
      "fiat-stablecoin",
      "viction-ecosystem",
      "gnosis-chain-ecosystem",
      "klaytn-ecosystem",
      "okexchain-ecosystem",
      "conflux-ecosystem",
      "kcc-ecosystem",
      "tron20-ecosystem",
      "kardiachain-ecosystem",
      "rsk-rbtc-ecosystem",
      "telos-ecosystem",
      "boba-network-ecosystem",
      "fusion-network-ecosystem",
      "hoo-smart-chain-ecosystem",
      "secret-ecosystem",
      "aurora-ecosystem",
      "metis-andromeda-ecosystem",
      "meter-ecosystem",
      "fuse-ecosystem",
      "syscoin-ecosystem",
      "milkomeda-ecosystem",
      "bitgert-ecosystem",
      "astar-ecosystem",
      "cube-network-ecosystem",
      "thundercore-ecosystem",
      "redlight-chain-ecosystem",
      "core-ecosystem",
      "polygon-zkevm-ecosystem",
      "eos-evm-ecosystem",
      "starknet-ecosystem",
      "mantle-ecosystem",
      "neon-evm-ecosystem",
      "manta-pacific-ecosystem",
      "scroll-ecosystem",
      "x-layer-ecosystem",
      "world-liberty-financial-portfolio",
    ],
    max_supply: null,
    circulating_supply: 144016138601.38803,
    total_supply: 145877900667.1809,
    platform: {
      id: 1027,
      name: "Ethereum",
      symbol: "ETH",
      slug: "ethereum",
      token_address: "0xdac17f958d2ee523a2206206994597c13d831ec7",
    },
    infinite_supply: true,
    cmc_rank: 3,
    self_reported_circulating_supply: null,
    self_reported_market_cap: null,
    tvl_ratio: null,
    last_updated: "2025-03-26T06:02:00.000Z",
    quote: {
      EUR: {
        price: 0.9275162931192746,
        volume_24h: 53468836206.83582,
        volume_change_24h: -9.1866,
        percent_change_1h: 0.00574122,
        percent_change_24h: 0.02199024,
        percent_change_7d: 0.04086366,
        percent_change_30d: 0.01242789,
        percent_change_60d: 0.06641606,
        percent_change_90d: 0.13419097,
        market_cap: 133577315024.9111,
        market_cap_dominance: 5.0211,
        fully_diluted_market_cap: 135304129674.84834,
        tvl: null,
        last_updated: "2025-03-26T06:03:02.000Z",
      },
    },
  },
  {
    id: 52,
    name: "XRP",
    symbol: "XRP",
    slug: "xrp",
    num_market_pairs: 1563,
    date_added: "2013-08-04T00:00:00.000Z",
    tags: [
      "medium-of-exchange",
      "enterprise-solutions",
      "xrp-ecosystem",
      "arrington-xrp-capital-portfolio",
      "galaxy-digital-portfolio",
      "a16z-portfolio",
      "pantera-capital-portfolio",
      "ftx-bankruptcy-estate",
      "2017-2018-alt-season",
      "klaytn-ecosystem",
      "made-in-america",
      "us-strategic-crypto-reserve",
    ],
    max_supply: 100000000000,
    circulating_supply: 58158111605,
    total_supply: 99986323420,
    infinite_supply: false,
    platform: null,
    cmc_rank: 4,
    self_reported_circulating_supply: null,
    self_reported_market_cap: null,
    tvl_ratio: null,
    last_updated: "2025-03-26T06:03:00.000Z",
    quote: {
      EUR: {
        price: 2.2764152603954444,
        volume_24h: 2496782549.5803266,
        volume_change_24h: -10.8572,
        percent_change_1h: 0.28433932,
        percent_change_24h: 1.00077869,
        percent_change_7d: 6.82684189,
        percent_change_30d: -1.5005215,
        percent_change_60d: -21.00077262,
        percent_change_90d: 9.20843635,
        market_cap: 132392012773.4034,
        market_cap_dominance: 4.9755,
        fully_diluted_market_cap: 227641526039.54742,
        tvl: null,
        last_updated: "2025-03-26T06:03:02.000Z",
      },
    },
  },
  {
    id: 1839,
    name: "BNB",
    symbol: "BNB",
    slug: "bnb",
    num_market_pairs: 2413,
    date_added: "2017-07-25T00:00:00.000Z",
    tags: [
      "marketplace",
      "centralized-exchange",
      "payments",
      "smart-contracts",
      "alameda-research-portfolio",
      "multicoin-capital-portfolio",
      "bnb-chain-ecosystem",
      "layer-1",
      "alleged-sec-securities",
      "celsius-bankruptcy-estate",
    ],
    max_supply: null,
    circulating_supply: 142472597.48,
    total_supply: 142472597.48,
    infinite_supply: false,
    platform: null,
    cmc_rank: 5,
    self_reported_circulating_supply: null,
    self_reported_market_cap: null,
    tvl_ratio: null,
    last_updated: "2025-03-26T06:03:00.000Z",
    quote: {
      EUR: {
        price: 584.9924592337711,
        volume_24h: 1987799663.064718,
        volume_change_24h: 17.4274,
        percent_change_1h: 0.2076132,
        percent_change_24h: -1.89636563,
        percent_change_7d: 2.07294995,
        percent_change_30d: -2.32281202,
        percent_change_60d: -7.76242145,
        percent_change_90d: -10.38288005,
        market_cap: 83345395173.24837,
        market_cap_dominance: 3.1322,
        fully_diluted_market_cap: 83345395173.25029,
        tvl: null,
        last_updated: "2025-03-26T06:03:02.000Z",
      },
    },
  },
];
