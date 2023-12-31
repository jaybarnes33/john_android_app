import React, { useState, useRef, ReactNode } from "react";
import {
  View,
  Text,
  TouchableWithoutFeedback,
  StyleSheet,
  Animated,
  Easing,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const AccordionListItem = ({
  title,
  children,
}: {
  title: ReactNode;
  children: ReactNode;
}) => {
  const [open, setOpen] = useState(false);
  const animatedController = useRef(new Animated.Value(0)).current;
  const [bodySectionHeight, setBodySectionHeight] = useState<number>(0);

  const bodyHeight = animatedController.interpolate({
    inputRange: [0, 1],
    outputRange: [0, bodySectionHeight],
  });

  const arrowAngle = animatedController.interpolate({
    inputRange: [0, 1],
    outputRange: ["0rad", `${Math.PI}rad`],
  });

  const toggleListItem = () => {
    if (open) {
      Animated.timing(animatedController, {
        duration: 300,
        toValue: 0,
        useNativeDriver: false,
        easing: Easing.bezier(0.4, 0.0, 0.2, 1),
      }).start();
    } else {
      Animated.timing(animatedController, {
        duration: 300,
        toValue: 1,
        useNativeDriver: false,
        easing: Easing.bezier(0.4, 0.0, 0.2, 1),
      }).start();
    }
    setOpen(!open);
  };

  return (
    <View>
      <TouchableWithoutFeedback onPress={() => toggleListItem()}>
        <View className="flex-row  border-b border-neutral-200 items-center p-4 bg-white">
          {title}
          <Animated.View style={{ transform: [{ rotateZ: arrowAngle }] }}>
            <MaterialIcons name="keyboard-arrow-down" size={20} color="black" />
          </Animated.View>
        </View>
      </TouchableWithoutFeedback>
      <Animated.View style={[styles.bodyBackground, { height: bodyHeight }]}>
        <View
          style={styles.bodyContainer}
          onLayout={(event) =>
            setBodySectionHeight(event.nativeEvent.layout.height)
          }
        >
          {children}
        </View>
      </Animated.View>
    </View>
  );
};
export default AccordionListItem;

const styles = StyleSheet.create({
  bodyBackground: {
    backgroundColor: "#EFEFEF",
    overflow: "hidden",
  },
  titleContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#EFEFEF",
  },
  bodyContainer: {
    position: "absolute",
    bottom: 0,
  },
});
