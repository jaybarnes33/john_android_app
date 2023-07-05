import { View, Text } from "react-native";
import React from "react";
import Typography from "../Core/Typography";
import Colors from "../../constants/Colors";
import { FontAwesome5 } from "@expo/vector-icons";
import { sizes } from "../../constants/sizes";

const UserStatus = () => {
  return (
    <View className="bg-white p-6 flex-row justify-between items-center w-full border-b-2 border-gray-200">
      <View>
        <Typography classes="mb-2">Jeisson Brown</Typography>
        <Typography classes="mt-1" color={Colors.light.textsub}>
          +355678934950{" "}
        </Typography>
        <View>
          <Typography color={Colors.light.textsub} classes="mt-1">
            ID:908738933
          </Typography>
          <Typography color={Colors.light.textsub} classes="mt-1">
            Plan: VIP
          </Typography>
          <Typography color={Colors.light.textsub} classes="mt-1">
            Remaining Days: 29
          </Typography>
        </View>
      </View>
      <View className="items-center">
        <View className="h-16 w-16   items-center justify-center rounded-full  border-success border-2">
          <FontAwesome5 name="check" size={50} color={Colors.light.success} />
        </View>
        <Typography uppercase color={"#3acc63"} size="sm">
          Running
        </Typography>
      </View>
    </View>
  );
};

export default UserStatus;
