import {
  View,
  Text,
  StatusBar,
  ColorValue,
  TextInput,
  Pressable,
} from "react-native";
import { StyleSheet } from "react-native";
import { palette, theme } from "../../assets/styles/theme";
import { fontSizes, size } from "../../assets/styles/size";
import { router } from "expo-router";

export default function SignUp() {
  return (
    <View className="bg-purple w-full h-full flex items-center justify-center">
      <>
        <Text className="text-white text-4xl">Create Account</Text>

        <Text className="text-white text-base mt-4 w-[80%] text-center">
          Start Your Journey to a Brighter Mood Today.
        </Text>
      </>

      <>
        <TextInput
          className="bg-white w-3/4 h-12 mt-4 p-2 rounded-lg"
          placeholder="Email"
          textContentType="emailAddress"
        />

        <TextInput
          className="bg-white w-3/4 h-12 mt-4 p-2 rounded-lg"
          placeholder="Password"
          textContentType="password"
          secureTextEntry
        />

        <TextInput
          className="bg-white w-3/4 h-12 mt-4 p-2 rounded-lg"
          placeholder="Confirm Password"
          textContentType="password"
          secureTextEntry
        />
      </>

      <>
        <Pressable
          className="bg-milky w-3/4 h-12 mt-8 p-2 rounded-lg items-center justify-center"
          onPress={() => console.log("Login button pressed")}
        >
          <Text className="text-darkPurple text-base font-bold">Create</Text>
        </Pressable>

        <Pressable
          className="bg-darkPurple w-3/4 h-12 mt-4 p-2 rounded-lg items-center justify-center"
          onPress={() => router.dismiss()}
        >
          <Text className="text-milky text-base font-bold">Login</Text>
        </Pressable>
      </>
    </View>
  );
}
