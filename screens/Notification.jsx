import { ImageBackground, StyleSheet, View, Image } from "react-native";

export default function Prova () {
    return (
        <View>
            <ImageBackground source={require('../assets/bg.png')} style={{width: '100%', height: '100%'}} />
        </View>
    );
};