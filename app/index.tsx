import { Redirect, router, useRootNavigationState } from "expo-router";
import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Page() {
  const rootNavigationState = useRootNavigationState();
  const [route, setRoute] = useState("/journal"); // dont put after the condition

  if (!rootNavigationState?.key) return null;

  return <Redirect href={route} />;
}
