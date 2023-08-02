import { Pressable, StyleSheet, Text, TextInput, View, Modal } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

const UserLogin = () => {
  const navigation = useNavigation();
  const [isModalVisible, setModalVisible] = useState(false);
  const [email, setEmail] = useState('');

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleForgotPassword = () => {
    console.log('Forgot Password Email:', email);
    toggleModal();
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Dadio</Text>
      </View>
      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email Id</Text>
          <TextInput
            style={styles.input}
            placeholder='Enter Email id'
            keyboardType='email-address'
            autoCapitalize='none'
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder='Enter Password'
            secureTextEntry={true}
            autoCapitalize='none'
          />
        </View>
        <Pressable style={styles.submitButton} onPress={() => navigation.navigate('Main')}>
          <Text style={styles.buttonText}>Submit</Text>
        </Pressable>
        <Pressable onPress={toggleModal}>
          <Text style={styles.forgotPassword}>Forgot Password</Text>
        </Pressable>
      </View>
      <Modal
        animationType='slide'
        transparent={true}
        visible={isModalVisible}
        onRequestClose={toggleModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalHeading}>Forgot your password?</Text>
            <TextInput
              style={styles.modalInput}
              placeholder='Enter your registered email'
              keyboardType='email-address'
              autoCapitalize='none'
              onChangeText={(text) => setEmail(text)}
            />
            <Pressable style={styles.modalSubmitButton} onPress={handleForgotPassword}>
              <Text style={styles.modalButtonText}>Submit</Text>
            </Pressable>
            <Pressable style={styles.closeButton} onPress={toggleModal}>
              <Text style={styles.closeButtonText}>X</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default UserLogin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  formContainer: {
    width: '80%',
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
  },
  submitButton: {
    backgroundColor: 'red',
    padding: 15,
    alignItems: 'center',
    borderRadius: 50,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  forgotPassword: {
    textAlign: 'center',
    marginTop: 10,
    color: 'skyblue',
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  closeButton: {
    position: 'absolute',
    top: 1,
    right: 5,
    padding: 5,
    borderRadius: 20,
    zIndex: 1,
  },
  closeButtonText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize:25
  },
  modalInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    width: 250
  },
  modalSubmitButton: {
    backgroundColor: 'red',
    padding: 15,
    alignItems: 'center',
    borderRadius: 50,
    marginTop: 20,
  },
  modalButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

