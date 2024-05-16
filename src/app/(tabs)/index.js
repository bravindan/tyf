import { StatusBar } from 'expo-status-bar';
import { Link } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View className="flex-1 p-2 bg-gray-300">
      <StatusBar style="light" backgroundColor=''/>
      <Text className="font-semibold text-center">Boost your life, fast and track the time with ease</Text>
      <View className=" flex-1 mt-2 rounded-md bg-blue-950" >
          <Text className="text-white font-semibold text-center mt-2 text-lg">Now Fasting...</Text>
          <View className="flex-1 p-2 items-center">
            <Text className="text-white" >Time left</Text>
          </View>
      </View>
    </View>
  );
}
