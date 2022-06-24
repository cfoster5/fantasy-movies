import { StatusBar } from "expo-status-bar";

import useCachedResources from "./src/hooks/useCachedResources";
import useColorScheme from "./src/hooks/useColorScheme";
import Navigation from "./src/navigation";

import { AppProvider } from "@/providers/app";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <AppProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </AppProvider>
    );
  }
}
