import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";

import Typography from "../../../components/Core/Typography";

import Colors from "../../../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const Feature2 = () => {
  const { push } = useRouter();
  return (
    <View className="flex-1">
      <ScrollView
        className=" mt-6 border-gray-300  border-b"
        showsVerticalScrollIndicator
      >
        {new Array(6).fill(0).map((_, i) => (
          <View
            key={i}
            className="p-4 bg-white border-gray-300 border-b flex-row justify-between"
          >
            <View>
              <Typography size="lg" classes="mb-1">
                Place holder {i != 0 && i + 1}
              </Typography>
              <Typography color={Colors.light.textsub} size="md">
                Place holder: Place holder, Place holder,P... Place holder :
                Place holder
              </Typography>
            </View>
            <TouchableOpacity
              className="mt-auto"
              activeOpacity={0.7}
              onPress={() => push("/drawer/Feature2/Feature2b")}
            >
              <Ionicons
                name="chevron-forward"
                size={20}
                color={Colors.light.textsub}
              />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
      <TouchableOpacity
        activeOpacity={0.7}
        className="bg-primary  w-16 h-16 rounded-full justify-center items-center absolute right-6 bottom-8"
      >
        <Ionicons name="add" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default Feature2;
