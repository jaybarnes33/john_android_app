import { View, Text } from "react-native";
import React, { ReactNode } from "react";
import clsx from "clsx";
import { sizes } from "../../constants/sizes";

const Typography = ({
  children,
  bold,
  color,
  size,
  capitalize,
}: {
  children: ReactNode;
  bold?: boolean;
  color?: string;
  size?: string;
  capitalize?: boolean;
}) => {
  return (
    <Text
      maxFontSizeMultiplier={1}
      allowFontScaling={false}
      className={clsx([
        "font-main",
        capitalize && "capitalize",
        bold && "font-bolded",
        size == "md" && "leading-6 tracking-[0.024px]",
        size == "sm" && "leading-5",
      ])}
      style={{
        fontSize: size ? sizes[size as unknown as number] : sizes.md,
        color: color,
      }}
    >
      {children}
    </Text>
  );
};

export default Typography;
