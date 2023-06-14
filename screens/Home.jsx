import { ImageBackground, StyleSheet, View } from "react-native";
import { BaseText } from '../components/Text';

export default function Detail () {
    return (
        <View>
            <ImageBackground source={require('../assets/bgHome.png')} style={{width: '100%', height: '100%'}}>
                <View style={styles.container}>
                    <BaseText align="left">La miglior app di sempre</BaseText>
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
});