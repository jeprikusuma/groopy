import React from 'react';
import { StyleSheet, View, Text, ScrollView, Image, Linking } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { withTheme, Button } from 'react-native-paper';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCalendar, faCar, faHotel, faMedkit, faClock, faCut, faDog, faPaw,  faDollarSign, faUserTie, faEye, faUserMd, faUsers, faStethoscope, faCommentDollar, faSyringe, faVirusSlash, faHeartbeat,  faBone, faHome, faShieldAlt, faHands, faCloudSun, faToolbox } from "@fortawesome/free-solid-svg-icons";

const Home = ({theme, navigation, route}) => {
    const {color, layout, text} = theme;

    const styles = StyleSheet.create({
        content:{
            // minHeight: Dimensions.get('screen').height,
            backgroundColor: '#F4FAFF',
        },
        header: {
            alignSelf: 'stretch',
            backgroundColor: 'white',
            paddingHorizontal: 20,
            paddingTop: 10,
            paddingBottom: 30,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.90,
            shadowRadius: 1.35,
            elevation: 5,
            marginBottom: 10
        },
        area: {
            alignSelf: 'stretch',
            marginVertical: 10,
            paddingHorizontal: 20,
            backgroundColor: '#F4FAFF',
        },
        services: {
            alignSelf: 'stretch',
            marginTop: 10
        },
        servicesRow: {
            alignSelf: 'stretch',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: 10,
            paddingHorizontal: 25
        },
        service: {
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#fff',
            width: 130,
            height: 140,
            borderRadius: 25,
            borderColor: color.secondary,
            borderWidth: 1,
        },
        serviceIcon: {
            width:30,
            height: 30
        },
        icon: {
            marginVertical: 10
        },
        tips: {
            alignSelf: 'stretch',
            marginTop: 10
        },
        tip: {
            width: 300,
            height: 150,
            borderRadius: 20,
            overflow: 'hidden',
            marginRight: 15
        },
        tipImage: {
            width: '100%',
            height: '100%'
        },
        tipInfo: {
            position: 'absolute',
            top: 0,
            right: 0,
            height: '100%',
            width: '45%',
            backgroundColor: 'rgba(1, 117, 240, 0.5)',
            padding: 10
        },
        button:{
            borderRadius: 40,
            justifyContent: 'center',
        },
        tipButton:{
            backgroundColor: '#004FC6',
        },
        tipLabel:{
            textTransform: 'capitalize',
            paddingVertical: 4,
            paddingHorizontal: 5,
            fontSize: 12
        },
        wa: {
            flexDirection: 'row',
            alignSelf: 'stretch',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 15
        },
        waButton:{
            backgroundColor: '#1EBE5E',
        },
        waLabel:{
            textTransform: 'capitalize',
            paddingVertical: 4,
            paddingHorizontal: 10,
            fontSize: 16
        },
    })
    
    const services = {
        grooming: {
            tipe: 'grooming',
            title: 'Paket Grooming',
            price: '65.000',
            desc: "Melayani dengan sepenuh hati, sentuhan perawatan untuk hewan kesayangan anda.",
            img: require('../../assets/services/grooming.jpg'),
            id: route.params.user.id,
            name: route.params.user.name,
            email: route.params.user.email,
            s1: '7 hari kerja',
            s2: 'Layanan ke rumah',
            s3: 'Booking minimal H-1',
            s4: 'Harga terjangkau',
            s5: 'Tenaga handal',
            s6: 'Mudah dipantau',
            i1: faClock,
            i2: faCar,
            i3: faCalendar,
            i4: faDollarSign,
            i5: faUserTie,
            i6: faEye
        },
        penitipan: {
            tipe: 'penitipan',
            title: 'Paket Penitipan',
            price: '50.000',
            desc: "Memberikan kenyamanan untuk hewan kesayangan anda dengan suasana yang asri dan nyaman.",
            img: require('../../assets/services/penitipan.jpg'),
            id: route.params.user.id,
            name: route.params.user.name,
            email: route.params.user.email,
            s1: 'Vaksin lengkap',
            s2: 'Tidak kutuan',
            s3: 'Keadaan sehat',
            s4: 'Makanan disesuaikan',
            s5: 'Diumbar setiap sore',
            s6: 'Kandang yang nyaman',
            i1: faSyringe,
            i2: faVirusSlash,
            i3: faHeartbeat,
            i4: faBone,
            i5: faPaw,
            i6: faHome
        },
        kesehatan: {
            tipe: 'kesehatan',
            title: 'Paket Kesehatan',
            price: '70.000',
            desc: "Jangan kuatir ketika hewan peliharaan anda mengalami gangguan kesehatan segera gunakan layanan kami.",
            img: require('../../assets/services/kesehatan.jpg'),
            id: route.params.user.id,
            name: route.params.user.name,
            email: route.params.user.email,
            s1: 'Dokter yang berpengalaman',
            s2: 'Harga terjangkau',
            s3: 'Relasi dokter hewan',
            s4: 'Konsultasi gratis',
            s5: 'Peralatan yang lengkap',
            s6: 'Siap datang ke rumah',
            i1: faUserMd,
            i2: faDollarSign,
            i3: faUsers,
            i4: faCommentDollar,
            i5: faStethoscope,
            i6: faCar

        },
        // training: {
        //     tipe: 'training',
        //     title: 'Paket Training',
        //     price: '100.000',
        //     desc: "Ingin hewan peliharaan anda terlatih dengan baik? Yapp kami solusi ditangani oleh tenaga profesional.",
        //     img: require('../../assets/services/training.jpg'),
        //     id: route.params.user.id,
        //     name: route.params.user.name,
        //     email: route.params.user.email,
        //     s1: 'Aman',
        //     s2: 'Nyaman',
        //     s3: 'Tempat outdoor',
        //     s4: 'Perintah umum',
        //     s5: 'Peralatan yang lengkap',
        //     s6: 'Jogging sore',
        //     i1: faShieldAlt,
        //     i2: faHands,
        //     i3: faCloudSun,
        //     i4: faDog,
        //     i5: faToolbox,
        //     i6: faPaw
        // },
    }

    return(
        <ScrollView>
            <View style={styles.content}>
                {/* Header */}
                <View style={styles.header}>
                    <Text style={text.paragraph}>Discover</Text>
                    <Text style={text.cardTitle}>Temukan Layanan Peliharaan Anda</Text>
                </View>
                {/* Layanan */}
                <View style={styles.area}>
                    <Text style={text.subtitle}>Pilih layanan</Text>
                    <View style={styles.services}>
                        <View style={styles.servicesRow}>
                            <TouchableOpacity style={styles.service} onPress={() => navigation.navigate('Grooming', {service: services.grooming})}>
                                <FontAwesomeIcon icon={faCut} size={50} color={color.primary} style={styles.icon}/>    
                                <Text style={text.blueSubtitle}>Grooming</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.service} onPress={() => navigation.navigate('Grooming', {service: services.penitipan})}>
                                <FontAwesomeIcon icon={faHotel} size={50} color={color.primary} style={styles.icon}/>    
                                <Text style={text.blueSubtitle}>Penitipan</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.servicesRow}>
                            <TouchableOpacity style={styles.service} onPress={() => navigation.navigate('Grooming', {service: services.kesehatan})}>
                                <FontAwesomeIcon icon={faMedkit} size={50} color={color.primary} style={styles.icon}/>    
                                <Text style={text.blueSubtitle}>Kesehatan</Text>
                            </TouchableOpacity>
                            {/* <TouchableOpacity style={styles.service} onPress={() => navigation.navigate('Grooming', {service: services.training})}>
                                <FontAwesomeIcon icon={faDog} size={50} color={color.primary} style={styles.icon}/>    
                                <Text style={text.blueSubtitle}>Training</Text>
                            </TouchableOpacity> */}
                        </View>
                    </View>
                </View>
                {/* Tips */}
                <View style={styles.area}>
                    <Text style={text.subtitle}>Tips & Promo</Text>
                    <ScrollView style={styles.tips} horizontal={true} showsHorizontalScrollIndicator={false}>
                        <View style={styles.tip}>
                            <Image source={require('../../assets/services/grooming.jpg')} style={styles.tipImage}/>
                            <View style={styles.tipInfo}>
                                <Text style={text.whiteSubtitle}>Paket Grooming Disc. 20%</Text>
                                <Button  style={{...styles.button, ...styles.tipButton, ...layout.mt1}} labelStyle={{...text.whiteSubtitle, ...styles.tipLabel}} mode="contained" onPress={() => navigation.navigate('Grooming', {service: services.grooming})}>
                                    Booking
                                </Button>
                            </View>
                        </View>
                        <View style={styles.tip}>
                            <Image source={require('../../assets/services/training.jpg')} style={styles.tipImage}/>
                            <View style={styles.tipInfo}>
                                <Text style={text.whiteSubtitle}>Percayakan anjing dengan kami</Text>
                                <Button  style={{...styles.button, ...styles.tipButton, ...layout.mt1}} labelStyle={{...text.whiteSubtitle, ...styles.tipLabel}} mode="contained" onPress={() => navigation.navigate('Grooming', {service: services.grooming})}>
                                    Lihat
                                </Button>
                            </View> 
                        </View>
                    </ScrollView>
                </View>
                {/* Wa */}
                <View style={styles.area}>
                    <View style={styles.wa}>
                        <Text style={text.subtitle}>Customer Center?</Text>
                        <Button  style={{...styles.button, ...styles.waButton}} labelStyle={{...text.whiteSubtitle, ...styles.waLabel}} mode="contained" onPress={() => Linking.openURL('whatsapp://send?text=&phone=+628981581382')}>
                            Chat on WA
                        </Button>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default withTheme(Home);