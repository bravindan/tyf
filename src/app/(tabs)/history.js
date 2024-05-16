import { StatusBar } from 'expo-status-bar';
import { Link } from 'expo-router';
import {  Text, View,ScrollView, TouchableOpacity } from 'react-native';

export default function History() {
  const hist =[
    {day:"1/1/24", hours: "24hrs"},
    {day:"7/1/24", hours: "24hrs"},
    {day:"15/1/24", hours: "24hrs"},
    {day:"22/1/24", hours: "24hrs"},
    {day:"30/1/24", hours: "24hrs"},
    {day:"30/1/24", hours: "24hrs"},
    {day:"30/1/24", hours: "24hrs"},
    {day:"30/1/24", hours: "24hrs"},
    {day:"30/1/24", hours: "24hrs"},
    {day:"30/1/24", hours: "24hrs"},
    {day:"30/1/24", hours: "24hrs"},
    {day:"30/1/24", hours: "24hrs"},
    
  ]
  return (
    <View className="flex-1 p-2 bg-gray-300">
      <Text className="font-bold text-center">Filter</Text>
      <StatusBar style="light" backgroundColor=''/>
      <ScrollView>
        {hist.reverse().map((item,index)=>(
          <View key={index} className="p-1">
            <View className="flex-1  bg-blue-950 p-2 rounded-lg">
              <Text className="text-white">Date: {item.day} </Text>      
              <Text className="text-white">Duration: {item.hours} </Text>
            </View>
          </View>
        ) ) } 
        
       
      </ScrollView>
    </View>
  );
}

