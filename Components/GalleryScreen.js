// screens/GalleryScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import axios from 'axios';
import { AntDesign } from '@expo/vector-icons';
import Animated, { FadeIn, FadeInDown } from 'react-native-reanimated';

const GalleryScreen = ({ navigation }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
        try {
          const response = await axios.get('https://pixabay.com/api/', {
            params: {
              key: '41038896-b31c7ece6d77ea221a0ceb759',
              q: 'art', // Search term (you can customize this)
              image_type: 'photo', // Specify the type of images (photo, illustration, vector)
              per_page: 50, // Number of images per page
            },
          });
  
          // Extract relevant image data from the response
          setImages(response.data.hits);
        } catch (error) {
          console.error('Error fetching Pixabay API:', error);
        }
      };
  
      fetchData();
  }, []);
console.log(images);

  return (
    <View style={{flex:1,padding:10,backgroundColor:"black"}}>
 <View>
    <View>
      <ScrollView>
        {images.map(image => (
            <Animated.View entering={FadeInDown.delay(100).springify()}>
         <TouchableOpacity
         onPress={() => navigation.navigate('ImageDetail', { image: image.webformatURL,
             comments: image.comments,
              id: image.id, likes:image.likes, 
              views: image.views,
              type:image.type,
              user: image.user,
              tags: image.tags })}
       >
          <Image
            key={image.id}
            source={{ uri: image.webformatURL }}
            style={{height:300, width:340, resizeMode:"contain", marginTop:10, borderRadius:20, }}
          />
          </TouchableOpacity>
          <View style={{flexDirection:"row", justifyContent:"space-between", margin:10, padding:4, marginBottom:10}}>
          <Text style={{color:"grey", fontSize:15, fontWeight:"200", textDecorationLine:"underline"}}>
           {image.tags} 
          </Text>
          <Text style={{marginLeft:10, color:"grey"}}>Likes
          <AntDesign name="like1" size={16} color="black" />:
          {image.likes}</Text>
          </View>
          <View style={{borderWidth:1, borderColor:"white"}}></View>
          </Animated.View>
        ))}
      </ScrollView>
    </View>
    </View>
    </View>
  );
};

export default GalleryScreen;
