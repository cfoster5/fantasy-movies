import { getAuth, onAuthStateChanged, User } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

type AppProviderProps = {
  children: React.ReactNode;
};

export const AuthProviderContext = createContext<{ user: User | null }>({
  user: null,
});

export function AppProvider({ children }: AppProviderProps) {
  const auth = getAuth();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => setUser(user));
    return unsubscribe;
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProviderContext.Provider value={{ user }}>
        <SafeAreaProvider>{children}</SafeAreaProvider>
      </AuthProviderContext.Provider>
    </QueryClientProvider>
  );
}
