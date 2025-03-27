import { useAuth } from "@clerk/clerk-expo";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useRef, useState } from "react";
import { Text, AppState, AppStateStatus, ScrollView } from "react-native";

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!;

const Page = () => {
  const appState = useRef(AppState.currentState);
  const [app, setApp] = useState(AppState.currentState);
  const { isSignedIn } = useAuth();

  const currencies = useQuery({
    queryKey: ["listings"],
    queryFn: () => fetch("/api/listings").then((res) => res.json()),
  });
  useEffect(() => {
    const subscription = AppState.addEventListener(
      "change",
      handleAppStateChange
    );

    return () => {
      subscription.remove();
    };
  }, []);

  const handleAppStateChange = async (nextAppState: AppStateStatus) => {
    console.log("🚀 ~ handleAppStateChange ~ nextAppState", nextAppState);
    setApp(nextAppState);
    appState.current = nextAppState;
  };

  return (
    <ScrollView>
      <Text>
        {app} {AppState.currentState}
      </Text>
      <Text>{publishableKey}</Text>
      <Text>isSignedIn : {isSignedIn ? "true" : "false"}</Text>
      <Text>{process.env.CRYPTO_API_KEY}</Text>
      <Text>{JSON.stringify(currencies?.data)}</Text>
    </ScrollView>
  );
};
export default Page;
