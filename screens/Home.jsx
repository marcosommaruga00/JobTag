import { ImageBackground, StyleSheet, View, Image } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { Entypo } from '@expo/vector-icons';
import { BaseText } from '../components/Text';
import { IconButton } from "../components/Button";
import { useNavigation } from '@react-navigation/native';
import Prova from "./Prova";


export default function Home () {

    const navigation = useNavigation();
    const goToThirdPage = () => {
        navigation.navigate('Prova');
    };
    return (
        <View>
            <ImageBackground source={require('../assets/bg.png')} style={{width: '100%', height: '100%'}}>
                <View style={styles.container}>
                    <View style={styles.logo} >
                        <Image source={require('../assets/logoSmall.png')} style={{width: 138, height: 24, marginTop: 50}}/>
                        <Entypo name="notification" size={24} color="#142A39" style={{marginTop: 50}}/>
                    </View>
                    <View style={styles.center}>
                        {/* carosello */}
                        <View style={{flex: 3, borderStyle: 'solid', borderWidth: 1, borderColor: 'yellow', width: 365, height: 218}}>
                            <BaseText>Carosello persone</BaseText>
                        </View>
                        <View style={{flex: 3, borderStyle: 'solid', borderWidth: 1, borderColor: 'blue', width: 365, height: 218}}>
                        <BaseText>Carosello luoghi</BaseText>
                        </View>
                    </View>
                    <View style={styles.bottom}>
                        <IconButton onPress={() => navigation.navigate("Prova")} >
                            <Ionicons.Button name="call" size={42} backgroundColor={'#30D158'} borderRadius={99} color="white" iconStyle={{paddingLeft: 2}} onPress={goToThirdPage}/>
                        </IconButton>
                        <Image source={require('../assets/menu.png')} style={{width: 390, height: 247}}/>
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
    },
    bottom:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginBottom: 0,
    },
    center:{
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 0,
        marginBottom: 150,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'red',
        marginLeft: 25,
        width: 365,
        height: 436,
    },
});

/* backgroundColor={'#30D158'} borderRadius={999} color="white" iconStyle={{paddingLeft: 2}}  */
/* style={{ zIndex: 3, marginBottom: -98}} */