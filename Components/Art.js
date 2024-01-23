import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';

const Art = () => {
  const [images, setImages] = useState([]);
  const [result, setResult] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(
          'https://api.unsplash.com/photos/?client_id=_It_BDO8gJAksBYg3w69QZtIiHMmgc38z_NpiIUC7Ug'
        );

        const data = await response.json();

        setImages(data);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

const Artwork= async()=>{
 const response = await axios.get("https://api.artic.edu/api/v1/artworks")
 console.log(response.data);
 const result= response.data;
 setResult(result);
}

useEffect(()=>{
  Artwork();
},[]);

console.log(result);
  const renderImageItem = ({ item }) => (
    <View style={styles.imageContainer}>
      <Image source={{ uri: item.urls.small }} style={styles.image} />
      <Text style={styles.imageAuthor}>{`Photo by ${item.user.name}`}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={images}
        keyExtractor={(item) => item.id}
        renderItem={renderImageItem}
      />

      {result.map((item, index)=>{
        (
          <View>
            <Image source={{uri: item.image}} style={{height:200, width:100, resizeMode:"contain"}}/>
            </View>
        )
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  imageContainer: {
    marginBottom: 20,
  },
  image: {
    width: 300,
    height: 200,
    borderRadius: 10,
  },
  imageAuthor: {
    marginTop: 5,
    fontSize: 12,
    color: 'gray',
  },
});

export default Art;
