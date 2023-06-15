import { StyleSheet, View, ImageBackground, Image, SafeAreaView} from "react-native";
import { Label, Title, Input, Title2, BaseText2 } from '../components/Text';
import { StandardButton } from "../components/Button";

const image = {uri: "../assets/bg.png"};

export default function Login ({ navigation }) {
    return (
        <View>
            <ImageBackground source={require('../assets/bg.png')} style={{width: '100%', height: '100%'}}>
                
                <View style={styles.container}>
                    <View style={styles.logo} >
                        <Title>Jobtag</Title>
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
                            <Label>Login</Label>
                        </StandardButton>
                    </View>
                    <View style={styles.bottom}>
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
    },
    logo: {
        flex: 1,
        alignItems: 'left',
        justifyContent: 'flex-start',
        width: 320,
    },
});