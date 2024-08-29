import { View, Text, Pressable, TextInput } from "react-native";
import ActionSheet, { ActionSheetRef } from "react-native-actions-sheet";
import React, { useEffect, useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Journal() {
  return (
    <SafeAreaView className="bg-purple w-full h-full">
      <Text className="text-white text-2xl font-semibold">
        How are you feeling today?
      </Text>

      <View className="bg-milky rounded-2xl mt-auto">
        <View className="p-8">
          <Text className="text-purple text-2xl font-semibold">
            Tell us about your day.
          </Text>

          <TextInput
            className="bg-white mt-4 p-2 h-[200px] rounded-lg"
            placeholder="Share your thoughts here..."
            textContentType="emailAddress"
            multiline
            numberOfLines={6}
            textAlignVertical="top"
          />

          <Pressable
            className="bg-red w-full h-12 p-2 rounded-lg items-center justify-center mt-4"
            onPress={() => console.log("Hold to speak button pressed")}
          >
            <Text className="text-white text-base font-bold">
              Hold to Speak
            </Text>
          </Pressable>

          <Pressable
            className="bg-purple w-full h-12 p-2 rounded-lg items-center justify-center mt-4"
            onPress={() => console.log("Get summary button pressed")}
          >
            <Text className="text-white text-base font-bold">
              Get a Quick Summary
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}
