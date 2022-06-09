import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Text, ScrollView, Dimensions, } from 'react-native';
import { withTheme, Button } from 'react-native-paper';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCalendar, faCat, faClock, faCut, faDog, faHotel, faMedkit, faQuestion,} from "@fortawesome/free-solid-svg-icons";
import { getFirestore, collection, query, where, onSnapshot } from "firebase/firestore";

const BookingList = ({theme, route}) => {
    const {color, layout, text} = theme;
    const [orders, setOrders] = useState([]);

    const styles = StyleSheet.create({
        content: {
            alignItems: 'center',
            minHeight: Dimensions.get('screen').height,
        },
        title: {
            alignSelf: 'stretch',
            marginBottom: 10
        },
        cards: {
            alignSelf: 'stretch',
        },
        card: {
            alignSelf: 'stretch',
            backgroundColor: '#fff',
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.90,
            shadowRadius: 1.35,
            elevation: 5,
            padding: 20,
            borderRadius: 16,
            marginVertical: 10
        },
        header: {
            alignSelf: 'stretch',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems:'center'
        },
        headerLeft: {
            flexDirection: 'row',
            flex: 1,
            alignItems:'center'
        },
        headerIcon: {
            marginRight: 10
        },
        headerRight: {
            height: 50,
            width: 50,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 30,
            backgroundColor: color.secondary
        },
        hr: {
            alignSelf: 'stretch',
            height: 1,
            backgroundColor: color.secondary,
            marginVertical: 12
        },
        body: {
            alignSelf: 'stretch',
            flexDirection: 'row',
        },
        subbody: {
            flex: 1,
            marginHorizontal: 10
        },
        subbodyData: {
            marginVertical: 5
        },
        bodyData: {
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: 5
        },
        bodyIcon: {
            marginRight: 10
        }
    })

    useEffect(() => {
        const db = getFirestore();
        const q = query(collection(db, "order"), where("userId", "==", route.params.user.id));
        onSnapshot(q, (querySnapshot) => {
            const orders = [];
            querySnapshot.forEach((doc) => {
                orders.push(doc.data());
            });
            setOrders(orders)
        });
    }, [])

    const checkTitleIcon = tipe => {
        if(tipe == 'grooming'){
            return <FontAwesomeIcon icon={faCut} size={30} color={color.primary} style={styles.headerIcon}/> 
        }else if(tipe == 'penitipan'){
            return <FontAwesomeIcon icon={faHotel} size={30} color={color.primary} style={styles.headerIcon}/> 
        }else if(tipe == 'kesehatan'){
            return <FontAwesomeIcon icon={faMedkit} size={30} color={color.primary} style={styles.headerIcon}/> 
        }else{
            return <FontAwesomeIcon icon={faDog} size={30} color={color.primary} style={styles.headerIcon}/> 
        }
    }

    const checkPetIcon = pet => {
        if(pet == 'dog'){
            return <FontAwesomeIcon icon={faDog} size={25} color={color.primary}/> 
        }else if(pet == 'cat'){
            return <FontAwesomeIcon icon={faCat} size={25} color={color.primary}/> 
        }else{
            return <FontAwesomeIcon icon={faQuestion} size={25} color={color.primary}/> 
        }
    }

    const cards = () => {
        return orders.map((order, i) => {
            return (
                <View style={styles.card} key={'OrderKey'+i}>
                    <View style={styles.header}>
                        <View style={styles.headerLeft}>
                            {checkTitleIcon(order.tipe)}
                            <Text style={text.cardTitle}>{order.title}</Text>
                        </View>
                        <View style={styles.headerRight}>
                            {checkPetIcon(order.pet)}
                        </View>
                    </View>
                    <View style={styles.hr}></View>
                    <View style={styles.body}>
                        <View style={styles.subbody}>
                            <View style={styles.bodyData}>
                                <FontAwesomeIcon icon={faCalendar} size={20} color={color.primary} style={styles.bodyIcon}/> 
                                <Text style={text.paragraph}>{order.date}</Text>
                            </View>
                            <View style={styles.bodyData}>
                                <FontAwesomeIcon icon={faClock} size={20} color={color.primary} style={styles.bodyIcon}/> 
                                <Text style={text.paragraph}>{order.time} Wita</Text>
                            </View>
                        </View>
                        <View style={styles.subbody}>
                            <View style={styles.subbodyData}>
                                <Text style={text.paragraph}>Status</Text>
                            </View>
                            <View style={styles.subbodyData}>
                                <Text style={text.blueSubtitle}>{order.status}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            )
        })
    }
    return(
        <ScrollView>
            <View style={{...styles.content, ...layout.container}}>
                <View style={styles.title}>
                    <Text style={text.subtitle}>Riwayat Booking</Text>
                </View>
                <View style={styles.cards}>
                    {cards()}
                </View>
            </View>
        </ScrollView>
    )
}

export default withTheme(BookingList);