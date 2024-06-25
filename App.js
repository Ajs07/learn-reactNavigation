import React from 'react'
import { View, Text, StyleSheet, Button, Image } from 'react-native'
// Import NavigationContainer dan createBottomTabNavigator
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
// Import kedua logo home dan progate 
import HomeIcon from './assets/bottomTabIcons/home.png'
import ProgateIcon from './assets/bottomTabIcons/progate.png'

// Tab Navigation adalah menu pada aplikasi yang biasanya terletak pada bawah sendiri atau atas sendiri.

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.marginBottom20}>Home Screen</Text>
      <Button
        style={styles.button}
        title="Pergi ke Progate"
        onPress={() => {
          navigation.navigate('Progate')
        }}
      />
    </View>
  )
}

const ProgateScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Welcome to Progate</Text>
      <Text style={styles.marginBottom20}>Ayo belajar!</Text>
      <Button title="Kembali" onPress={() => navigation.goBack()} />
    </View>
  )
}

// Membuat BottomTabNavigator dan menetapkanya ke sebuah constant yang diberi nama Tab
const Tab = createBottomTabNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        {/*Membuat sebuah tab dan bisa menambah option untuk mengganti bagaimana sebuah tab akan terlihat. Pastikan bahwa tabBarIcon merupakan sebuah function. */}
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: () => (
              <Image source={HomeIcon} style={styles.homeIcon} />
            ),
          }}
        />
        <Tab.Screen
          name="Progate"
          component={ProgateScreen}
          options={{
            tabBarLabel: 'Progate',
            tabBarIcon: () => (
              <Image source={ProgateIcon} style={styles.progateIcon} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  marginBottom20: {
    marginBottom: 20,
  },
  homeIcon: {
    width: 20,
    height: 20,
  },
  progateIcon: {
    width: 40,
    height: 40,
  },
})


export default App