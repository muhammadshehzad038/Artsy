// screens/ImageDetailScreen.js
import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Fontisto } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import Animated, { FadeInDown, FadeOutDown, FlipInEasyX } from 'react-native-reanimated';

const ImageDetailScreen = ({ route }) => {
  const { image, comments,id, views, likes , type, user , tags } = route.params;
  return (
    <View style={{flex:1, alignItems:"center", backgroundColor:"black"}}>
        <View style={{borderWidth:2, borderColor:"red", marginTop:20, padding:8}}>
    <Animated.Image entering={FadeInDown.delay(200).stiffness()} source={{uri: image}} style={{height:200, width:330, resizeMode:"contain", marginTop:10, borderRadius:20, }}/>
    <View style={{flexDirection:"row", margin:10}}>
    <View>
<Text style={{fontSize:16,textAlign:"center", marginRight:4, color:"yellow"}}>Comments:</Text>
    </View>
    <View style={{borderWidth:1, borderColor:"black", backgroundColor:"white", height:25, width:40, borderRadius:10, alignItems:"center"}}>
    <Text>{comments}</Text>
    </View>
    <View>
<Text style={{fontSize:16,textAlign:"center", marginRight:4, marginLeft:10, color:"orange"}}>Views:</Text>
    </View>
    <View style={{borderWidth:1, borderColor:"black", backgroundColor:"white", height:25, width:80, borderRadius:10, alignItems:"center"}}>
    <Text>{views}</Text>
    
    </View>
    </View>
    <View style={{flexDirection:"row", margin:10}}>
    <View>
<Text style={{fontSize:16,textAlign:"center", marginRight:4, color:"pink"}}>Likes:</Text>
    </View>
    <View style={{borderWidth:1, borderColor:"black", backgroundColor:"white", height:25, width:40, borderRadius:10, alignItems:"center", }}>
    <Text>{likes}</Text>
    </View>
    <View>
<Text style={{fontSize:16,textAlign:"center", marginRight:4, marginLeft:10, color:"skyblue"}}>Tags:</Text>
    </View>
    <View style={{borderWidth:1, borderColor:"black", backgroundColor:"white", height:45, width:180, borderRadius:10, alignItems:"center",}}>
    <Text style={{fontSize:14, fontWeight:"700", textAlign:"center"}}>{tags}</Text>
    
    </View>
    </View>
    <View style={{flexDirection:"row", margin:10}}>
    <View>
<Text style={{fontSize:16,textAlign:"center", marginRight:4, color:"yellow", marginTop:5}}>Artist:</Text>
    </View>
    <View style={{borderWidth:1, borderColor:"black", backgroundColor:"white", height:35, width:140, borderRadius:10, alignItems:"center", justifyContent:"center"}}>
    <Text style={{fontSize:14}}>
    <AntDesign name="user" size={16} color="grey" /> {user}</Text>
    </View>
    <View>
<Text style={{fontSize:16,textAlign:"center", marginRight:4, marginLeft:10, color:"orange"}}>Type:</Text>
    </View>
    <View style={{borderWidth:1, borderColor:"black", backgroundColor:"white", height:25, width:80, borderRadius:10, alignItems:"center"}}>
    <Text>{type}</Text>
    
    </View>
    </View>
    </View>
    <Animated.View entering={FlipInEasyX.delay(200)} style={{marginTop:30, borderWidth:3, borderColor:"pink", backgroundColor:"yellow", borderRadius:10}}>
        <TouchableOpacity style={{
            height:50,
            padding:10,
            backgroundColor:"skyblue",
            marginHorizontal:10,
            marginVertical:10,
            borderRadius:10,
            alignItems:"center"
        }}>
           <View style={{flexDirection:"row"}}>
            <Text style={{color:"white", fontSize:16, marginRight:6}}>Add to Favourities</Text>
            <Fontisto name="favorite" size={24} color="red" />
            </View>
        </TouchableOpacity>
    </Animated.View>
    </View>
      
  );
};

export default ImageDetailScreen;
