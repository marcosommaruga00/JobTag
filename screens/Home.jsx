import { ImageBackground, StyleSheet, View, Image, SafeAreaView, ScrollView, Dimensions, Animated, Pressable } from "react-native";
import { useRef, useState } from "react"
import Ionicons from '@expo/vector-icons/Ionicons';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Indication, Undercard } from '../components/Text';
import { CallButton, SettingButton, QRButton } from "../components/Button";
import { useNavigation } from '@react-navigation/native';

const OFFSET = 90
const ITEM_WIDTH = Dimensions.get("window").width - (OFFSET * 2)
const ITEM_HEIGHT = 195

const cards = [
    { id: 0, title: "Filippo Franchi", description: "Art Director" ,posterUrl: require("../assets/persone/persona1.1.jpg") },
    { id: 1, title: "Giada Rossi", description: "Designer", posterUrl: require("../assets/persone/persona1.2.jpg") },
    { id: 2, title: "Giorgia Rivolta", description: "CTO", posterUrl: require("../assets/persone/persona1.3.jpg") },
    { id: 3, title: "Pietro Brambilla", description: "Dev", posterUrl: require("../assets/persone/persona1.4.jpg") },
    { id: 4, title: "Matteo Fumagalli", description: "Tester", posterUrl: require("../assets/persone/persona1.5.jpg") },
]

const luoghi = [
    { title: "Hall", posterUrl: require("../assets/luoghi/luogo1.5.jpg") },
    { title: "Sala riunioni", posterUrl: require("../assets/luoghi/luogo1.2.jpg") },
    { title: "Primo piano", posterUrl: require("../assets/luoghi/luogo1.3.jpg") },
    { title: "Bagni", posterUrl: require("../assets/luoghi/luogo1.4.jpg") },
    { title: "Sala relax", posterUrl: require("../assets/luoghi/luogo1.1.jpg") },
]

export default function Home () {

    const [peopleSelected, setPeopleSelected] = useState(null)
    const [luoghiSelected, setLuoghiSelected] = useState(null)
    const scrollX = useRef(new Animated.Value(0)).current
    const scrollZ = useRef(new Animated.Value(0)).current

    const call = () => {
        if(peopleSelected != null && luoghiSelected != null){
            return alert(`Chiamata inviata!\n ${peopleSelected.title} arriverà il prima possibile.`)
        } else if (peopleSelected == null && luoghiSelected != null || peopleSelected != null && luoghiSelected == null || peopleSelected == null && luoghiSelected == null){ 
            return alert('Seleziona una persona e un luogo per effettuare la chiamata!') 
        }
    return
    }

    const navigation = useNavigation();
    /* const goToThirdPage = () => {
        navigation.navigate('Prova');
    };
    const goToHome = () => {
        navigation.navigate('Home');
    }; */
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
            <ImageBackground source={require('../assets/bgHome.png')} style={{width: '100%', height: '100%'}}>
                <View style={styles.container}>
                    {/* Top bar */}
                    <View style={styles.logo} >
                        <Image source={require('../assets/logoSmall5.png')} style={{width: 138, height: 24, marginTop: 50, backgroundColor: 'transparent'}}/>
                        {/* View icon notification */}
                        <View style={{flexDirection: 'row', marginTop: 40, backgroundColor: 'rgba(255, 255, 255, 0)',}}>
                            <Entypo.Button name="notification" size={24} backgroundColor={'transparent'} color="#142A39" style={{backgroundColor: 'transparent'}} onPress={goToNotification}/>
                        </View>
                    </View>
                    {/* carosello */}
                    <View style={styles.center}>
                        <View style={{flex: 2,width: '100%', height: 230}}>
                            <Indication>1. Seleziona una persona</Indication>
                            <SafeAreaView style={{ flex: 1, backgroundColor: 'rgba(255, 255, 255, 0)' }}>
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
                                                        borderColor: cards.indexOf(peopleSelected) === idx ? '#30D158' : 'transparent',
                                                        borderWidth: cards.indexOf(peopleSelected) === idx ? 2 : 0,
                                                        borderRadius: 8,
                                                        shadowColor: "#142A39",
                                                        shadowOffset: {
                                                            width: 0,
                                                            height: 10,
                                                        },
                                                        shadowOpacity: 0.3,
                                                        shadowRadius: 10,
                                                        elevation: 20,
                                                        }}
                                                        opacity={cards.indexOf(peopleSelected) === idx ? 0.5 : 1}
                                                        imageStyle={{ borderRadius: 6}}
                                                    />
                                                    <Undercard style={{fontSize: 16, fontWeight: 'bold', color: '#142A39', marginTop: 10}}>{item.title}</Undercard>
                                                    <Undercard style={{fontSize: 10, color: '#142A39', marginBottom: -5}}>{item.description}</Undercard>
                                                </Animated.View>
                                            </Pressable>
                                        )
                                    })}
                                </ScrollView>
                            </SafeAreaView>
                        </View>
                        <View style={{flex: 2,width: '100%', height: 218}}>
                            <Indication>2. Seleziona un luogo</Indication>
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
                                                    borderColor: luoghiSelected === idx ? '#30D158' : 'transparent',
                                                    borderWidth: luoghiSelected === idx ? 2 : 0,
                                                    borderRadius: 8,
                                                    shadowColor: "#142A39",
                                                        shadowOffset: {
                                                            width: 0,
                                                            height: 10,
                                                        },
                                                        shadowOpacity: 0.3,
                                                        shadowRadius: 10,
                                                        elevation: 20,
                                                    }}
                                                    opacity={luoghiSelected === idx ? 0.5 : 1}
                                                    imageStyle={{ borderRadius: 6}}
                                                />
                                                <Undercard style={{fontSize: 16, fontWeight: 'bold', color: '#142A39', marginTop: 10, marginLeft: 10}}>{item.title} </Undercard>
                                            </Animated.View>
                                        </Pressable>
                                    )
                                    })}
                                </ScrollView>
                            </SafeAreaView>
                        </View>
                    </View>

                    {/* Tab bar */}
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
                        <Image source={require('../assets/menu1.png')} style={{width: '100%', height: 247}}/>
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
        marginTop: -130,
        marginBottom: 0,
        width: '100%',
        height: 436,
    },
});
