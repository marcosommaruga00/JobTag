import { StyleSheet, View, ImageBackground, Image, SafeAreaView} from "react-native";
import { Label, Title, Input, Title2 } from '../components/Text';
import { StandardButton } from "../components/Button";

const image = {uri: "../assets/bg.png"};

export default function Login ({ navigation }) {
    return (
        <View>
            <ImageBackground source={require('../assets/bg.png')} style={{width: '100%', height: '100%'}}>
                
                <View style={styles.container}>
                    <Title>Jobtag</Title>
                    <View style={styles.center}>
                        <Title2>Accedi</Title2>
                        <SafeAreaView>
                            <Input placeholder="Inserisci l'email"/>
                            <Input placeholder="Inserisci la password" secureTextEntry={true}/>
                        </SafeAreaView>
                        <StandardButton onPress={() => navigation.navigate("Home")}>
                            <Label>Login</Label>
                        </StandardButton>
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
        marginBottom: 250,
    }
});