import {
  Ionicons,
  MaterialCommunityIcons as MaterialIcons,
} from "@expo/vector-icons";
import { Drawer } from "../../components/Drawer";
import Colors from "../../constants/Colors";
import { SafeAreaView } from "react-native-safe-area-context";
import { Platform, TouchableOpacity, View } from "react-native";
import { useRouter } from "expo-router";
import Typography from "../../components/Core/Typography";
import clsx from "clsx";
import { DrawerActions, useNavigation } from "@react-navigation/native";

export default function RootLayout() {
  const router = useRouter();
  const navigation = useNavigation();
  return (
    <Drawer
      screenOptions={{
        header: (props) => (
          <SafeAreaView
            className={clsx([
              Platform.OS === "android" ? "h-24 justify-center" : "",
              "bg-white",
            ])}
          >
            <View className="bg-white flex-row h-16 justify-between items-center  px-6">
              {props.route.name !== "index" ? (
                <TouchableOpacity onPress={() => router.push("index")}>
                  <MaterialIcons name="chevron-left" size={24} color="black" />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={() =>
                    navigation.dispatch(DrawerActions.toggleDrawer())
                  }
                >
                  <MaterialIcons name="menu" size={24} color="black" />
                </TouchableOpacity>
              )}
              <Typography size="xl" capitalize>
                {props.route.name}
              </Typography>

              {props.route.name !== "index" ? (
                <MaterialIcons name="dots-vertical" size={24} color="black" />
              ) : (
                <TouchableOpacity onPress={() => router.push("Notifications")}>
                  <MaterialIcons name="bell" size={24} color="black" />
                </TouchableOpacity>
              )}
            </View>
          </SafeAreaView>
        ),
      }}
    >
      <Drawer.Screen
        name="index"
        options={{
          title: "Home",
          drawerIcon: (props) =>
            props.focused ? (
              <MaterialIcons
                name="check-decagram"
                size={24}
                color={Colors.light.textsub}
              />
            ) : (
              <MaterialIcons
                name="check-decagram-outline"
                size={24}
                color={Colors.light.textsub}
              />
            ),
        }}
      />
      <Drawer.Screen
        name="Feature2"
        options={{
          title: "Feature 2",
          drawerIcon: (props) =>
            props.focused ? (
              <Ionicons
                name="ios-book"
                size={24}
                color={Colors.light.textsub}
              />
            ) : (
              <Ionicons
                name="ios-book-outline"
                size={24}
                color={Colors.light.textsub}
              />
            ),
        }}
      />
      <Drawer.Screen
        name="Feature3"
        options={{
          title: "Feature 3",
          drawerIcon: (props) =>
            props.focused ? (
              <Ionicons name="add" size={24} color={Colors.light.textsub} />
            ) : (
              <Ionicons name="add" size={24} color={Colors.light.textsub} />
            ),
        }}
      />
      <Drawer.Screen
        name="Feature4"
        options={{
          title: "Feature 4",
          drawerIcon: (props) =>
            props.focused ? (
              <Ionicons name="add" size={24} color={Colors.light.textsub} />
            ) : (
              <Ionicons name="add" size={24} color={Colors.light.textsub} />
            ),
        }}
      />
      <Drawer.Screen
        name="Feature5"
        options={{
          title: "Feature 5",
          drawerIcon: (props) =>
            props.focused ? (
              <Ionicons name="add" size={24} color={Colors.light.textsub} />
            ) : (
              <Ionicons name="add" size={24} color={Colors.light.textsub} />
            ),
        }}
      />
      <Drawer.Screen
        name="Feature6"
        options={{
          title: "Feature 6",
          drawerIcon: (props) =>
            props.focused ? (
              <Ionicons name="add" size={24} color={Colors.light.textsub} />
            ) : (
              <Ionicons name="add" size={24} color={Colors.light.textsub} />
            ),
        }}
      />
      <Drawer.Screen
        name="Feature7"
        options={{
          title: "Feature 7",
          drawerIcon: (props) =>
            props.focused ? (
              <Ionicons name="add" size={24} color={Colors.light.textsub} />
            ) : (
              <Ionicons name="add" size={24} color={Colors.light.textsub} />
            ),
        }}
      />
    </Drawer>
  );
}
