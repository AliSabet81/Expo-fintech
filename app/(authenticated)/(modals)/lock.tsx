import { useUser } from "@clerk/clerk-expo";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Page = () => {
  const { user } = useUser();

  return (
    <SafeAreaView>
      <Text>Welcome back, {user?.firstName}</Text>
    </SafeAreaView>
  );
};

export default Page;
