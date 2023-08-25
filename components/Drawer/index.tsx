import {
  DrawerContent,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";

import {
  // Import the creation function
  createDrawerNavigator,
  // Import the types
  DrawerNavigationOptions,
} from "@react-navigation/drawer";

import { useNavigation, useRouter, withLayoutContext } from "expo-router";
import AccordionListItem from "../Accordion/AccordionItem";
import Typography from "../Core/Typography";
import { Platform, Pressable, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "../../constants/Colors";
import clsx from "clsx";
import { DrawerActions } from "@react-navigation/native";
import {
  DrawerContentComponentProps,
  DrawerProps,
} from "@react-navigation/drawer/lib/typescript/src/types";

const { Navigator } = createDrawerNavigator();

// This can be used like `<Drawer />`
const MainDrawer = withLayoutContext<DrawerNavigationOptions, typeof Navigator>(
  Navigator
);

//@ts-ignore
function CustomDrawerContent(props: DrawerContentComponentProps) {
  const router = useRouter();
  return (
    <DrawerContentScrollView {...props} stickyHeaderIndices={[0]}>
      <View className="-top-[10%]">
        <View className="h-[25%] mt-3 bg-blue-500 ] p-6">
          <SafeAreaView>
            <View className="h-12 w-12 bg-slate-600 border border-white rounded-full"></View>
            <View className="mt-4">
              <Typography color="white" size="md">
                Jessica Schmitz
              </Typography>
              <Typography color="white" size="md">
                +355676799222
              </Typography>
            </View>
          </SafeAreaView>
        </View>
        <DrawerItemList {...props} />
        <View className="w-[80%] border-t border-[#bfbfbf] mt-12 p-6 space-y-5">
          <Pressable
            onPress={() => router.push("Settings")}
            className="flex-row items-center"
          >
            <Feather name="plus" color="#bfbfbf" size={24} />
            <Typography size="sm" classes="ml-[32px]">
              Settings
            </Typography>
          </Pressable>
          <View className="flex-row items-center ">
            <Feather name="plus" color="#bfbfbf" size={24} />
            <Typography size="sm" classes="ml-[32px]">
              Logout
            </Typography>
          </View>
        </View>
      </View>
    </DrawerContentScrollView>
  );
}
//@ts-ignore
export function Drawer(props) {
  const navigation = useNavigation();
  const router = useRouter();
  console.log(props);
  return (
    <MainDrawer
      initialRouteName="index"
      drawerContent={CustomDrawerContent}
      screenOptions={{
        sceneContainerStyle: { backgroundColor: "#eee" },

        drawerContentStyle: { backgroundColor: "white" },
        drawerLabelStyle: {
          color: Colors.light.textsub,
        },
        drawerIcon: (props) => (
          <Feather name="plus" size={24} color="#bfbfbf" />
        ),
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
    >
      <MainDrawer.Screen
        name="index"
        options={{
          drawerLabel: (props) => <Typography size="sm">Homepage</Typography>,
          drawerIcon: (props) => {
            return (
              <MaterialCommunityIcons
                name="check-decagram-outline"
                color="#bfbfbf"
                size={24}
              />
            );
          },
        }}
      />
      <MainDrawer.Screen
        name="Feature2"
        options={{
          drawerLabel: (props) => <Typography size="sm">Feature 2</Typography>,
          drawerIcon: (props) => {
            return <Feather name="book-open" color="#bfbfbf" size={24} />;
          },
        }}
      />
      <MainDrawer.Screen
        name="Feature3"
        options={{
          drawerLabel: (props) => <Typography size="sm">Feature 3</Typography>,
        }}
      />
      <MainDrawer.Screen
        name="Feature4"
        options={{
          drawerLabel: (props) => <Typography size="sm">Feature 4</Typography>,
        }}
      />
      <MainDrawer.Screen
        name="Feature5"
        options={{
          drawerLabel: (props) => <Typography size="sm">Feature 5</Typography>,
        }}
      />
      <MainDrawer.Screen
        name="Feature6"
        options={{
          drawerLabel: (props) => <Typography size="sm">Feature 6</Typography>,
        }}
      />
      <MainDrawer.Screen
        name="Feature7"
        options={{
          drawerLabel: (props) => <Typography size="sm">Feature 7</Typography>,
        }}
      />
      <MainDrawer.Screen
        name="Feature8"
        options={{
          drawerLabel: (props) => <Typography size="sm">Feature 8</Typography>,
        }}
      />
      <MainDrawer.Screen
        name="Feature9"
        options={{
          drawerLabel: (props) => <Typography size="sm">Feature 9</Typography>,
        }}
      />
    </MainDrawer>
  );
}
