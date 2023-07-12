import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
  useRoute,
} from "@react-navigation/native";

import { SplashScreen, Stack, useNavigation, useRouter } from "expo-router";
import { useEffect } from "react";
import { Platform, TouchableOpacity, View, useColorScheme } from "react-native";
import { MaterialCommunityIcons as MaterialIcons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";
import Typography from "../components/Core/Typography";
export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)",
};

export default function RootLayout() {
  const [loaded, error] = useFonts({
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  return (
    <>
      {/* Keep the splash screen open until the assets have loaded. In the future, we should just support async font loading with a native version of font-display. */}
      {!loaded && <SplashScreen />}
      {loaded && <RootLayoutNav />}
    </>
  );
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();
  const router = useRouter();

  return (
    <>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <View></View>
        <Stack
          initialRouteName="main"
          screenOptions={{
            header: (props) => (
              <SafeAreaView
                className={
                  Platform.OS === "android" ? "h-24 justify-center" : ""
                }
              >
                <View className="bg-white flex-row h-16 justify-between items-center  px-6">
                  <TouchableOpacity onPress={() => router.back()}>
                    <MaterialIcons
                      name="chevron-left"
                      size={24}
                      color="black"
                    />
                  </TouchableOpacity>

                  <Typography size="xl" capitalize>
                    {props.route.name}
                  </Typography>

                  <MaterialIcons name="dots-vertical" size={24} color="black" />
                </View>
              </SafeAreaView>
            ),
          }}
        >
          <Stack.Screen name="drawer" options={{ headerShown: false }} />
          <Stack.Screen name="Otp" options={{ headerShown: false }} />
          <Stack.Screen name="Auth" options={{ headerShown: false }} />
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="modal" options={{ presentation: "modal" }} />
        </Stack>
      </ThemeProvider>
    </>
  );
}
