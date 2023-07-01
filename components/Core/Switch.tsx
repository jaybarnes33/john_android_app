import { View } from "react-native";
import React, { useState } from "react";
import ToggleSwitch from "toggle-switch-react-native";
import Colors from "../../constants/Colors";

const Switch = () => {
  const [on, setOn] = useState<boolean>(false);
  return (
    <View className="scale-[0.55]">
      <ToggleSwitch
        animationSpeed={0.5}
        isOn={on}
        onToggle={(isOn) => setOn(isOn)}
        trackOnStyle={{
          width: 50,
          height: 24,
          backgroundColor: Colors.light.primary,
        }}
        trackOffStyle={{
          width: 50,
          height: 24,
          backgroundColor: Colors.light.accent,
        }}
        thumbOnStyle={{
          borderColor: Colors.light.primary,
          borderWidth: 2,

          borderStyle: "solid",
          width: 30,
          borderRadius: 30,
          height: 30,
        }}
        thumbOffStyle={{
          borderColor: Colors.light.accent,
          borderWidth: 2,
          shadowOpacity: 0,
          borderStyle: "solid",
          width: 30,
          borderRadius: 30,
          height: 30,
        }}
      />
    </View>
  );
};

export default Switch;
