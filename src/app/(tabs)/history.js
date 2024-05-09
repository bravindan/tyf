import { StatusBar } from 'expo-status-bar';
import { Link } from 'expo-router';
import {  Text, View, TouchableOpacity } from 'react-native';

export default function History() {
  return (
    <View className="flex-1 p-2">
      <Text className="font-semibold text-center">History</Text>
      <StatusBar style="dark" backgroundColor=''/>
    </View>
  );
}

