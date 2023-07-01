import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import clsx from "clsx";
import Colors from "../../constants/Colors";
const Selector = ({
  text,
  isSelected,
}: {
  text: string;
  isSelected?: boolean;
}) => {
  const [selected, setSelected] = useState<boolean>(isSelected || false);
  return (
    <TouchableOpacity
      className={clsx([
        `w-[45%]  py-3 rounded-full mr-auto    mb-2 items-center justify-between`,
      ])}
      activeOpacity={0.8}
      style={{
        backgroundColor: selected ? Colors.light.primary : Colors.light.accent,
      }}
      onPress={() => setSelected(!selected)}
    >
      <Text style={{ color: !selected ? Colors.light.textsub : "white" }}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default Selector;
