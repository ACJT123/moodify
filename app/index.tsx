import { router } from "expo-router";
import { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Login from "./(auth)/login";

export default function Page() {
  return (
    <SafeAreaView>
      <Login />
    </SafeAreaView>
  );
}
