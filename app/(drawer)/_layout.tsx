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
  return <Drawer />;
}
