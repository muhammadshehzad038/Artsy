import { View, Text, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import { LinearGradient } from 'expo-linear-gradient';
import Animated, { FadeIn, FadeInDown, FadeOut } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';

const Splash = () => {
    const navigation = useNavigation();
    return (
        <ImageBackground source={require('../assets/splashScreen.jpg')} resizeMode="cover" style={{ flex: 1, justifyContent: "center" }}>
            <LinearGradient
                colors={['transparent', 'white']}
                style={{
                    width: widthPercentageToDP(100), height: heightPercentageToDP(70),
                    flex: 1,
                    justifyContent: 'flex-end',
                    paddingBottom: 12,
                    marginTop: 8,
                    flexDirection: 'column',
                }}
                start={{ x: 0.5, y: 0.3 }}
                end={{ x: 0.5, y: 0.8 }}
            >
                <Animated.View entering={FadeInDown.delay(100).springify()} style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <Text style={{
                        fontSize: heightPercentageToDP(7), color: 'white',
                        fontWeight: 'bold',
                        letterSpacing: 1,
                        
                    }} >
                        Digital <Text style={{ color: 'orange' }}>Art</Text>
                    </Text>
                    <Text style={{
                        fontSize: heightPercentageToDP(7), fontWeight: 'bold',
                        letterSpacing: 1,color:"red"
                    }} >
                        Gallery
                    </Text>
                </Animated.View>
                <Animated.View entering={FadeInDown.delay(200).springify()}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Gallery")}
                        style={{
                            height: heightPercentageToDP(8), width: widthPercentageToDP(60),
                            backgroundColor: 'black',
                            alignSelf: 'center',
                            justifyContent: 'center',
                            marginHorizontal: 'auto',
                            borderRadius: 999,
                            borderWidth: 3,
                            borderColor: '#a0aec0',
                            marginBottom:10
                        }}

                    >
                        <Text style={{
                            fontSize: heightPercentageToDP(3), color: 'white',
                            fontWeight: 'bold',
                            letterSpacing: 1,
                            textAlign:"center"
                        }} >
                            Explore
                        </Text>
                    </TouchableOpacity>
                </Animated.View>

            </LinearGradient>
        </ImageBackground>
    )
}

export default Splash