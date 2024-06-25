import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const ProgateService = () => {
  return (
    <View style={styles.container}>
      <Text style={[styles.title, styles.marginBottom20]}>
        Welcome to Progate!
      </Text>
      <Text>Progate is an online platform where you can learn coding.</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
  },
  marginBottom20: {
    marginBottom: 20,
  },
})

export default ProgateService