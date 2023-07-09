import { View, Platform } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";
import AccordionListItem from "../../../components/Accordion/AccordionItem";
import clsx from "clsx";
import Colors from "../../../constants/Colors";
import Typography from "../../../components/Core/Typography";
import Switch from "../../../components/Core/Switch";

const Source = () => {
  return (
    <SafeAreaView className="mt-1">
      {new Array(3).fill(0).map((_, i) => (
        <AccordionListItem
          key={i}
          title={
            <View className="flex-1 flex-row gap-3 items-start">
              <View className="h-16 w-16 bg-secondary rounded-full"></View>
              <View className="justify-between h-12">
                <Typography size="md" bold>
                  Place holder
                </Typography>
                <Typography size="sm" color={Colors.light.textsub}>
                  00000000
                </Typography>
              </View>
            </View>
          }
        >
          <View className="gap-y-4 pt-8 pb-6 bg-light px-6 w-screen">
            <Typography size="md" color={Colors.light.primary}>
              Place holder
            </Typography>
            {new Array(3).fill(1).map((item, i) => (
              <View
                className={clsx(["flex-row items-center justify-between h-6"])}
                key={i}
              >
                <Typography size="md">Place holder</Typography>
                <Switch />
              </View>
            ))}
          </View>
        </AccordionListItem>
      ))}
    </SafeAreaView>
  );
};

export default Source;
