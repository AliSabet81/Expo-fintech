import { Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useQuery } from "@tanstack/react-query";
import { useHeaderHeight } from "@react-navigation/elements";
import { Text, ScrollView, View, TouchableOpacity, Image } from "react-native";

import Colors from "@/constants/Colors";
import { Currency } from "@/interfaces/crypto";
import { defaultStyles } from "@/constants/Styles";

const Page = () => {
  const headerHeight = useHeaderHeight();

  const currencies = useQuery({
    queryKey: ["listings"],
    queryFn: () =>
      fetch(
        `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=5&convert=EUR`,
        {
          headers: {
            "X-CMC_PRO_API_KEY": "36748b5b-4590-4fdd-9d56-415fbb3eea72",
          },
        }
      ).then((res) => res.json()),
  });

  const ids = currencies?.data?.data
    ?.map((currency: Currency) => currency.id)
    .join(",");

  const { data } = useQuery({
    queryKey: ["info", ids],
    queryFn: () =>
      fetch(
        `https://pro-api.coinmarketcap.com/v2/cryptocurrency/info?id=${ids}`,
        {
          headers: {
            "X-CMC_PRO_API_KEY": "36748b5b-4590-4fdd-9d56-415fbb3eea72",
          },
        }
      ).then((res) => res.json()),
    enabled: !!ids,
  });

  return (
    <ScrollView
      style={{ backgroundColor: Colors.background }}
      contentContainerStyle={{ paddingTop: headerHeight }}
    >
      <Text style={defaultStyles.sectionHeader}>Latest Crypot</Text>
      <View style={defaultStyles.block}>
        {currencies?.data?.data?.map((currency: Currency) => (
          <Link href={`/crypto/${currency.id}`} key={currency.id} asChild>
            <TouchableOpacity
              style={{ flexDirection: "row", gap: 14, alignItems: "center" }}
            >
              <Image
                source={{ uri: data?.data?.[currency.id].logo }}
                style={{ width: 40, height: 40 }}
              />
              <View style={{ flex: 1, gap: 6 }}>
                <Text style={{ fontWeight: "600", color: Colors.dark }}>
                  {currency.name}
                </Text>
                <Text style={{ color: Colors.gray }}>{currency.symbol}</Text>
              </View>
              <View style={{ gap: 6, alignItems: "flex-end" }}>
                <Text>{currency.quote.EUR.price.toFixed(2)} €</Text>
                <View style={{ flexDirection: "row", gap: 4 }}>
                  <Ionicons
                    name={
                      currency.quote.EUR.percent_change_1h > 0
                        ? "caret-up"
                        : "caret-down"
                    }
                    size={16}
                    color={
                      currency.quote.EUR.percent_change_1h > 0 ? "green" : "red"
                    }
                  />
                  <Text
                    style={{
                      color:
                        currency.quote.EUR.percent_change_1h > 0
                          ? "green"
                          : "red",
                    }}
                  >
                    {currency.quote.EUR.percent_change_1h.toFixed(2)} %
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </Link>
        ))}
      </View>
    </ScrollView>
  );
};
export default Page;
