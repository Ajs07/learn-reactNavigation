import React from 'react'
import { View, TextInput, Button, StyleSheet } from 'react-native'

const Contact = () => {
  return (
    <View style={styles.container}>
      <TextInput placeholder="Nama Anda" style={styles.textInput} />
      <TextInput placeholder="Pesan" style={styles.textInput} />
      <View style={styles.buttonContainer}>
        <Button title="Kirim" />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 30,
  },
  textInput: {
    height: 60,
    borderWidth: 1,
    padding: 10,
    marginTop: 20,
  },
  buttonContainer: {
    marginTop: 20,
  },
})

export default Contact