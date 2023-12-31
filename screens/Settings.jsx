import { ImageBackground, StyleSheet, View, Image, Pressable } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { ComingSoon, Indication } from '../components/Text';
import { CallButton, SettingButton, QRButton, PreferitiButton } from "../components/Button";
import { useNavigation } from '@react-navigation/native';

export default function Qrcode () {

    const navigation = useNavigation();
    /* const goToThirdPage = () => {
        navigation.navigate('Prova');
    }; */
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
    const goToLogin = () => {
        navigation.navigate('Login');
    };

    return (
        <View>
            <ImageBackground source={require('../assets/bgHome.png')} style={{width: '100%', height: '100%'}}>
                <View style={styles.container}>
                    <View style={styles.logo} >
                        <Pressable onPress={goToHome}>
                            <Image source={require('../assets/logoSmall5.png')} style={{width: 138, height: 24, marginTop: 50}}/>
                        </Pressable>
                        <Entypo.Button name="notification" size={24} backgroundColor={'transparent'} color="#142A39" style={{marginTop: 40}} onPress={goToNotification}/>
                    </View>

                    {/* View Settings */}
                    <View style={styles.center}>
                        <View style={{flex: 1, flexDirection: 'column', alignItems: 'center', width: 320, backgroundColor: 'rgba(255, 255, 255, 0)', zIndex: 2, marginTop: 40, marginRight: -20}}>
                            <PreferitiButton onPress={() => navigation.navigate("Settings")}>
                                <Indication style={{marginBottom: 0, marginLeft: 0}} >Preferiti</Indication>
                                <Ionicons.Button name="chevron-forward" size={24} backgroundColor={'rgba(255, 255, 255, 0)'} color="#142A39" iconStyle={{paddingLeft: 2}} onPress={goToSettings}/>
                            </PreferitiButton>
                            <View style={{ width: '95%',height: 1, backgroundColor: '#142A39', marginRight: 20}} />
                            <PreferitiButton onPress={() => navigation.navigate("Settings")}>
                                <Indication style={{marginBottom: 0, marginLeft: 0}} >Gruppi</Indication>
                                <Ionicons.Button name="chevron-forward" size={24} backgroundColor={'rgba(255, 255, 255, 0)'} color="#142A39" iconStyle={{paddingLeft: 2}} onPress={goToSettings}/>
                            </PreferitiButton>
                            <View style={{ width: '95%',height: 1, backgroundColor: '#142A39', marginRight: 20}} />
                            <PreferitiButton onPress={() => navigation.navigate("Login")}>
                                <Indication style={{marginBottom: 0, marginLeft: 0}} >Logout</Indication>
                                <SimpleLineIcons.Button name="logout" size={24} backgroundColor={'rgba(255, 255, 255, 0)'} color="#142A39" iconStyle={{paddingLeft: 2, transform: [{rotateY: '180deg'}]}} onPress={goToLogin}/>
                            </PreferitiButton>

                        </View>
                    </View>
                    <View style={styles.bottom}>

                        {/* View icon settings */}
                        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: 320, backgroundColor: 'rgba(255, 255, 255, 0)', zIndex: 2}}>
                            <SettingButton onPress={() => navigation.navigate("Prova")}>
                                <Ionicons.Button name="settings" size={42} backgroundColor={'rgba(255, 255, 255, 0)'} borderRadius={99} color="white" iconStyle={{paddingLeft: 2}} onPress={goToSettings}/>
                            </SettingButton>
                        </View>

                        {/* View icon QRCode */}
                        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: 320, backgroundColor: 'rgba(255, 255, 255, 0)', zIndex: 2}}>
                            <QRButton onPress={() => navigation.navigate("Qrcode")}>
                                <MaterialIcons name="qr-code-scanner" size={42} backgroundColor={'rgba(255, 255, 255, 0)'} borderRadius={99} color="white" iconStyle={{paddingLeft: 2}} onPress={goToQrcode}/>
                            </QRButton>
                        </View>

                        {/* View icon call */}
                        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: 320, backgroundColor: 'rgba(255, 255, 255, 0)', zIndex: 2}}>
                            <CallButton onPress={() => navigation.navigate("Home")} >
                                <Ionicons.Button name="call" size={42} backgroundColor={'#30D158'} borderRadius={99} color="white" iconStyle={{paddingLeft: 2}} onPress={goToHome}/>
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
        justifyContent: 'start',
        marginTop: -100,
        marginBottom: 200,
        width: 300,
        height: 436,
    },
});