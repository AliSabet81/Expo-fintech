import { useAuth } from "@clerk/clerk-expo";
import { useRouter } from "expo-router";
import { useEffect, useRef } from "react";
import { AppState, AppStateStatus } from "react-native";
import { MMKV } from "react-native-mmkv";

// const storage = new MMKV({
//   id: "inactivty-storage",
// });
import AsyncStorage from "@react-native-async-storage/async-storage";

export const UserInactivityProvider = ({ children }: any) => {
  const appState = useRef(AppState.currentState);
  const router = useRouter();
  const { isSignedIn } = useAuth();

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

    if (nextAppState === "background") {
      await recordStartTime();
    } else if (
      nextAppState === "active" &&
      appState.current.match(/background/)
    ) {
      const number = await AsyncStorage.getItem("startTime");
      const password = await AsyncStorage.getItem("user-password");
      const elapsed = Date.now() - +(number || 0);
      // const elapsed = Date.now() - (storage.getNumber("startTime") || 0);
      console.log("🚀 ~ handleAppStateChange ~ elapsed:", elapsed, password);

      if (elapsed > 3000 && password) {
        router.replace("/(authenticated)/(modals)/lock");
      }
    }
    appState.current = nextAppState;
  };

  const recordStartTime = async () => {
    await AsyncStorage.setItem("startTime", Date.now().toString());
    // storage.set("startTime", Date.now());
  };

  return children;
};
