import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';

import { nav } from '@react-navigation/native';

import * as mockList from '../../mockData';

//create an key.js file with your api key
import apiKey from '../../key';

const BASE_URL = `http://www.omdbapi.com/?apikey=${apiKey}&s=`;
const defaultMovies = JSON.stringify(mockList.search.Search);

export default class MainScreen extends React.Component {
  state = {
    movies: [],
    query: '',
  };

  render() {
    const { navigation } = this.props;
    const movies = this.state.movies;
    const query = this.state.query;

    const fetchMovies = async (search) => {
      const url = `${BASE_URL}${search}`;
      let response = await fetch(url);
      const json = await response.json();
      this.setState({ movies: json.Search });
    };

    const navigateToDetail = (movie) => {
      navigation.navigate('Detail', { movie });
    };

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Movie Browser</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder='Type to search, eg: Back to the future...'
            onSubmitEditing={() => fetchMovies(query)}
            onChangeText={(value) => this.setState({ query: value })}
          />
        </View>

        {movies ? (
          <FlatList
            style={styles.movieList}
            showsVerticalScrollIndicator={false}
            data={movies}
            keyExtractor={(item) => item.imdbID}
            renderItem={({ item: movie }) => (
              <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => navigateToDetail(movie)}
              >
                <View style={styles.movieContainer}>
                  <Image
                    style={styles.movieImage}
                    source={{ uri: movie.Poster }}
                  />
                  <View style={{ width: '60%', alignSelf: 'stretch' }}>
                    <Text style={styles.movieTitle}>{movie.Title}</Text>
                    <Text
                      style={styles.movieYear}
                    >{`Year: ${movie.Year}`}</Text>
                    <Text style={styles.movieCategory}>
                      {`Category: ${movie.Type}`}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            )}
          />
        ) : (
          <View>
            <Text style={styles.noResultsText}>No search results</Text>
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'flex-start',
  },
  title: {
    alignSelf: 'stretch',
    textAlign: 'center',
    marginTop: 55,
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
  },
  inputContainer: {
    alignItems: 'center',
    marginHorizontal: 12,
    marginTop: 16,
  },
  input: {
    paddingStart: 8,
    paddingVertical: 4,
    borderBottomColor: 'grey',
    borderBottomWidth: 2,
    borderRadius: 2,
    alignSelf: 'stretch',
    maxWidth: 600,
    color: 'white',
    fontSize: 18,
  },
  noResultsText: { fontSize: 20, textAlign: 'center' },
  movieList: { marginHorizontal: 12 },
  movieContainer: {
    borderRadius: 10,
    padding: 8,
    backgroundColor: 'rgba(200,200,200,0.25)',
    flexDirection: 'row',
    marginVertical: 12,
  },
  movieTitle: {
    color: 'white',
    marginTop: 4,
    fontSize: 22,
    fontWeight: 'bold',
    flexWrap: 'wrap',
  },
  movieImage: {
    borderRadius: 10,
    backgroundColor: 'rgba(200,200,200,0.25)',
    width: 80,
    height: 120,
    marginRight: 16,
  },
  movieYear: { color: 'white', fontSize: 14 },
  movieCategory: { color: 'white', fontSize: 14 },
});
