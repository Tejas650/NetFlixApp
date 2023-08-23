import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';

const MovieRow = ({title, url}) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const movieData = async () => {
      await fetch(url)
        .then(response => response.json())
        .then(data => setMovies(data.results));
    };

    movieData();
  }, []);

  return (
    <View>
      <Text style={{fontSize: 19, fontWeight: 'bold', color: 'white'}}>
        {title}
      </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {movies.map((movie, index) => (
          <Pressable>
            <Image
              style={{
                width: 105,
                margin: 10,
                height: 152,
                borderRadius: 6,
                resizeMode: 'cover',
              }}
              source={{
                uri: `https://image.tmdb.org/t/p/original/${movie?.poster_path}`,
              }}
            />
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
};

export default MovieRow;

const styles = StyleSheet.create({});
