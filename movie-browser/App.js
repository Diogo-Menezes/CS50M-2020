import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  FlatList,
  Image,
} from 'react-native';

const movie = {
  title: '',
  year: '',
  imdbID: '',
  type: '',
  poster: '',
};

import { search } from './mockData';

export default class App extends React.Component {
  state = { movies: [] };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Movie Browser</Text>
        <TextInput
          style={styles.input}
          placeholder='Type to search, eg: Back to the future...'
        />
        <ScrollView
        style={styles.movieList}
        showsVerticalScrollIndicator={false}>
          {search.Search.map((movie) => (
            <View style={styles.movieContainer}>
              <Image style={styles.movieImage} source={{uri:movie.Poster}} />
              <View style={{width:"60%", alignSelf:"stretch"}}>
                <Text style={styles.movieTitle}>{movie.Title}</Text>
                <Text style={styles.movieYear}>
                  {`${movie.Year} (${movie.Type})`}
                </Text>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 16,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
  },
  title: {
    alignSelf:"stretch",
    textAlign:"center",
    marginTop: 24,
    fontSize: 28,
    fontWeight: 'bold',
  },
  input: {
    marginHorizontal: 12,
    marginTop:16,
    paddingStart: 8,
    paddingVertical: 4,
    alignSelf: 'stretch',
    borderWidth: 2,
    borderColor: 'grey',
  },
  movieList:{marginHorizontal:12},
  movieContainer: {borderRadius:10,adding:8,backgroundColor:"rgba(200,200,200,0.25)",flexDirection: 'row', marginVertical: 16},
  movieTitle: { marginTop:4,fontSize: 22, fontFamily: 'bold', flexWrap:"wrap"},
  movieImage: {borderRadius:10,backgroundColor:"rgba(200,200,200,0.25)", width: 80, height: 120,
  marginRight:16},
  movieYear: { fontSize: 14 },
});
