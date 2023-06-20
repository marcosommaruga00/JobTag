import { StyleSheet, View, ImageBackground, Image, SafeAreaView} from "react-native";
import { Label, Title, Input, Title2, BaseText2 } from '../components/Text';
import { StandardButton, IconButton } from "../components/Button";
import { useFonts } from 'expo-font';

const image = {uri: "../assets/bg.png"};

export default function Login ({ navigation }) {

    let [fontsLoaded] = useFonts({
        'Montserrat-Regular': require('../assets/fonts/Montserrat-Regular.ttf'),
        'Montserrat-Bold': require('../assets/fonts/Montserrat-Bold.ttf'),
        'Montserrat-SemiBold': require('../assets/fonts/Montserrat-SemiBold.ttf'),
        'Montserrat-Medium': require('../assets/fonts/Montserrat-Medium.ttf'),
    });

    let [fontsLoaded2] = useFonts({
        'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
        'Poppins-Medium': require('../assets/fonts/Poppins-Medium.ttf'),
        'Poppins-Black': require('../assets/fonts/Poppins-Black.ttf'),
    });

    return (
        fontsLoaded && fontsLoaded2 &&
        <View>
            <ImageBackground source={require('../assets/bgHome.png')} style={{width: '100%', height: '100%'}}>
                
                <View style={styles.container}>
                    <View style={styles.logo} >
                        <Image source={require('../assets/logoSmall.png')} style={{width: 138, height: 24, marginTop: 50}}/>
                    </View>
                    <View style={styles.center}>
                        <Title2>Accedi</Title2>
                        <SafeAreaView>
                            <Input placeholder="Inserisci l'email"/>
                            <Input placeholder="Inserisci la password" secureTextEntry={true}/>
                        </SafeAreaView>
                        <BaseText2>
                            Password dimenticata?
                        </BaseText2>
                        <StandardButton onPress={() => navigation.navigate("Home")}>
                            <Label>Accedi</Label>
                        </StandardButton>
                    </View>
                    <View style={styles.bottom}>
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
    width: '100%',

    },
    center:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 0,
        marginBottom: 150,
    },
    bottom:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginBottom: 0,
        width: '100%',
    },
    logo: {
        flex: 1,
        alignItems: 'left',
        justifyContent: 'flex-start',
        width: 320,
    },
});