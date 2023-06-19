import { ImageBackground, StyleSheet, View, Image } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { BaseText } from '../components/Text';
import { CallButton, SettingButton, QRButton } from "../components/Button";
import { useNavigation } from '@react-navigation/native';

export default function Qrcode () {

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
    const goToBack = () => {
        navigation.goBack();
    };

    return (
        <View>
            <ImageBackground source={require('../assets/bg.png')} style={{width: '100%', height: '100%'}}>
                <View style={styles.container}>
                    <View style={styles.logo} >
                        <Image source={require('../assets/logoSmall.png')} style={{width: 138, height: 24, marginTop: 50}}/>
                    </View>

                    {/* View Notification */}
                    <View style={styles.center}>
                        <View style={{flex: 1, flexDirection: 'row', alignItems: 'start', justifyContent: 'start', width: 'auto', backgroundColor: 'rgba(255, 255, 255, 0)', zIndex: 2}}>
                            <Ionicons.Button name="chevron-back" size={42} backgroundColor={'rgba(255, 255, 255, 0)'} borderRadius={99} color="#142A39" iconStyle={{paddingLeft: 2}} onPress={goToBack}/>
                        </View>
                        <BaseText>Notification</BaseText>
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
    },
    logo: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'left',
        justifyContent: 'space-between',
        width: 320,
        height: 100,
        marginBottom: -270,
        backgroundColor: 'rgba(255, 255, 255, 0)',
    },
    center:{
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'red',
        width: '100%',
        height: 'auto',
    },
});