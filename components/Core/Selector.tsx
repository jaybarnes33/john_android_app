import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import clsx from "clsx";
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
        `w-[45%]  py-3 rounded-full  mr-4  mb-2 items-center justify-between`,
        selected ? `bg-primary` : `bg-neutral-100`,
      ])}
      onPress={() => setSelected(!selected)}
    >
      <Text className={clsx([selected && "text-white"])}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Selector;
