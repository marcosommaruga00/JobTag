import { ImageBackground, StyleSheet, View, Image, SafeAreaView, ScrollView, Dimensions, Animated, Pressable } from "react-native";
import { useRef, useState } from "react";
import { Indication, Undercard } from '../components/Text';

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

export default function Carusel () {

  const [peopleSelected, setPeopleSelected] = useState(null)
  const [luoghiSelected, setLuoghiSelected] = useState(null)
  const scrollX = useRef(new Animated.Value(0)).current
  const scrollZ = useRef(new Animated.Value(0)).current

  

  return (
    <View style={styles.container}>
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
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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