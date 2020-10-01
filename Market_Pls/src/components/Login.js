import React from 'react';
import { Text, View, StyleSheet, Button, ImageBackground, Image, TouchableOpacity } from 'react-native'
import { TextInput } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';

const Login = ({navigation}) => {
  return (
    <ImageBackground
      style={styles.bg}
      source={require('../../assets/images/loginBg.png')}>
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
          <TouchableOpacity style={styles.button}>
            <Text style={styles.textButton}>LOGIN</Text>
          </TouchableOpacity>
          <View style={styles.view}>
            <Text style={{color: 'black'}}>Don't have an account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
              <Text style={{color: '#299889', textDecorationLine: 'underline'}}>
                Sign up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.viewLogin2}>
          <TouchableOpacity style={styles.btnLoginFacebook}>
            <Icon
              style={styles.iconInBtn}
              name="facebook-f"
              size={25}
              color={'white'}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnLoginGoogle}>
            <Icon
              style={styles.iconInBtn}
              name="google-plus"
              size={25}
              color={'white'}
            />
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

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
  viewLogin2: {
    flexDirection: 'row',
    marginVertical: 8,
  },
  btnLoginFacebook: {
    backgroundColor: '#1569AC',
    width: '45%',
    marginHorizontal: 1,
    borderRadius: 1,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    marginRight: '10%',
  },
  btnLoginGoogle: {
    backgroundColor: '#1569AC',
    width: '45%',
    marginHorizontal: 1,
    borderRadius: 1,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  iconInBtn: {
    textAlign: 'center',
    padding: 4,
  },
});

export default Login;
