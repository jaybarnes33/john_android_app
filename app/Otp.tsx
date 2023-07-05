import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
} from "react-native";
import Screen from "../components/Screen";
import Typography from "../components/Core/Typography";
import Colors from "../constants/Colors";
import NextButton from "../components/Core/NextButton";
import BackButton from "../components/Core/BackButton";
import { useRouter } from "expo-router";

const OTPScreen = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const otpInputRefs = useRef<TextInput[]>([]);

  const handleOtpChange = (index: number, value: string) => {
    const newOtp = [...otp];

    if (value !== "") {
      // Update the digit if a value is entered
      newOtp[index] = value;

      // Move focus to the next input if not at the last digit
      if (index < otp.length - 1) {
        otpInputRefs.current[index + 1]?.focus();
      }
    } else {
      // Delete the digit if the value is empty
      newOtp[index] = "";

      // Move focus to the previous input if not at the first digit
      if (index > 0) {
        otpInputRefs.current[index - 1]?.focus();
      }
    }
    setOtp(newOtp);
  };

  const router = useRouter();
  const handleVerifyOtp = () => {
    const enteredOtp = otp.join("");
    // Logic to verify the OTP
    // You can implement your own logic here, like making an API call to validate the OTP
    console.log("Verifying OTP:", enteredOtp);
    router.push("Home");
  };

  const handleResendOtp = () => {
    // Logic to resend OTP
    console.log("Resending OTP...");
  };

  return (
    <Screen>
      <View className="px-5 pt-6 h-full">
        <BackButton />

        <KeyboardAvoidingView className="my-24">
          <Typography size="sm">
            We’ve sent an SMS with an activavtion code to your phone +355 69 344
            5342.
          </Typography>
          <View className="flex-row gap-3 my-2">
            {otp.map((digit, index) => (
              <TextInput
                key={index}
                keyboardType="numeric"
                maxLength={1}
                className="w-[44px] rounded-md h-[56px] text-center border border-gray-200"
                value={digit}
                onChangeText={(value) => handleOtpChange(index, value)}
                //@ts-ignore
                ref={(ref) => (otpInputRefs.current[index] = ref)}
                autoFocus={index === 0}
              />
            ))}
          </View>
          <View className="items-center space-y-3 my-4">
            <TouchableOpacity>
              <Typography color={Colors.light.primary}>Resend</Typography>
            </TouchableOpacity>
          </View>
          <NextButton onPress={handleVerifyOtp} />
        </KeyboardAvoidingView>
      </View>
    </Screen>
  );
};

export default OTPScreen;
