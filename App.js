import React, {useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import AuthNavigation from './src/pages/Navigation/AuthNavigation';
import {initializeApp, getApps, getApp} from 'firebase/app';
import { LogBox } from 'react-native';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  color: {
    ...DefaultTheme.color,
    primary: '#0175F0',
    secondary: '#CDE8FF',
    grey: '#EFEFEF',
    red: '#DE7676',
    dark: '#585858',
    redBg:'#FCDEDE',
    blue: '#37AEE4',
    blueBg: '#DEF0FC',
    yellowBg: '#FFC391',
    orangeBg: '#FEC13C',
    orange: '#C39C53'
  },
  layout: {
    ...DefaultTheme.layout,
    container:{
      flex: 1,
      backgroundColor: '#F4FAFF',
      alignItems: 'center',
      paddingTop: 20,
      paddingBottom: 40,
      paddingRight: 20,
      paddingLeft: 20,
    },
    ml1:{
      marginLeft: 16
    },
    mr1:{
        marginRight: 16
    },
    mb1:{
        marginBottom: 16
    },
    mt1:{
        marginTop: 16
    }
  },
  text:{
    ...DefaultTheme.text,
    superTitle:{
      fontSize: 24,
      fontWeight: 'bold',
      color: '#585858',
      lineHeight: 35
    },
    logo:{
      fontSize: 50,
      fontWeight: 'bold',
      color: '#585858'
    },
    title:{
      fontSize: 20,
      fontWeight: 'bold',
      color: '#585858'
    },
    titleBold:{
      fontSize: 18,
      fontWeight: 'bold',
      color: '#0175F0'
    },
    subtitle:{
      fontSize: 16,
      fontWeight: 'bold',
      color: '#585858'
    },
    paragraph:{
      fontSize: 16,
      color: '#585858'
    },
    paragraphBold:{
      fontSize: 16,
      color: '#585858',
      fontWeight: 'bold'
    },
    paragraphLight:{
      fontSize: 11,
      color: '#585858',
    },
    blueTitle:{
      fontSize: 26,
      fontWeight: 'bold',
      color: '#0175F0'
    },
    blueSubtitle:{
      fontSize: 16,
      fontWeight: 'bold',
      color: '#0175F0'
    },
    blueParagraph:{
      fontSize: 16,
      color: '#0175F0'
    },
    redSubtitle:{
      fontSize: 16,
      fontWeight: 'bold',
      color: '#FA4D4D'
    },
    redParagraph:{
      fontSize: 16,
      color: '#FA4D4D'
    },
    primaryParagraph:{
      fontSize: 16,
      color: '#0175F0'
    },
    whiteParagraph:{
      fontSize: 16,
      color: '#fff'
    },
    whiteSubtitle:{
      fontSize: 16,
      fontWeight: 'bold',
      color: '#ffffff'
    },
    whiteLogo:{
      fontSize: 50,
      fontWeight: 'bold',
      color: '#fff'
    },
    link: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#0175F0'
    },
    cardTitle:{
      fontSize: 20,
      fontWeight: 'bold',
      color: '#0175F0'
    },
  }
};

export default function App() {
  useEffect(() => {
    const firebaseConfig = {
      apiKey: "AIzaSyDGW23806U3QhPkoyQB_LLN0Eeio87GDD8",
      authDomain: "groopy-331212.firebaseapp.com",
      projectId: "groopy-331212",
      storageBucket: "groopy-331212.appspot.com",
      messagingSenderId: "480069025917",
      appId: "1:480069025917:web:cb13cb5a8279a61828f114",
      measurementId: "G-54YQCXYMJV"
    };
    
    getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
    LogBox.ignoreLogs(['Setting a timer']);
  }, [])

  return (
    <PaperProvider theme={theme} style={{backgroundColor: 'white'}}>
      <StatusBar backgroundColor='white'/>
      <AuthNavigation />
    </PaperProvider>
  );

}

