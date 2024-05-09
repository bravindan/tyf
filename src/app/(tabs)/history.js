import { StatusBar } from 'expo-status-bar';
import { Link } from 'expo-router';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function History() {
  return (
    <View style={styles.container}>
      <Text>History Screen</Text>
      <StatusBar style="dark" backgroundColor=''/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
