import { View, Text, Switch, Platform } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";
import AccordionListItem from "../components/Accordion/AccordionItem";
import clsx from "clsx";
import Colors from "../constants/Colors";

const Source = () => {
  return (
    <SafeAreaView className="mt-1">
      {new Array(3).fill(0).map((_, i) => (
        <AccordionListItem
          key={i}
          title={
            <View className="flex-1 flex-row gap-3 items-center">
              <View className="h-16 w-16 bg-red-300 rounded-full"></View>
              <View>
                <Text>Place holder</Text>
                <Text className="text-gray-500">00000</Text>
              </View>
            </View>
          }
        >
          <View className="gap-4 py-4 bg-light">
            {new Array(3).fill(1).map((item, i) => (
              <View
                className={clsx([
                  "flex-row w-screen  items-center justify-between px-6 h-6",
                ])}
                key={i}
              >
                <Text>Place holder</Text>
                <Switch
                  className={clsx([Platform.OS === "ios" && "scale-75"])}
                  value={i % 2 === 0 && true}
                  thumbColor="white"
                  trackColor={{ false: "#eee", true: Colors.light.primary }}
                />
              </View>
            ))}
          </View>
        </AccordionListItem>
      ))}
    </SafeAreaView>
  );
};

export default Source;
