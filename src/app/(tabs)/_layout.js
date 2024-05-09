import { Tabs } from "expo-router";
import FontAwesome from '@expo/vector-icons/FontAwesome';


export default function HomeLayout(){
    return (
        <Tabs screenOptions={{  
            headerStyle: {backgroundColor: '#9999ff',},
            tabBarActiveTintColor: '#9999ff',
            headerTintColor: '#fff',
            headerTitleStyle: {fontWeight: 'bold',},           
        }}>
            <Tabs.Screen name="index"
                options={{
                    title:"Track Your Fast",
                    tabBarIcon:({color})=><FontAwesome size={26} name="home" color={color}/>,
                    headerRight:()=><FontAwesome size={26} name="plus" color='#fff'/>,
                }}
            />
            <Tabs.Screen name="history"
                options={{
                    title:"History",
                    tabBarIcon:({color})=><FontAwesome size={26} name="history" color={color}/>,
                }}
            />
        </Tabs>
    )           
}