import React from 'react';
import { DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, Text } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome, faListAlt, faUser,} from "@fortawesome/free-solid-svg-icons";
// pages
import Profile from '../Screens/Profile';
import BookingList from '../Screens/BookingList';
import ServicesNavigation from './ServicesNavigation';


const Tab = createBottomTabNavigator();


const Tabs = (props) => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                tabBarLabelStyle: {
                    fontSize: 12,
                    marginBottom: 10,
                    marginTop: -10
                },
                headerStyle: {
                    elevation: 0,
                    shadowOpacity: 0,
                    borderBottomWidth: 0,
                },
                tabBarIcon:{
                    size: 35,
                },      
                tabBarStyle:{
                    height: 70,
                },
                tabBarActiveTintColor: '#0175F0'
                }}
        >
            <Tab.Screen 
                name="ServicesNavigation" 
                component={ServicesNavigation}
                initialParams={{user: props.route.params.user}}
                options={{
                    headerRight: () => (
                        <Image source={require('../../assets/welcome/logo.png')}/>
                    ),
                    headerTitle: () => (<Text style={{color: '#0175F0', fontWeight: 'bold', fontSize: 24,}}>Groopy</Text>),
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesomeIcon icon={faHome} size={size} color={color}/> 
                    ),
                    }} 
            />
            <Tab.Screen 
                name="BookingList" 
                component={BookingList}
                initialParams={{user: props.route.params.user}}
                options={{
                    headerRight: () => (
                        <Image source={require('../../assets/welcome/logo.png')}/>
                    ),
                    headerStyle: {
                        backgroundColor: '#F4FAFF',
                        elevation: 0,
                        shadowOpacity: 0,
                        borderBottomWidth: 0,
                    },
                    headerTitle: () => (<Text style={{color: '#0175F0', fontWeight: 'bold', fontSize: 24,}}>Booking List</Text>),
                    tabBarLabel: 'Booking List',
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesomeIcon icon={faListAlt} size={size} color={color}/> 
                    ),
                    }} 
            />

            <Tab.Screen 
                name="Profile" 
                component={Profile}
                initialParams={{user: props.route.params.user}}
                options={{
                    headerRight: () => (
                        <Image source={require('../../assets/welcome/logo.png')}/>
                    ),
                    headerStyle: {
                        backgroundColor: '#F4FAFF',
                        elevation: 0,
                        shadowOpacity: 0,
                        borderBottomWidth: 0,
                    },
                    headerTitle: () => (<Text style={{color: '#0175F0', fontWeight: 'bold', fontSize: 24,}}>Profile</Text>),
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesomeIcon icon={faUser} size={size} color={color}/> 
                    ),
                }} 
            />
            

        </Tab.Navigator>
    );
}

export default Tabs;