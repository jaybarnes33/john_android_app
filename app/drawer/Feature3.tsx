import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Typography from "../../components/Core/Typography";
import clsx from "clsx";
import TabOne from "../../components/Feature3/TabOne";
import TabTwo from "../../components/Feature3/TabTwo";
import TabThree from "../../components/Feature3/TabThree";

const Feature3a = () => {
  const [active, setActive] = useState(1);
  const tabs = {
    Holder1: <TabOne />,
    Holder2: <TabTwo />,
    Holder3: <TabThree />,
  };

  return (
    <View className="w-screen flex-1">
      <View className="flex-row w-screen justify-around bg-white pb-4 relative border-gray-300 border-b">
        {Object.keys(tabs).map((tab, i) => (
          <TouchableOpacity
            activeOpacity={0.7}
            key={tab}
            onPress={() => setActive(i + 1)}
            className="w-[33.333%] items-center"
          >
            <Typography size="md">{tab}</Typography>

            {active === i + 1 && (
              <View className="h-1 w-full  bg-primary -bottom-4"></View>
            )}
          </TouchableOpacity>
        ))}
      </View>
      <View
        className={clsx([
          " p-6",
          (active === 1 || active === 3) && "bg-white",
          "flex-1",
        ])}
      >
        {Object.values(tabs)[active - 1]}
      </View>
    </View>
  );
};

export default Feature3a;
