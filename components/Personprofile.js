import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Personprofile = () => {
  return (
    <View style={styles.head}>
      <Text>Personprofile</Text>
    </View>
  )
}

export default Personprofile

const styles = StyleSheet.create({
    head: {
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
})