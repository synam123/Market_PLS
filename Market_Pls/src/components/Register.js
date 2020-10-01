import React from 'react';
import { Text, View, StyleSheet, ImageBackground, Image, TouchableOpacity } from 'react-native'
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';

const Register = ({navigation}) => {
    return (
      <ImageBackground
        style={styles.bg}
        source={require('../../assets/images/loginBg.png')}>
        <ScrollView>
          <View style={styles.container}>
            <View style={styles.logoContainer}>
              <Image
                style={styles.logo}
                source={require('../../assets/images/Landing.png')}
              />
            </View>
            <View style={styles.content}>
              <Image
                source={require('../../assets/images/Logo.png')}
                style={{
                  width: '40%',
                  height: 70,
                  resizeMode: 'stretch',
                }}
              />
              <View style={styles.inputCon}>
                <Icon name="envelope" size={30} color="gray" />
                <TextInput placeholder="E-mail" style={styles.input} />
              </View>
              <View style={styles.inputCon}>
                <Icon name="lock" size={30} color="gray" />
                <TextInput
                  secureTextEntry={true}
                  placeholder="Password"
                  style={styles.input}
                />
              </View>
              <View style={styles.inputCon}>
                <Icon name="lock" size={30} color="gray" />
                <TextInput
                  secureTextEntry={true}
                  placeholder="Confirm-Password"
                  style={styles.input}
                />
              </View>
              <View style={styles.inputCon}>
                <Icon name="user" size={30} color="gray" />
                <TextInput placeholder="Full name" style={styles.input} />
              </View>
              <View style={styles.inputCon}>
                <Icon name="phone" size={30} color="gray" />
                <TextInput placeholder="Phone number" style={styles.input} />
              </View>
              <View style={styles.inputCon}>
                <Icon name="calendar" size={30} color="gray" />
                <TextInput placeholder="Birthday" style={styles.input} />
              </View>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.textButton}>SIGN UP</Text>
              </TouchableOpacity>
              <View style={styles.view}>
                <Text style={{color: 'black'}}>Do you have an account? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                  <Text
                    style={{color: '#299889', textDecorationLine: 'underline'}}>
                    Sign in
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
    paddingVertical: 5,
    borderRadius: 20,
    borderWidth: 5,
    borderColor: 'rgba(0,0,0,0.2)',
  },
  bg: {
    flex: 1,
    resizeMode: 'stretch',
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  logo: {
    width: 150,
    height: 100,
    resizeMode: 'contain',
  },
  inputCon: {
    flexDirection: 'row',
    margin: 7,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderBottomWidth: 2,
    borderBottomColor: 'rgba(0,0,0,0.2)',
  },
  input: {
    minWidth: '70%',
    paddingHorizontal: 10,
    fontSize: 16,
    height: 39,
  },
  button: {
    backgroundColor: '#299889',
    padding: 10,
    marginTop: 15,
    borderRadius: 7,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  textButton: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginHorizontal: '25%',
  },
  view: {
    flexDirection: 'row',
    marginVertical: 15,
    justifyContent: 'center',
  },
});

export default Register;