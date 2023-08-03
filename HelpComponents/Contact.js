import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const Contact = () => {
  const [data,setDate] = useState('');

  const About = async() => {
    const response = await fetch('https://www.dadio.in/apps/serverapi/server/save-aboutus.php?api_key=HASH490J669&user_id=2&aboutus_field=ok%20google');
    const data = await response.json();
    setDate(data);
  }
  console.log("about ", data)
  useEffect(()=> {
   About();
  },[])
  return (
    <View>
      <Text>contact</Text>
    </View>
  )
}

export default Contact

const styles = StyleSheet.create({})