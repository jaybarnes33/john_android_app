import { Platform, SafeAreaView, TouchableOpacity, View } from "react-native";
import { Drawer } from "../../components/Drawer";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import Typography from "../../components/Core/Typography";
import { useNavigation, useRouter } from "expo-router";
import { DrawerActions } from "@react-navigation/native";
import clsx from "clsx";
import Colors from "../../constants/Colors";

export default function RootLayout() {
  const navigation = useNavigation();
  const router = useRouter();
  return (
    <Drawer
      screenOptions={{
        drawerIcon: (props) => {
          return <Ionicons name="add" size={24} color={"#bfbfbf"} />;
        },
        sceneContainerStyle: { backgroundColor: "#eee" },

        drawerContentStyle: { backgroundColor: "white" },
        drawerLabelStyle: {
          color: Colors.light.textsub,
        },

        //@ts-ignore
        header: (props) => (
          <SafeAreaView
            className={clsx([
              Platform.OS === "android" ? "h-24 justify-center" : "",
              "bg-white",
            ])}
          >
            <View className="bg-white flex-row h-16 justify-between items-center  px-6">
              {props.route.name !== "index" ? (
                <TouchableOpacity
                  onPress={() =>
                    //@ts-ignore
                    navigation.navigate("(drawer)", { screen: "index" })
                  }
                >
                  <MaterialCommunityIcons
                    name="chevron-left"
                    size={24}
                    color="black"
                  />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={() =>
                    navigation.dispatch(DrawerActions.toggleDrawer())
                  }
                >
                  <MaterialCommunityIcons name="menu" size={24} color="black" />
                </TouchableOpacity>
              )}
              <Typography size="xl" capitalize>
                {props.route.name}
              </Typography>

              {props.route.name !== "index" ? (
                <MaterialCommunityIcons
                  name="dots-vertical"
                  size={24}
                  color="black"
                />
              ) : (
                <TouchableOpacity onPress={() => router.push("Notifications")}>
                  <MaterialCommunityIcons name="bell" size={24} color="black" />
                </TouchableOpacity>
              )}
            </View>
          </SafeAreaView>
        ),
      }}
    />
  );
}
