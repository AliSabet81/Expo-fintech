const API_KEY = process.env.CRYPTO_API_KEY;

export async function GET(request: Request) {
  const url = new URL(request.url);
  const ids = url.searchParams.get("ids") || "";

  const response = await fetch(
    `https://pro-api.coinmarketcap.com/v2/cryptocurrency/info?id=${ids}`,
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

export const infoApiData = {
  status: {
    timestamp: "2025-03-26T06:47:26.456Z",
    error_code: 0,
    error_message: null,
    elapsed: 8,
    credit_count: 1,
    notice: null,
  },
  data: {
    "1": {
      id: 1,
      name: "Bitcoin",
      symbol: "BTC",
      category: "coin",
      description:
        "Bitcoin (BTC) is a cryptocurrency launched in 2010. Users are able to generate BTC through the process of mining. Bitcoin has a current supply of 19,842,121. The last known price of Bitcoin is 87,653.35824662 USD and is up 0.93 over the last 24 hours. It is currently trading on 12000 active market(s) with $28,667,157,837.63 traded over the last 24 hours. More information can be found at https://bitcoin.org/.",
      slug: "bitcoin",
      logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/1.png",
      subreddit: "bitcoin",
      notice: "",
      tags: [Array],
      "tag-names": [Array],
      "tag-groups": [Array],
      urls: [Object],
      platform: null,
      date_added: "2010-07-13T00:00:00.000Z",
      twitter_username: "",
      is_hidden: 0,
      date_launched: "2010-07-13T00:00:00.000Z",
      contract_address: [],
      self_reported_circulating_supply: null,
      self_reported_tags: null,
      self_reported_market_cap: null,
      infinite_supply: false,
    },
    "52": {
      id: 52,
      name: "XRP",
      symbol: "XRP",
      category: "coin",
      description:
        "XRP (XRP) is a cryptocurrency . XRP has a current supply of 99,986,323,420 with 58,158,111,605 in circulation. The last known price of XRP is 2.45329263 USD and is up 1.28 over the last 24 hours. It is currently trading on 1563 active market(s) with $2,670,200,776.70 traded over the last 24 hours. More information can be found at https://xrpl.org/.",
      slug: "xrp",
      logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/52.png",
      subreddit: "ripple",
      notice: "",
      tags: [Array],
      "tag-names": [Array],
      "tag-groups": [Array],
      urls: [Object],
      platform: [Object],
      date_added: "2013-08-04T00:00:00.000Z",
      twitter_username: "Ripple",
      is_hidden: 0,
      date_launched: null,
      contract_address: [Array],
      self_reported_circulating_supply: null,
      self_reported_tags: null,
      self_reported_market_cap: null,
      infinite_supply: false,
    },
    "825": {
      id: 825,
      name: "Tether USDt",
      symbol: "USDT",
      category: "token",
      description:
        "Tether USDt (USDT) is a cryptocurrency and operates on the Ethereum platform. Tether USDt has a current supply of 145,877,900,667.18089524 with 144,016,138,601.38803989 in circulation. The last known price of Tether USDt is 1.00025985 USD and is up 0.00 over the last 24 hours. It is currently trading on 121249 active market(s) with $57,527,980,635.78 traded over the last 24 hours. More information can be found at https://tether.to.",
      slug: "tether",
      logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/825.png",
      subreddit: "",
      notice: "",
      tags: [Array],
      "tag-names": [Array],
      "tag-groups": [Array],
      urls: [Object],
      platform: [Object],
      date_added: "2015-02-25T00:00:00.000Z",
      twitter_username: "tether_to",
      is_hidden: 0,
      date_launched: null,
      contract_address: [Array],
      self_reported_circulating_supply: null,
      self_reported_tags: null,
      self_reported_market_cap: null,
      infinite_supply: true,
    },
    "1027": {
      id: 1027,
      name: "Ethereum",
      symbol: "ETH",
      category: "coin",
      description:
        "Ethereum (ETH) is a cryptocurrency . Ethereum has a current supply of 120,644,368.02054982. The last known price of Ethereum is 2,061.67275478 USD and is up 0.15 over the last 24 hours. It is currently trading on 10079 active market(s) with $11,209,999,572.22 traded over the last 24 hours. More information can be found at https://www.ethereum.org/.",
      slug: "ethereum",
      logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png",
      subreddit: "ethereum",
      notice: "",
      tags: [Array],
      "tag-names": [Array],
      "tag-groups": [Array],
      urls: [Object],
      platform: null,
      date_added: "2015-08-07T00:00:00.000Z",
      twitter_username: "ethereum",
      is_hidden: 0,
      date_launched: null,
      contract_address: [Array],
      self_reported_circulating_supply: null,
      self_reported_tags: null,
      self_reported_market_cap: null,
      infinite_supply: true,
    },
    "1839": {
      id: 1839,
      name: "BNB",
      symbol: "BNB",
      category: "coin",
      description:
        "BNB (BNB) is a cryptocurrency . BNB has a current supply of 142,472,595.22. The last known price of BNB is 631.36408049 USD and is down -2.03 over the last 24 hours. It is currently trading on 2413 active market(s) with $2,127,630,892.59 traded over the last 24 hours. More information can be found at https://bnbchain.org/en.",
      slug: "bnb",
      logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png",
      subreddit: "bnbchainofficial",
      notice: "",
      tags: [Array],
      "tag-names": [Array],
      "tag-groups": [Array],
      urls: [Object],
      platform: null,
      date_added: "2017-07-25T00:00:00.000Z",
      twitter_username: "bnbchain",
      is_hidden: 0,
      date_launched: null,
      contract_address: [Array],
      self_reported_circulating_supply: null,
      self_reported_tags: null,
      self_reported_market_cap: null,
      infinite_supply: false,
    },
  },
};
