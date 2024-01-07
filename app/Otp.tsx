import React, { useState, useRef } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import Screen from "../components/Screen";
import Typography from "../components/Core/Typography";
import Colors from "../constants/Colors";
import NextButton from "../components/Core/NextButton";
import BackButton from "../components/Core/BackButton";
import { useNavigation, useRouter } from "expo-router";
import clsx from "clsx";
import { useAuth } from "../hooks/useAuth";

const OTPScreen = () => {
  const [otp, setOtp] = useState(["", "", "", "", ""]);
  const otpInputRefs = useRef<TextInput[]>([]);
  const [active, setActive] = useState(0);
  const [err, setErr] = useState(false);
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

  const { setAuthed } = useAuth();

  const router = useNavigation();
  const handleVerifyOtp = () => {
    const enteredOtp = otp.join("");
    if (enteredOtp.length === 5) {
      // Logic to verify the OTP
      // You can implement your own logic here, like making an API call to validate the OTP
      console.log("Verifying OTP:", enteredOtp);

      setAuthed(true);
      //@ts-ignore
      router.navigate("(drawer)", { screen: "index" });
    } else {
      setErr(true);
    }
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
          <Typography center size="xl">
            Enter code
          </Typography>
          <Typography size="sm">
            We’ve sent an SMS with an activation code to your phone +355 69 344
            5342.
          </Typography>
          <View className="flex-row justify-between w-full  mt-6  mx-auto max-w-[80%]">
            {otp.map((digit, index) => (
              <TextInput
                key={index}
                keyboardType="numeric"
                onFocus={() => setActive(index)}
                maxLength={1}
                onKeyPress={({ nativeEvent }) => {
                  if (nativeEvent.key === "Backspace") {
                    // If backspace is pressed and the current input is empty
                    // Move focus to the previous input and clear it
                    otpInputRefs.current[index - 1]?.focus();
                    digit === ""
                      ? handleOtpChange(index - 1, "")
                      : handleOtpChange(index, ""); // Clear the previous input
                  }
                  // if (digit.length) {
                  //   otpInputRefs.current[index + 1]?.focus();
                  //   handleOtpChange(index + 1, nativeEvent.key);
                  // }
                }}
                className={clsx([
                  "w-[44px]  md:w-[105px] rounded-md h-[56px] md:h-[126px] text-center md:text-4xl border-2 border-[#495057]",
                  active === index && "border-blue-500",
                ])}
                value={digit}
                onChangeText={(value) => handleOtpChange(index, value)}
                //@ts-ignore
                ref={(ref) => (otpInputRefs.current[index] = ref)}
                autoFocus={index === 0}
              />
            ))}
          </View>
          <View className="items-center space-y-3 my-4">
            {err && !otp.join("").length && (
              <View className="flex-row mx-5 items-center">
                <Feather name="alert-triangle" size={20} color="red" />
                <Typography>
                  There’s an issue with the code you entered
                </Typography>
              </View>
            )}
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
