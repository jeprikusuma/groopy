import React, {useState} from 'react';
import { StyleSheet, View, Text, ScrollView, Image, Dimensions, TouchableOpacity, Modal, TextInput } from 'react-native';
import { withTheme, Button } from 'react-native-paper';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { getFirestore, collection, doc, setDoc } from 'firebase/firestore';
import { faCalendar, faCar, faCat, faClock, faCut, faDog, faMapMarker, faPaw, faTimesCircle, faDollarSign, faUserTie, faEye } from "@fortawesome/free-solid-svg-icons";

const Grooming = ({theme, route, navigation}) => {
    const {color, layout, text} = theme;
    const [modalVisible, setModalVisible] = useState(false);
    const [pet, setPet] = useState('dog');
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [showDate, setShowDate] = useState("12/12/2021");
    const [date, setDate] = useState(0);
    const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
    const [showTime, setShowTime] = useState("14:00");
    const [time, setTime] = useState(0);
    const [address, setAddress] = useState('');
    const [note, setNote] = useState(''); 

    const styles = StyleSheet.create({
        content: {
            // alignItems: 'center',
            justifyContent: 'center',
            // height: Dimensions.get('screen').height,
        },
        discover: {
            backgroundColor: '#fff',
            alignSelf: 'stretch',
            borderRadius: 15
        },
        image: {
            width: '100%',
            height: 200,
            borderRadius: 15
        },
        text: {
            padding: 15
        },
        hr: {
            backgroundColor: color.secondary,
            height: 3,
            width: 120,
            borderRadius: 1,
            marginVertical: 13
        },
        more:{
            alignSelf: 'stretch',
            flexDirection: 'row',
            marginTop: 7
        },
        moreColumn:{
            flex: 1,
            marginHorizontal: 10
        },
        list: {
            flexDirection: 'row',
            alignItems: 'center',
            flexShrink: 1,
            marginVertical: 7
        },
        icon: {
            backgroundColor: color.secondary,
            width: 40,
            height: 40,
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',
        },
        listText: {
            marginLeft: 10,
            flexShrink: 1
        },
        button:{
            borderRadius: 40,
            justifyContent: 'center',
        },
        book:{
            backgroundColor: color.primary,
            marginTop: 30,
            marginBottom: 10
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
        modal: {
            justifyContent: 'flex-end',
            height: Dimensions.get('screen').height,
            width: Dimensions.get('screen').width,
            paddingBottom: 50,
            backgroundColor: 'rgba(0, 0, 0, 0.2)'
        },
        modalContent: {
            backgroundColor: '#fff',
            padding: 20,
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 9,
            },
            shadowOpacity: 0.70,
            shadowRadius: 12.35,
            elevation: 19,
        },
        modalTitle: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
        },
        modalService: {
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: color.secondary,
            padding: 15,
            borderRadius: 13,
            marginVertical: 13
        },
        modalServiceIcon: {
            marginRight: 10,
        },
        input: {
            marginVertical: 3
        },
        textInputDiscover: {
            alignItems: 'stretch',
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: "#F4FAFF",
            paddingRight: 16,
            borderRadius: 13,
            overflow: 'hidden',
            marginVertical: 7
        },
        textInput:{
            borderRadius: 13,
            marginVertical: 1,
            height: 53,
            paddingHorizontal: 16,
            fontSize: 16,
            overflow: 'hidden',
            backgroundColor: "#F4FAFF",
            color: color.dark,
            flex: 1
        },
        textInputDiscoverNote: {
            alignItems: 'stretch',
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: "#F4FAFF",
            paddingRight: 16,
            borderRadius: 13,
            overflow: 'hidden',
            marginVertical: 7
        },
        textInputNote:{
            borderRadius: 13,
            marginVertical: 1,
            height: 130,
            paddingHorizontal: 16,
            fontSize: 16,
            overflow: 'hidden',
            backgroundColor: "#F4FAFF",
            color: color.dark,
            flex: 1,
            textAlignVertical: 'top',
            paddingVertical: 16
        },
        options: {
            alignSelf: 'stretch',
            alignItems: 'stretch',
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginVertical: 7
        },
        option: {
            alignSelf: 'stretch',
            flex: 1,
            marginHorizontal: 5,
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 13
        }
    });

    const orderHandler = async () => {
        if(
            date != '' &&
            time != '' &&
            pet != '' &&
            address != '' &&
            note != ''
        ){
            const order = {
                date: date,
                time: time,
                pet: pet,
                address: address,
                note: note,
                title: route.params.service.title,
                tipe: route.params.service.tipe,
                userEmail: route.params.service.email,
                userName: route.params.service.name,
                userId: route.params.service.id,
                status: 'Menunggu',
            }
            setDate('');
            setShowDate('');
            setTime('');
            setAddress('');
            setNote('');
            const firestore = getFirestore();
            const newOrder = doc(collection(firestore, "order"));
            await setDoc(newOrder, order);
            navigation.navigate('BookingList');
        }else{
            navigation.goBack();
        }
    }
    const showDatePicker = () => {
        setDatePickerVisibility(true);
    }
    
    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    }
    
    const handleConfirm = (tgl) => {
        setDate(tgl);

        let show = `${tgl.getDate()}/${tgl.getMonth()+1}/${tgl.getFullYear()}`;
        setShowDate(show);
        setDatePickerVisibility(false);
    }
    const showTimePicker = () => {
        setTimePickerVisibility(true);
    }
    
    const hideTimePicker = () => {
        setTimePickerVisibility(false);
    }
    
    const handleTimeConfirm = (tm) => {
        let show = `${tm.getHours()}:${tm.getMinutes()}`;
        setTime(show);
        setShowTime(show);
        setTimePickerVisibility(false);
    }

    return(
        <ScrollView>
            <View style={{...styles.content, ...layout.container}}>
                <View style={styles.discover}>
                    {/* Image */}
                    <Image source={route.params.service.img} style={styles.image}/>
                    <View style={styles.text}>
                        {/* Title */}
                        <View style={styles.title}>
                            <Text style={text.blueTitle}>{route.params.service.title}</Text>
                            <Text style={text.subtitle}>Rp. {route.params.service.price} / Peliharaan</Text>
                            <View style={styles.hr}></View>
                        </View>
                        {/* Description */}
                        <Text style={{...layout.mb1,...text.paragraph}}>{route.params.service.desc}</Text>
                        {/* More */}
                        <Text style={text.blueSubtitle}>Detail Layanan</Text>
                        <View style={styles.more}>
                            <View style={styles.moreColumn}>
                                <TouchableOpacity style={styles.list}>
                                    <View style={styles.icon}>
                                        <FontAwesomeIcon icon={route.params.service.i1} size={25} color={color.primary} style={styles.icon}/> 
                                    </View>
                                    <Text style={{...styles.listText, ...text.paragraph}}>{route.params.service.s1}</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.list}>
                                    <View style={styles.icon}>
                                        <FontAwesomeIcon icon={route.params.service.i2} size={25} color={color.primary} style={styles.icon}/> 
                                    </View>
                                    <Text style={{...styles.listText, ...text.paragraph}}>{route.params.service.s2}</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.list}>
                                    <View style={styles.icon}>
                                        <FontAwesomeIcon icon={route.params.service.i3} size={25} color={color.primary} style={styles.icon}/> 
                                    </View>
                                    <Text style={{...styles.listText, ...text.paragraph}}>{route.params.service.s3}</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.moreColumn}>
                                <TouchableOpacity style={styles.list}>
                                    <View style={styles.icon}>
                                        <FontAwesomeIcon icon={route.params.service.i4}size={25} color={color.primary} style={styles.icon}/> 
                                    </View>
                                    <Text style={{...styles.listText, ...text.paragraph}}>{route.params.service.s4}</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.list}>
                                    <View style={styles.icon}>
                                        <FontAwesomeIcon icon={route.params.service.i5}size={25} color={color.primary} style={styles.icon}/> 
                                    </View>
                                    <Text style={{...styles.listText, ...text.paragraph}}>{route.params.service.s5}</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.list}>
                                    <View style={styles.icon}>
                                        <FontAwesomeIcon icon={route.params.service.i6} size={25} color={color.primary} style={styles.icon}/> 
                                    </View>
                                    <Text style={{...styles.listText, ...text.paragraph}}>{route.params.service.s6}</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        {/* Order */}
                        <Button  style={{...styles.button, ...styles.book}} labelStyle={{...text.whiteSubtitle, ...styles.label}} mode="contained" onPress={() => setModalVisible(true)}>
                            Booking Layanan
                        </Button>
                    </View>
                </View>
            </View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                setModalVisible(false);
                }}
            >
                <ScrollView>
                <View style={styles.modal}>
                    <View style={styles.modalContent}>
                        {/* title */}
                        <View style={styles.modalTitle}>
                            <Text style={text.blueSubtitle}>Form Booking</Text>
                            <TouchableOpacity onPress={() => setModalVisible(false)}>
                                <FontAwesomeIcon icon={faTimesCircle} size={25} color={color.dark} style={styles.modalClose}/> 
                            </TouchableOpacity>
                        </View>
                        {/* service */}
                        <View style={styles.modalService}>
                            <FontAwesomeIcon icon={faCut} size={25} color={color.primary} style={styles.modalServiceIcon}/> 
                            <Text style={text.blueSubtitle}>{route.params.service.title}</Text>
                        </View>
                        {/* form */}
                        <View style={styles.form}>
                            <View style={styles.input}>
                                <Text style={text.paragraph}>Tanggal Booking</Text>
                                <TouchableOpacity onPress={showDatePicker} style={styles.textInputDiscover}>
                                    <TextInput 
                                        style={styles.textInput}
                                        placeholder={showDate}
                                        placeholderTextColor= "#585858"
                                        autoCapitalize = 'none'
                                        editable={false}
                                    />
                                    <FontAwesomeIcon icon={faCalendar} size={20} color={color.secondary}/> 
                                </TouchableOpacity>
                            </View>
                            <View style={styles.input}>
                                <Text style={text.paragraph}>Jam Booking</Text>
                                <TouchableOpacity onPress={showTimePicker} style={styles.textInputDiscover}>
                                    <TextInput 
                                        style={styles.textInput}
                                        placeholder={showTime}
                                        placeholderTextColor= "#585858"
                                        autoCapitalize = 'none'
                                        editable={false}
                                    />
                                    <FontAwesomeIcon icon={faClock} size={20} color={color.secondary}/> 
                                </TouchableOpacity>
                            </View>
                            <View style={styles.input}>
                                <Text style={text.paragraph}>Pilih Peliharaan</Text>
                                <View style={styles.options}>
                                    <TouchableOpacity style={{...styles.option, ...{backgroundColor : pet == 'dog' ? color.secondary : '#F4FAFF'}}} onPress={() => setPet('dog')}>
                                        <FontAwesomeIcon icon={faDog} size={30} color={pet == 'dog' ? color.primary : '#585858'}/> 
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{...styles.option, ...{backgroundColor : pet == 'cat' ? color.secondary : '#F4FAFF'}}} onPress={() => setPet('cat')}>
                                        <FontAwesomeIcon icon={faCat} size={30} color={ pet == 'cat' ? color.primary : '#585858'}/> 
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{...styles.option, ...{backgroundColor : pet == 'any' ? color.secondary : '#F4FAFF'}}} onPress={() => setPet('any')}>
                                        <Text style={pet == 'any' ? text.primaryParagraph : text.paragraph}>Lainnya</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={styles.input}>
                                <Text style={text.paragraph}>Alamat Anda</Text>
                                <View style={styles.textInputDiscover}>
                                    <TextInput 
                                        style={styles.textInput}
                                        placeholder="Nama Jalan"
                                        placeholderTextColor= "#585858"
                                        autoCapitalize = 'none'
                                        onChangeText = {text => setAddress(text)}
                                    />
                                    <FontAwesomeIcon icon={faMapMarker} size={20} color={color.secondary}/> 
                                </View>
                            </View>
                            <View style={styles.input}>
                                <Text style={text.paragraph}>Catatan</Text>
                                <View style={styles.textInputDiscoverNote}>
                                    <TextInput 
                                        style={styles.textInputNote}
                                        placeholder="Tulis catatan"
                                        placeholderTextColor= "#585858"
                                        multiline = {true}
                                        autoCapitalize = 'none'
                                        onChangeText = {text => setNote(text)}
                                    />
                                </View>
                            </View>
                            <Button  style={{...styles.button, ...styles.book}} labelStyle={{...text.whiteSubtitle, ...styles.label}} mode="contained" onPress={() => orderHandler()}>
                            Booking Layanan
                        </Button>
                        </View>
                    </View>
                </View>
                </ScrollView>
            </Modal>
            {/* date picker */}
            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
            />
            <DateTimePickerModal
                isVisible={isTimePickerVisible}
                mode="time"
                onConfirm={handleTimeConfirm}
                onCancel={hideTimePicker}
            />
        </ScrollView>
    )
}
export default withTheme(Grooming);