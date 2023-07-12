import {
  KeyboardAvoidingView,
  Pressable,
  Text,
  TextInput,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import React, { Dispatch, SetStateAction, useState } from "react";
import Screen from "../components/Screen";
import BackButton from "../components/Core/BackButton";
import Typography from "../components/Core/Typography";
import Colors from "../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { FocusInput } from "../components/Core/Input";
import { useRouter } from "expo-router";
import NextButton from "../components/Core/NextButton";
import CountryPicker from "react-native-country-picker-modal";
const Auth = () => {
  const router = useRouter();
  const [data, setData] = useState({
    country: "",
    phone: "",
  });

  const [error, setError] = useState({
    phone: false,
    country: false,
  });

  const handleSubmit = () => {
    if (!data.phone) {
      setError((error) => ({ ...error, phone: true }));
      return;
    }
    if (!data.country) {
      setError((error) => ({ ...error, country: true }));
      return;
    }
    router.push("Otp");
  };
  return (
    <Screen>
      <KeyboardAvoidingView className="p-6">
        <BackButton />

        <View className="mt-[30%] space-y-6">
          <Typography size="lg" center>
            Your Phone Number
          </Typography>
          <Typography size="sm" center color={Colors.light.textheadsub}>
            Please confirm your country code and enter your phone number
          </Typography>
          <View>
            <View className="px-2 py-1 justify-between flex-row items-center w-full mb-1  border border-gray-200 rounded focus:outline-blue-500">
              {/* <TextInput
                onChangeText={(text) =>
                  setData((data) => ({ ...data, country: text }))
                }xx
                placeholder="Select country"
                className="flex-1 focus:outline-blue-500 "
              /> */}
              <CountryPicker
                countryCode="GH"
                withCountryNameButton
                withAlphaFilter
                withCallingCode
                theme={{
                  fontFamily: "Montserrat_500Medium",
                }}
                containerButtonStyle={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
                onSelect={(country) =>
                  setData((prev) => ({
                    ...prev,
                    country: country.callingCode[0],
                  }))
                }
              />
              <Ionicons
                name="chevron-forward"
                color={Colors.light.textsub}
                size={15}
              />
            </View>
            {error.country && (
              <Typography size="xs" color="red">
                Country is required
              </Typography>
            )}
            <FocusInput
              label="Phone number"
              placeholder="Enter Phone"
              field="phone"
              side={data.country}
              onChange={
                setData as Dispatch<SetStateAction<Record<string, string>>>
              }
            />
            {error.phone && (
              <Typography color="red" size="xs">
                Phone is required
              </Typography>
            )}
          </View>
        </View>
        <NextButton onPress={handleSubmit} />
      </KeyboardAvoidingView>
    </Screen>
  );
};

export default Auth;
