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
  
  export default function SignUp() {
    return (
      <View className="bg-purple w-full h-full flex items-center justify-center">
        <>
          <Text className="text-white text-4xl">Create </Text>
  
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
            className="bg-darkPurple w-3/4 h-12 mt-4 p-2 rounded-lg items-center justify-center"
            onPress={() => console.log("Sign up button pressed")}
          >
            <Text className="text-milky text-base font-bold">Sign Up</Text>
          </Pressable>
        </>
      </View>
    );
  }
  