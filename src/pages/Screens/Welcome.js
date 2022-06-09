import React from 'react';
import { StyleSheet, View, Text, ScrollView, Image, Dimensions } from 'react-native';
import { withTheme, Button } from 'react-native-paper';


const Welcome = ({theme, navigation, route}) => {
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
            backgroundColor: '#0175F0',
            top: 0,
            left: 0,
            right: 0,  
            position: 'absolute'
        },
        element: {
            position: 'absolute'
        },
        e1: {
            left: -90,
            top: -100,
            
        },
        e2: {
            right: 20,
            top: 50,
            alignItems: 'center',
            justifyContent: 'center'
        },
        content: {
            alignSelf: 'stretch',
            marginTop: 100
        },
        dicover: {
            alignSelf: 'stretch',
        },
        greeting: {
            marginBottom: 20
        },
        list: {
            flexDirection: 'row',
            alignSelf: 'stretch',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 13
        },
        text: {
            flexShrink: 1,
            marginLeft: 16
        },
        buttons: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 10,
            marginTop: 30
        },
        button:{
            borderRadius: 40,
            justifyContent: 'center',
        },
        enter:{
            backgroundColor: '#004FC6',
        },
        learn:{
            backgroundColor: '#fff',
        },
        label:{
            textTransform: 'capitalize',
            paddingVertical: 7,
            paddingHorizontal: 12,
            fontSize: 16
        },
    })

    return (
        <ScrollView>
            <View style={{...layout.container, ...styles.screen}}>
                <View style={styles.elements}>
                    <Image source={require('../../assets/welcome/component.png')} style={{...styles.element,...styles.e1}}/>
                    <View style={{...styles.element,...styles.e2}}>
                        <Image source={require('../../assets/welcome/logo.png')}/>
                        <Text style={text.title}>Groopy</Text>
                    </View>
                </View>
                <View style={styles.content}>
                    <View style={styles.greeting}>
                        <Text style={text.whiteLogo}>Welcome</Text>
                        <Text style={text.whiteParagraph}>Kenali Groopy</Text>
                    </View>
                    <View style={styles.discover}>
                        <Text style={{...layout.mb1, ...text.whiteSubtitle}}>1. Temukan Layanan Peliharaan Anda</Text>
                        <View style={styles.list}>
                            <Image source={require('../../assets/welcome/component_2.png')}/>
                            <Text style={{...styles.text, ...text.whiteParagraph}}>Find and Start your Booking for your lovely Pet.</Text>
                        </View>
                        <Text style={{...layout.mb1, ...text.whiteSubtitle}}>2. Dapatkan Layanan Ke Rumah</Text>
                        <View style={styles.list}>
                            <Image source={require('../../assets/welcome/component_3.png')}/>
                            <Text style={{...styles.text, ...text.whiteParagraph}}>Get Schedule for your book and wait for our home services.</Text>
                        </View>
                    </View>
                    <View style={styles.buttons}>
                        <Button  style={{...styles.button, ...styles.learn, ...layout.mt1}} labelStyle={{...text.subtitle, ...styles.label}} mode="contained" onPress={() => console.log('Tabs')}>
                            Learn more
                        </Button>
                        <Button  style={{...styles.button, ...styles.enter, ...layout.mt1}} labelStyle={{...text.whiteSubtitle, ...styles.label}} mode="contained" onPress={() => navigation.reset({index: 0, routes: [{ name: 'Tabs', params: {user: route.params.user}}]})}>
                            Start Groopy
                        </Button>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default withTheme(Welcome);