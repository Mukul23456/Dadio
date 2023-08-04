import { StyleSheet, Text, View,TextInput,Button, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Contact = () => {
  const [user_id, setUser_id] = useState('');
  const [contactus_subject, setContactus_subject] = useState('');
  const [contactus_message, setContactus_message] = useState('');

  const handleContactUs = async () => {
    const api_key = 'HASH490J669';
    try {
      const response = await axios.post(
        'https://www.dadio.in/apps/serverapi/server/contact-us.php',
        {
          api_key,
          user_id,
          contactus_subject,
          contactus_message,
        }
      );
      console.log(response.data); // Handle the API response as needed
      // Reset the form after successful submission
      setUser_id('');
      setContactus_subject('');
      setContactus_message('');
      Alert.alert("We received your message")
    } catch (error) {
      console.error(error);
      // Handle any errors that occurred during the API call
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact Us</Text>
      <TextInput
        style={styles.input}
        placeholder="User ID"
        value={user_id}
        onChangeText={setUser_id}
      />
      <TextInput
        style={styles.input}
        placeholder="Subject"
        value={contactus_subject}
        onChangeText={setContactus_subject}
      />
      <TextInput
        style={styles.input}
        placeholder="Message"
        multiline
        numberOfLines={4}
        value={contactus_message}
        onChangeText={setContactus_message}
      />
      <Button title="Submit" onPress={handleContactUs} />
    </View>
  );
};


export default Contact

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
});