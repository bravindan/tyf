import { StatusBar } from 'expo-status-bar';
import { Link } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View className="flex-1 p-2">
      <StatusBar style="dark" backgroundColor=''/>
      <Text className="font-semibold text-xl text-center">Boost your life, Fast and track the time with ease</Text>
      <View className=" flex-1 mt-2 rounded-md" style={{backgroundColor:'#9999ff'}}>
          <Text className="text-white font-semibold text-center mt-2 text-lg">Fasting</Text>
      </View>
    </View>
  );
}
// const styles = StyleSheet.create({
//   container:{
//     backgroundColor:'#9999ff'
//   }
// })