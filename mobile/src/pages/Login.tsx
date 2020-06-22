import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Login = () => (
  <>
    <View style={styles.container}>
      <Text style={styles.text}>Your Login will appear here</Text>
    </View>
  </>
)

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: '#0a0'
  }
})
