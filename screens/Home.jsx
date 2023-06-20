import { ImageBackground, StyleSheet, View, Image, SafeAreaView, ScrollView, Dimensions, Animated, Pressable } from "react-native";
import { useRef, useState } from "react"
import Ionicons from '@expo/vector-icons/Ionicons';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { BaseText } from '../components/Text';
import { CallButton, SettingButton, QRButton } from "../components/Button";
import { useNavigation } from '@react-navigation/native';
import Prova from "./Prova";
import Notification from "./Notification";

const OFFSET = 40
const ITEM_WIDTH = Dimensions.get("window").width - (OFFSET * 2)
const ITEM_HEIGHT = 190

const cards = [
    { id: 0, title: "Persona 1", posterUrl: require("../assets/persone/persona1.jpg") },
    { id: 1, title: "Persona 2", posterUrl: require("../assets/persone/persona2.jpg") },
    { id: 2, title: "Persona 3", posterUrl: require("../assets/persone/persona3.jpg") },
    { id: 3, title: "Persona 4", posterUrl: require("../assets/persone/persona4.jpg") },
    { id: 4, title: "Persona 5", posterUrl: require("../assets/persone/persona5.jpg") },
]

const luoghi = [
    { title: "Luogo 1", posterUrl: require("../assets/luoghi/luogo1.jpg") },
    { title: "Luogo 2", posterUrl: require("../assets/luoghi/luogo2.jpg") },
    { title: "Luogo 3", posterUrl: require("../assets/luoghi/luogo3.jpg") },
    { title: "Luogo 4", posterUrl: require("../assets/luoghi/luogo4.jpg") },
    { title: "Luogo 5", posterUrl: require("../assets/luoghi/luogo5.jpg") },
]

