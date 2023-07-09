import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Typography from "../Core/Typography";
import { Entypo, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

const TabThree = () => {
  return (
    <View className="h-full">
      <ScrollView>
        {new Array(7).fill(0).map((_, i) => (
          <View
            className="flex-row justify-between  w-full space-x-2 my-3 items-center"
            key={i}
          >
            <Typography color="#495057">{i + 1}.</Typography>
            <View className="flex-1 pb-1 flex-row border-b border-neutral-700">
              <TextInput
                placeholder="Place holder"
                className="flex-1  text-[14px] "
              />
              <MaterialCommunityIcons name="close" size={17} />
            </View>
          </View>
        ))}
      </ScrollView>
      <TouchableOpacity
        activeOpacity={0.7}
        className="bg-primary  w-16 h-16 rounded-full justify-center items-center absolute right-6 bottom-0"
      >
        <Ionicons name="add" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default TabThree;
