import React from "react";
import { Stack, SplashScreen } from "expo-router";
import { useFonts } from "expo-font";
import { StatusBar, View } from "react-native";
import { ThemeProvider } from "@shopify/restyle";
import { QueryClientProvider, QueryClient } from "react-query";
import theme from "@/theme";
import { GestureHandlerRootView } from "react-native-gesture-handler";

SplashScreen.preventAutoHideAsync();
export default function RootLayout() {
  const queryClient = new QueryClient();
  const [fontsLoaded, error] = useFonts({
    SF_Bold: require("../assets/fonts/sf_bold.otf"),
    SF_Medium: require("../assets/fonts/sf_medium.otf"),
    SF_Regular: require("../assets/fonts/sf_regular.otf"),
  });

  React.useEffect(() => {
    if (fontsLoaded && !error) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);
  return (
    <View style={{ flex: 1 }}>
      <ThemeProvider theme={theme}>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <QueryClientProvider client={queryClient}>
            <StatusBar
              backgroundColor={"transparent"}
              translucent
              animated
              barStyle={"light-content"}
            />
            <Stack
              screenOptions={{
                headerShown: false,
              }}
            >
              <Stack.Screen name="index" />
            </Stack>
          </QueryClientProvider>
        </GestureHandlerRootView>
      </ThemeProvider>
    </View>
  );
}
