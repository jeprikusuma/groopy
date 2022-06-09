import React, {useState} from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, Dimensions, Modal, Linking } from 'react-native';
import { withTheme, Avatar, Button } from 'react-native-paper';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEdit, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Profile = ({theme, navigation, route}) => {
    const {color, layout, text} = theme;
    const [modalVisible, setModalVisible] = useState(false);

    const clearData = async () => {
        try {
          await AsyncStorage.removeItem('@user_data');
        //   setData(null)
        } catch(e) {
          // clear error
        }
    }

    const styles = StyleSheet.create({
        content:{
            minHeight: Dimensions.get('window').height
        },
        area: {
            alignSelf: 'stretch',
            marginVertical: 10
        },
        info: {
            backgroundColor: '#fff',
            alignSelf: 'stretch',
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 20,
            borderRadius: 15,
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5,
            alignItems: 'center'
        },
        detail: {
            flexDirection: 'row',
            alignItems: 'center'
        },
        detailPersonal:{
            marginLeft: 15,
            flexShrink: 1,
        },
        profile: {
            flexDirection: 'row',
            marginTop: 5
        },
        more: {
            marginTop: 5
        },
        list: {
            marginHorizontal: 15,
        },
        ul: {
            marginVertical: 4
        },
        link: {
            backgroundColor: '#fff',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 15,
            marginVertical: 7,
            borderRadius: 10,
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 1,
            },
            shadowOpacity: 0.1,
            shadowRadius: 3.84,

            elevation: 5,
        },
        modal: {
            justifyContent: 'center',
            alignItems: 'center',
            height: Dimensions.get('screen').height,
            width: Dimensions.get('screen').width,
            backgroundColor: 'rgba(0, 0, 0, 0.5)'
        },
        modalContent: {
            backgroundColor: '#fff',
            padding: 20,
            borderRadius: 15,
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 9,
            },
            shadowOpacity: 0.70,
            shadowRadius: 12.35,
            elevation: 19,
        },
        modalButtons: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 10
        },
        button:{
            borderRadius: 40,
            justifyContent: 'center',
            marginHorizontal: 5
        },
        enter:{
            backgroundColor: color.red,
        },
        learn:{
            backgroundColor: '#fff',
        },
        label:{
            textTransform: 'capitalize',
            paddingVertical: 4,
            paddingHorizontal: 12,
            fontSize: 14
        },
    });

    const logoutHandler = () => {
        clearData();
        navigation.reset({index: 0, routes: [{ name: 'Login'}]});
    }

    return(
        <ScrollView>
            <View style={{...styles.content, ...layout.container}}>
                {/* Info */}
                <View style={styles.area}>
                    <TouchableOpacity style={styles.info}>
                        <View style={styles.detail}>
                            <Avatar.Image source={{uri: route.params.user.photoUrl}} style={styles.detailImage}/>
                            <View style={styles.detailPersonal}>
                                <Text style={text.subtitle}>{route.params.user.name}</Text>
                                <Text style={text.paragraph}>{route.params.user.email}</Text>
                            </View>
                        </View>
                        {/* <View style={styles.icon}>
                            <FontAwesomeIcon icon={faEdit} size={25} color={color.dark} style={styles.icon}/> 
                        </View> */}
                    </TouchableOpacity>
                </View>
                {/* Profile */}
                <View style={styles.area}>
                    <Text style={text.subtitle}>Profile</Text>
                    <View style={styles.profile}>
                        <View style={styles.list}>
                            <Text style={{...styles.ul, ...text.paragraph}}>ID Card</Text>
                            <Text style={{...styles.ul, ...text.paragraph}}>Alamat</Text>
                            <Text style={{...styles.ul, ...text.paragraph}}>No. Hp</Text>
                            <Text style={{...styles.ul, ...text.paragraph}}>Login on</Text>
                        </View>
                        <View style={styles.list}>
                            <Text style={{...styles.ul, ...text.subtitle}}>{route.params.user.id}</Text>
                            <Text style={{...styles.ul, ...text.subtitle}}>-</Text>
                            <Text style={{...styles.ul, ...text.subtitle}}>-</Text>
                            <Text style={{...styles.ul, ...text.subtitle}}>{route.params.user.date}</Text>
                        </View>
                    </View>
                </View>
                {/* More */}
                <View style={styles.area}>
                    <Text style={text.subtitle}>Lainnya</Text>
                    <View style={styles.more}>
                        <TouchableOpacity style={styles.link} onPress={() => Linking.openURL('whatsapp://send?text=&phone=+628981581382')}>
                            <Text style={text.paragraph}>Hubungi Groopy</Text>
                            <FontAwesomeIcon icon={faChevronRight} size={16} color={color.dark} style={styles.icon}/> 
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.link}>
                            <Text style={text.paragraph}>Privacy Policy</Text>
                            <FontAwesomeIcon icon={faChevronRight} size={16} color={color.dark} style={styles.icon}/> 
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.link} onPress={() => setModalVisible(true)}>
                            <Text style={text.paragraph}>Logout</Text>
                            <FontAwesomeIcon icon={faChevronRight} size={16} color={color.dark} style={styles.icon}/> 
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                setModalVisible(false);
                }}
            >
                <View style={styles.modal}>
                    <View style={styles.modalContent}>
                        <Text style={text.subtitle}>Apakah anda yakin ingin Logout?</Text>
                        <View style={styles.modalButtons}>
                            <Button  style={{...styles.button, ...styles.learn, ...layout.mt1}} labelStyle={{...text.subtitle, ...styles.label}} mode="contained" onPress={() => setModalVisible(false)}>
                                Batal
                            </Button>
                            <Button  style={{...styles.button, ...styles.enter, ...layout.mt1}} labelStyle={{...text.whiteSubtitle, ...styles.label}} mode="contained" onPress={() => logoutHandler()}>
                                Logout
                            </Button>
                        </View>
                    </View>
                </View>

            </Modal>
        </ScrollView>
    )
}

export default withTheme(Profile);