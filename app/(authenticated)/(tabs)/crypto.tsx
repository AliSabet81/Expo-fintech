import { Text, ScrollView } from "react-native";
import { useHeaderHeight } from "@react-navigation/elements";

import Colors from "@/constants/Colors";
import { defaultStyles } from "@/constants/Styles";

const Page = () => {
  const headerHeight = useHeaderHeight();

  return (
    <ScrollView
      style={{ backgroundColor: Colors.background }}
      contentContainerStyle={{ paddingTop: headerHeight }}
    >
      <Text style={defaultStyles.sectionHeader}>Latest Crypot</Text>
    </ScrollView>
  );
};
export default Page;
