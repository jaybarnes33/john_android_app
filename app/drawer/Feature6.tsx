import { View } from "react-native";
import React from "react";

import Typography from "../../components/Core/Typography";

import Input from "../../components/Core/Feature6/Input";

const Feature6 = () => {
  return (
    <View className="flex-1 bg-white mt-1 p-6">
      <View>
        {new Array(7).fill(0).map((_, i) => (
          <View className="flex-row items-center" key={i}>
            <Typography>{i + 1}. &nbsp;</Typography>
            <Input />
          </View>
        ))}
      </View>
    </View>
  );
};

export default Feature6;
