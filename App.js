import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
// Import NavigationContainer dan createNativeStackNavigator
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// melakukan perpindahan halaman
 const HomeScreen = ({ navigation }) => {
   return (
     <View style={styles.container}>
       <Text>Home Screen</Text>
       <Button
         title="Pergi ke Progate"
         onPress={() => navigation.navigate('Progate')}
       />
     </View>
   )
 }


// perpindahan data antar halaman
 const ProgateScreen = ({ navigation }) => {
   return (
     <View style={styles.container}>
       <Text>Welcome to Progate!</Text>
       <Button title="Kembali" onPress={() => navigation.goBack()} />
     </View>
   )
 }


// Membuat NativeStackNavigator dan menetapkanya ke sebuah constant yang diberi nama Stack
const Stack = createNativeStackNavigator()

const App = () => {
  return (
    // Membuat NativeStackNavigator dan menetapkanya ke sebuah constant yang diberi nama Stack
    // Code yang berhubungan dengan navigasi harus dibungkus dengan <NavigationContainer>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        {/* Tambahkan ProgateScreen */}
        <Stack.Screen name="Progate" component={ProgateScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default App