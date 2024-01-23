import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import axios from 'axios';

const PixabayGallery = () => {
  const [artImages, setArtImages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://pixabay.com/api/', {
          params: {
            key: '41038896-b31c7ece6d77ea221a0ceb759',
            q: 'art', // Search term (you can customize this)
            image_type: 'photo', // Specify the type of images (photo, illustration, vector)
            per_page: 30, // Number of images per page
          },
        });

        // Extract relevant image data from the response
        setArtImages(response.data.hits);
      } catch (error) {
        console.error('Error fetching Pixabay API:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <View>
    <View>
      <Text>Art Gallery</Text>
      <ScrollView>
        {artImages.map(image => (
        
          <Image
            key={image.id}
            source={{ uri: image.webformatURL }}
            style={{ width: 200, height: 200 }}
          />
        ))}
      </ScrollView>
    </View>
    </View>
  );
};

export default PixabayGallery;
