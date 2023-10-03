import { KeyboardAvoidingView, View } from "react-native";
import React, { Dispatch, SetStateAction, useState } from "react";
import Screen from "../components/Screen";
import BackButton from "../components/Core/BackButton";
import Typography from "../components/Core/Typography";
import Colors from "../constants/Colors";
import { FocusInput } from "../components/Core/Input";
import { useRouter } from "expo-router";
import NextButton from "../components/Core/NextButton";
import CountrySelector, { Country } from "../components/Core/CountrySelector";
const Auth = () => {
  const router = useRouter();

  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState<Country>({
    name: "",
    flag: "",
    code: "",
    phone: "+",
  });
  const [error, setError] = useState({
    phone: false,
    country: false,
  });

  const handleSubmit = () => {
    if (!phone) {
      setError((error) => ({ ...error, phone: true }));
      return;
    }
    if (!country.name) {
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
          <Typography size="xl" center>
            Your phone number
          </Typography>
          <Typography
            size="sm"
            center
            color={Colors.light.textheadsub}
            classes="my-3"
          >
            Please confirm your country code and enter your phone number
          </Typography>
          <View>
            <CountrySelector selected={country} setSelected={setCountry} />

            {error.country && (
              <Typography size="xs" color="red">
                Country is required
              </Typography>
            )}
            <FocusInput
              label="Phone number"
              placeholder="Enter Phone"
              side={`${country.flag} ${country.phone}`}
              onChange={setPhone as Dispatch<SetStateAction<string>>}
            />
            {error.phone && (
              <Typography color="red" size="xs">
                Phone is required
              </Typography>
            )}
          </View>
        </View>
        <Typography
          center
          classes="my-6 underline z-[-1]"
          size="sm"
          color="#7a8dff"
        >
          Login with QR code
        </Typography>
        <NextButton onPress={handleSubmit} />
      </KeyboardAvoidingView>
    </Screen>
  );
};

export default Auth;
