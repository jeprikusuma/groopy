import React from 'react';
import { StyleSheet, View, Text, ScrollView, Image, Dimensions, TouchableOpacity } from 'react-native';
import { withTheme } from 'react-native-paper';
import * as Google from "expo-google-app-auth";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({theme, navigation}) => {
    const {color, layout, text} = theme;

    const styles = StyleSheet.create({
        screen: {
            width: Dimensions.get('screen').width,
            height: Dimensions.get('screen').height,
            overflow: 'hidden',
            justifyContent: 'center'
        },
        elements: {
            width: Dimensions.get('screen').width,
            height: Dimensions.get('screen').height,
            top: 0,
            left: 0,
            right: 0,  
            position: 'absolute'
        },
        element: {
            position: 'absolute'
        },
        e1: {
            left: 200,
            top: 0
        },
        e2: {
            right: 20,
            top: -150,
            transform: [{ rotate: '-60deg'}]
        },
        e3: {
            left: -150,
            bottom: -50,
        },
        e4: {   
            left: -50,
            bottom: -100,
            
        },
        content: {
            marginTop: -100
        },
        discover: {
            justifyContent: 'center',
            alignItems: 'center'
        },
        login: {
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: 30
        }
    });

    const logged = async (user) => {
        try {
          const jsonValue = JSON.stringify(user)
          await AsyncStorage.setItem('@user_data', jsonValue);
          navigation.reset({index: 0, routes: [{ name: 'Welcome', params:{user: user}}]});
        } catch (e) {
          console.log(e)
        }
    }

    const signInAsync = async () => {
        try {
          const { type, user } = await Google.logInAsync({
            androidClientId: `480069025917-9hhm3cgk7tnos03s6duc0k8dubsbqju8.apps.googleusercontent.com`,
            androidStandaloneAppClientId: `480069025917-6dcjhn1rml0rp591f8qd3rqp3nk64856.apps.googleusercontent.com`,
          });
    
          if (type === "success") {
            const dt = new Date();
            date = `${dt.getDate()}/${dt.getMonth()}/${dt.getFullYear()}`;
            logged({...user, ...{date: date}});
          }
        //   alert("Login status: "+type)
        } catch (error) {
          alert("LoginScreen.js 19 | error with login " + error);
        }
      };

    return (
        <ScrollView>
            <View style={{...layout.container, ...styles.screen}}>
                <View style={styles.elements}>
                    <Image source={require('../../assets/auth/component_1.png')} style={{...styles.element,...styles.e1}}/>
                    <Image source={require('../../assets/auth/component_3.png')} style={{...styles.element,...styles.e2}}/>
                    <Image source={require('../../assets/auth/component_3.png')} style={{...styles.element,...styles.e4}}/>
                    <Image source={require('../../assets/auth/component_2.png')} style={{...styles.element,...styles.e3}}/>
                </View>
                <View style={styles.content}>
                    <View style={styles.discover}>
                        <Image source={require('../../assets/auth/logo_auth.png')} style={styles.logo}/>
                        <Text style={text.logo}>Groopy</Text>
                        <Text style={text.blueSubtitle}>Your Pet Lover Partner</Text>
                    </View>
                    <View style={styles.login}>
                        <Text style={{...layout.mb1, ...text.title}}>Silahkan Login</Text>
                        <Text style={{...layout.mb1, ...text.paragraph}}>Gunakan akun anda untuk login lebih cepat</Text>
                        <TouchableOpacity onPress={() => signInAsync()}>
                            <Image source={require('../../assets/auth/login-g.png')} style={layout.mb1}/>
                        </TouchableOpacity>
                        <Text style={{...layout.mb1, ...text.blueParagraph}}>Butuh bantuan?</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default withTheme(Login);