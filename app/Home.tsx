import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import Typography from "../components/Core/Typography";
import Colors from "../constants/Colors";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import { sizes } from "../constants/sizes";
import UserStatus from "../components/App/UserStatus";
import Switch from "../components/Core/Switch";
import { useRouter } from "expo-router";

const Home = () => {
  const { push } = useRouter();
  return (
    <ScrollView className="bg-light mt-1" showsVerticalScrollIndicator={false}>
      <UserStatus />
      <View className="mt-8 border-2  border-gray-200 bg-white">
        {new Array(5).fill(1).map((_, i) => (
          <View className="py-4 px-6 border-y border-gray-100" key={i}>
            <View className="flex-row justify-between items-center">
              <Typography classes="mb-1">Holder</Typography>
              <Switch />
            </View>
            <View className="flex flex-row justify-between items-center">
              <View>
                <Typography size="md" color={Colors.light.textsub}>
                  Holder: Holder, Holder, Holder
                </Typography>
                <Typography size="md" color={Colors.light.textsub}>
                  Holder: Holder
                </Typography>
              </View>
              <TouchableOpacity onPress={() => push("Feature2a")}>
                <Ionicons
                  name="chevron-forward"
                  size={20}
                  color={Colors.light.textsub}
                />
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default Home;