export default function Home () {
    const [peopleSelected, setPeopleSelected] = useState(null)
    const [luoghiSelected, setLuoghiSelected] = useState(null)
    const scrollX = useRef(new Animated.Value(0)).current
    const scrollZ = useRef(new Animated.Value(0)).current

    const call = () => {
        if(peopleSelected != null && luoghiSelected != null){
            return alert(`Chiamata inviata!\n ${peopleSelected.title} è stato avvisato.`)
        } else if (peopleSelected == null && luoghiSelected != null || peopleSelected != null && luoghiSelected == null || peopleSelected == null && luoghiSelected == null){ 
            return alert('Seleziona una persona e un luogo per effettuare la chiamata!') 
        }
    return
    }

    const navigation = useNavigation();
    const goToThirdPage = () => {
        navigation.navigate('Prova');
    };
    const goToHome = () => {
        navigation.navigate('Home');
    };
    const goToNotification = () => {
        navigation.navigate('Notification');
    };
    const goToQrcode = () => {
        navigation.navigate('Qrcode');
    };
    const goToSettings = () => {
        navigation.navigate('Settings');
    };

    return (
        <View>
            <ImageBackground source={require('../assets/bg.png')} style={{width: '100%', height: '100%'}}>
                <View style={styles.container}>
                    <View style={styles.logo} >
                        <Image source={require('../assets/logoSmall5.png')} style={{width: 138, height: 24, marginTop: 50, backgroundColor: 'transparent'}}/>
                        {/* View icon notification */}
                        <View style={{flexDirection: 'row', marginTop: 40, backgroundColor: 'rgba(255, 255, 255, 0)',}}>
                            <Entypo.Button name="notification" size={24} backgroundColor={'transparent'} color="#142A39" style={{backgroundColor: 'transparent'}} onPress={goToNotification}/>
                        </View>
                    </View>
                    {/* carosello */}
                    <View style={styles.center}>
                        <View style={{flex: 2,width: '100%', height: 218}}>
                            <SafeAreaView style={{ flex: 1, backgroundColor: "transparent" }}>
                                <ScrollView
                                    horizontal={true}
                                    decelerationRate={"normal"}
                                    snapToInterval={ITEM_WIDTH}
                                    style={{ paddingHorizontal: 0 }}
                                    showsHorizontalScrollIndicator={false}
                                    bounces={false}
                                    disableIntervalMomentum
                                    onScroll={Animated.event(
                                    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                                    { useNativeDriver: false }
                                    )}
                                    scrollEventThrottle={12}
                                >
                                    {cards.map((item, idx) => {
                                        const inputRange = [
                                            (idx - 1) * ITEM_WIDTH,
                                            idx * ITEM_WIDTH,
                                            (idx + 1) * ITEM_WIDTH,
                                        ]

                                        const translate = scrollX.interpolate({
                                            inputRange,
                                            outputRange: [0.85, 1, 0.85],
                                        })

                                        const opacity = scrollX.interpolate({
                                            inputRange,
                                            outputRange: [0.5, 1, 0.5],
                                        })

                                        return (
                                            <Pressable onPress={() => {setPeopleSelected(item)}}>
                                                <Animated.View
                                                style={{
                                                    width: ITEM_WIDTH,
                                                    height: ITEM_HEIGHT,
                                                    marginLeft: idx === 0 ? OFFSET : undefined,
                                                    marginRight: idx === cards.length - 1 ? OFFSET : undefined,
                                                    opacity: opacity,
                                                    transform: [{ scale: translate }],
                                                }}
                                                >
                                                    <ImageBackground
                                                        source={item.posterUrl}
                                                        style={{
                                                        flex: 1,
                                                        resizeMode: "cover",
                                                        justifyContent: "center",
                                                        borderColor: '#142A39',
                                                        borderWidth: 1,
                                                        borderRadius: 7,
                                                        }}
                                                        opacity={cards.indexOf(peopleSelected) === idx ? 0.5 : 1}
                                                        imageStyle={{ borderRadius: 6}}
                                                    />
                                                    <BaseText style={{fontSize: 16, fontWeight: 'bold', color: '#142A39', marginTop: 10, marginLeft: 10}}>{item.title}</BaseText>
                                                </Animated.View>
                                            </Pressable>
                                        )
                                    })}
                                </ScrollView>
                            </SafeAreaView>
                        </View>
                        <View style={{flex: 2,width: '100%', height: 218}}>
                            <SafeAreaView style={{ flex: 1, backgroundColor: "transparent" }}>
                                <ScrollView
                                    horizontal={true}
                                    decelerationRate={"normal"}
                                    snapToInterval={ITEM_WIDTH}
                                    style={{ paddingHorizontal: 0 }}
                                    showsHorizontalScrollIndicator={false}
                                    bounces={false}
                                    disableIntervalMomentum
                                    onScroll={Animated.event(
                                    [{ nativeEvent: { contentOffset: { x: scrollZ } } }],
                                    { useNativeDriver: false }
                                    )}
                                    scrollEventThrottle={12}
                                >
                                    {luoghi.map((item, idx) => {
                                    const inputRange = [
                                        (idx - 1) * ITEM_WIDTH,
                                        idx * ITEM_WIDTH,
                                        (idx + 1) * ITEM_WIDTH,
                                    ]

                                    const translate = scrollZ.interpolate({
                                        inputRange,
                                        outputRange: [0.85, 1, 0.85],
                                    })

                                    const opacity = scrollZ.interpolate({
                                        inputRange,
                                        outputRange: [0.5, 1, 0.5],
                                    })

                                    return (
                                        <Pressable onPress={() => {setLuoghiSelected(idx)}}>
                                            <Animated.View
                                            style={{
                                                width: ITEM_WIDTH,
                                                height: ITEM_HEIGHT,
                                                marginLeft: idx === 0 ? OFFSET : undefined,
                                                marginRight: idx === luoghi.length - 1 ? OFFSET : undefined,
                                                opacity: opacity,
                                                transform: [{ scale: translate }],
                                            }}
                                            >
                                                <ImageBackground
                                                    source={item.posterUrl}
                                                    style={{
                                                    flex: 1,
                                                    resizeMode: "cover",
                                                    justifyContent: "center",
                                                    borderColor: '#142A39',
                                                    borderWidth: 1,
                                                    borderRadius: 7,
                                                    }}
                                                    opacity={luoghiSelected === idx ? 0.5 : 1}
                                                    imageStyle={{ borderRadius: 6}}
                                                />
                                                <BaseText style={{fontSize: 16, fontWeight: 'bold', color: '#142A39', marginTop: 10, marginLeft: 10}}>{item.title} </BaseText>
                                            </Animated.View>
                                        </Pressable>
                                    )
                                    })}
                                </ScrollView>
                            </SafeAreaView>
                        </View>
                    </View>

                    {/* TabBar */}
                    <View style={styles.bottom}>

                        {/* View icon settings */}
                        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: 320, backgroundColor: 'rgba(255, 255, 255, 0)', zIndex: 2}}>
                            <SettingButton onPress={() => navigation.navigate("Prova")}>
                                <Ionicons.Button name="settings" size={42} backgroundColor={'rgba(255, 255, 255, 0)'} borderRadius={99} color="white" iconStyle={{paddingLeft: 2}} onPress={goToSettings}/>
                            </SettingButton>
                        </View>

                        {/* View icon QRCode */}
                        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: 320, backgroundColor: 'rgba(255, 255, 255, 0)', zIndex: 2}}>
                            <QRButton onPress={() => navigation.navigate("Prova")}>
                                <MaterialIcons name="qr-code-scanner" size={42} backgroundColor={'rgba(255, 255, 255, 0)'} borderRadius={99} color="white" iconStyle={{paddingLeft: 2}} onPress={goToQrcode}/>
                            </QRButton>
                        </View>

                        {/* View icon call */}
                        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: 320, backgroundColor: 'rgba(255, 255, 255, 0)', zIndex: 2}}>
                            <CallButton onPress={() => navigation.navigate("Home")} >
                                <Ionicons.Button name="call" size={42} backgroundColor={'#30D158'} borderRadius={99} color="white" iconStyle={{paddingLeft: 2}} onPress={() => call()}/>
                            </CallButton>
                        </View>
                        {/* Imag menù */}
                        <Image source={require('../assets/menu.png')} style={{width: '100%', height: 247}}/>
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    },
    logo: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'left',
        justifyContent: 'space-between',
        width: 320,
        backgroundColor: 'rgba(255, 255, 255, 0)',
    },
    bottom:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginBottom: 0,
        width: '100%',
    },
    center:{
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -100,
        marginBottom: 0,
        width: '100%',
        height: 436,
    },
});

/* backgroundColor={'#30D158'} borderRadius={999} color="white" iconStyle={{paddingLeft: 2}}  */
/* style={{ zIndex: 3, marginBottom: -98}} */