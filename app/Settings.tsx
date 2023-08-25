import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Screen from "../components/Screen";
import { Feather } from "@expo/vector-icons";
import Typography from "../components/Core/Typography";
import Switch from "../components/Core/Switch";
import Colors from "../constants/Colors";

const Settings = () => {
  return (
    <View className="bg-white mt-1 p-6 flex-1">
      <View className="space-y-6 ">
        <View className="flex-row items-center justify-between">
          <Feather name="settings" color={"#5c5c5c"} />
          <Typography classes="flex-1 mx-5" color={Colors.light.textsub}>
            Holder
          </Typography>
          <Switch />
        </View>
        <View className="flex-row items-center justify-between">
          <Feather name="settings" color={"#5c5c5c"} />
          <Typography classes="flex-1 mx-5" color={Colors.light.textsub}>
            Holder
          </Typography>
          <Switch />
        </View>
      </View>
      <View className="space-y-6 pt-6 border-t border-[#ededed] my-6">
        <View className="flex-row items-center justify-between">
          <Feather name="settings" color={"#5c5c5c"} />
          <Typography classes="flex-1 mx-5" color={Colors.light.textsub}>
            Holder
          </Typography>
          <Switch />
        </View>
        <View className="flex-row items-center justify-between">
          <Feather name="settings" color={"#5c5c5c"} />
          <Typography classes="flex-1 mx-5" color={Colors.light.textsub}>
            Holder
          </Typography>
          <Switch />
        </View>
        <View className="flex-row items-center justify-between">
          <Feather name="settings" color={"#5c5c5c"} />
          <Typography classes="flex-1 mx-5" color={Colors.light.textsub}>
            Holder
          </Typography>
          <Switch />
        </View>
        <View className="flex-row items-center justify-between">
          <Feather name="settings" color={"#5c5c5c"} />
          <Typography classes="flex-1 mx-5" color={Colors.light.textsub}>
            Holder
          </Typography>
          <Switch />
        </View>
      </View>
      <View className="space-y-6 pt-6  border-t border-[#ededed]">
        <View className="flex-row items-center justify-between">
          <Feather name="settings" color={"#5c5c5c"} />
          <Typography classes="flex-1 mx-5" color={Colors.light.textsub}>
            Holder
          </Typography>
          <Switch />
        </View>
        <View className="flex-row items-center justify-between">
          <Feather name="settings" color={"#5c5c5c"} />
          <Typography classes="flex-1 mx-5" color={Colors.light.textsub}>
            Holder
          </Typography>
          <Switch />
        </View>
      </View>
      <TouchableOpacity
        className="bg-primary mt-6   py-[14px] w-full items-center justify-center  shadow-2xl rounded-md border border-primary"
        activeOpacity={0.8}
      >
        <Typography color={"white"} capitalize size="sm">
          Disconnect
        </Typography>
      </TouchableOpacity>
    </View>
  );
};

export default Settings;
