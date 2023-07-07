import { View, SafeAreaView, ScrollView } from "react-native";
import React from "react";

import {
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import Colors from "../constants/Colors";
import Typography from "../components/Core/Typography";

const Notifications = () => {
  return (
    <SafeAreaView className="bg-white border-t border-gray-200">
      <ScrollView>
        {new Array(5).fill(0).map((_, i) => (
          <View>
            <View className="flex-row h-14 items-center mb-2 px-6 bg-accent">
              <FontAwesome5
                name="calendar-minus"
                color={Colors.light.textsub}
                size={20}
              />
              <Typography classes="mx-3" color={Colors.light.textsub}>
                12 June
              </Typography>
            </View>
            {new Array(3).fill(0).map((_, i) => (
              <View className="flex-row gap-3 px-4 py-4 border-b border-gray-200">
                <View className="bg-[#f2f2f2] h-10 w-10 items-center justify-center border-[#bfbfbf] border rounded-xl">
                  <Ionicons name="md-person-outline" size={25} />
                </View>
                <View className="max-w-[85%]">
                  <Typography size="lg">Notification</Typography>
                  <Typography classes="pt-[10]" color="#929292">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Quas vitae saepe nesciunt nisi suscipit ea quidem, ab aut
                    consectetur. Neque.
                  </Typography>
                  <View className=" py-4 flex-row items-center">
                    <MaterialCommunityIcons
                      name="clock-outline"
                      size={20}
                      color="#929292"
                    />
                    <Typography color="#929292" classes="mx-2">
                      03:43 PM
                    </Typography>
                  </View>
                </View>
              </View>
            ))}
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Notifications;
