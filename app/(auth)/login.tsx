import { router } from "expo-router";
import {
  Pressable,
  Text,
  TextInput,
  View
} from "react-native";

export default function Login() {
  return (
    <View className="bg-purple w-full h-full flex items-center justify-center">
      <>
        <Text className="text-white text-4xl">Moodify</Text>

        <Text className="text-white text-base mt-4">
          Transform Your Mood, One Day at a Time.
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
      </>

      <>
        <Pressable
          className="bg-milky w-3/4 h-12 mt-8 p-2 rounded-lg items-center justify-center"
          onPress={() => console.log("Login button pressed")}
        >
          <Text className="text-darkPurple text-base font-bold">Login</Text>
        </Pressable>

        <Pressable
          onPress={() => router.push("/sign-up")}
          className="bg-darkPurple w-3/4 h-12 mt-4 p-2 rounded-lg items-center justify-center"
        >
          <Text className="text-milky text-base font-bold">Sign Up</Text>
        </Pressable>
      </>
    </View>
  );
}
