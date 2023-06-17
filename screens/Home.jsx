import { ImageBackground, StyleSheet, View, Image } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { Entypo } from '@expo/vector-icons';
import { BaseText } from '../components/Text';

export default function Detail () {
    return (
        <View>
            <ImageBackground source={require('../assets/bg.png')} style={{width: '100%', height: '100%'}}>
                <View style={styles.container}>
                    <View style={styles.logo} >
                        <Image source={require('../assets/logoSmall.png')} style={{width: 138, height: 24, marginTop: 50}}/>
                        <Entypo name="notification" size={24} color="black" style={{marginTop: 50}}/>
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
});