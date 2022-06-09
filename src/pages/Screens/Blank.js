import React, {useEffect} from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import { withTheme } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Blank = (props) => {
    const { color, text, layout } = props.theme;

    const styles = StyleSheet.create({
        blank: {
            flex:1,
            width:Dimensions.get('screen').width,
            height:Dimensions.get('screen').height,
            position: 'absolute',
            justifyContent: 'center',
            alignItems: 'center',
        },
        blankImg: {
            marginVertical: 20
        }
    });

    const clearData = async () => {
        try {
          await AsyncStorage.clear()
          setData(null)
        } catch(e) {
          // clear error
        }
    }

    const getData = async () => {
        try {         
            const jsonValue = await AsyncStorage.getItem('@user_data');

            if(jsonValue != null){
                const user = JSON.parse(jsonValue);
                props.navigation.reset({index: 0, routes: [{ name: 'Tabs', params: {user: user}}]});
            }else{
                props.navigation.reset({index: 0, routes: [{ name: 'Login' }]});
            }

        } catch(e) {
            console.log(e)
        }

    }

    useEffect(() => {getData()}
    ,[]);
    
    return (
        <View style={styles.blank}>
            <Image style={styles.blankImg} source={require('../../assets/auth/logo_auth.png')}/>
            <Text style={text.blueTitle}>
                Groopy
            </Text>
        </View>

    );
}

  export default withTheme(Blank);
  